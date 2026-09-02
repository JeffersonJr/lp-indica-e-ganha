import { XMLParser } from "fast-xml-parser";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, extname } from "path";
import crypto from "crypto";

// Define current author structure based on data.ts
const authorsMap: Record<string, any> = {
  admin: {
    name: "Marlon Ruiz",
    role: "Especialista em PropTech",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
  },
  default: {
    name: "Equipe Microsistec",
    role: "Redação",
    avatarUrl: "/icon.svg",
  },
};

const formatPubDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  return `${String(date.getDate()).padStart(2, "0")} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const extractTextFromHtml = (html: string) => {
  return html.replace(/<[^>]*>?/gm, "").trim();
};

const calculateReadTime = (html: string) => {
  const words = extractTextFromHtml(html).split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min de leitura`;
};

// Setup image directory
const blogImagesDir = join(process.cwd(), "public", "blog-images");
if (!existsSync(blogImagesDir)) {
  mkdirSync(blogImagesDir, { recursive: true });
}

async function downloadImage(url: string, prefix: string): Promise<string> {
  // If it's already a local URL or data URI or unsplash fallback, skip
  if (
    url.startsWith("/") ||
    url.startsWith("data:") ||
    url.includes("unsplash.com")
  )
    return url;

  try {
    let cleanUrl = url.trim();
    if (cleanUrl.startsWith("//")) cleanUrl = "https:" + cleanUrl;

    const res = await fetch(cleanUrl);
    if (!res.ok) {
      console.warn(`[!] Skipping ${cleanUrl}: HTTP ${res.status}`);
      return url;
    }

    const buffer = await res.arrayBuffer();

    let ext = "";
    try {
      ext = extname(new URL(cleanUrl).pathname);
    } catch (e) {}

    if (!ext || ext.length > 5 || ext.includes("?")) {
      const ct = res.headers.get("content-type");
      if (ct?.includes("jpeg") || ct?.includes("jpg")) ext = ".jpg";
      else if (ct?.includes("png")) ext = ".png";
      else if (ct?.includes("gif")) ext = ".gif";
      else if (ct?.includes("webp")) ext = ".webp";
      else ext = ".jpg";
    }

    const filename = `${prefix}-${crypto.randomUUID().slice(0, 8)}${ext}`;
    const filepath = join(blogImagesDir, filename);
    writeFileSync(filepath, Buffer.from(buffer));

    return `/blog-images/${filename}`;
  } catch (err: any) {
    console.error(`[!] Failed to download ${url}: ${err.message}`);
    return url;
  }
}

async function processContentImages(
  html: string,
  postId: string,
): Promise<string> {
  // Regex to find all <img src="URL">
  const imgRegex = /<img([^>]+)src="([^">]+)"([^>]*)>/g;
  const matches = [...html.matchAll(imgRegex)];
  let updatedHtml = html;

  for (let i = 0; i < matches.length; i++) {
    const fullTag = matches[i][0];
    const beforeSrc = matches[i][1];
    const srcUrl = matches[i][2];
    const afterSrc = matches[i][3];

    const localUrl = await downloadImage(srcUrl, `content-${postId}-${i}`);

    const newTag = `<img${beforeSrc}src="${localUrl}"${afterSrc}>`;
    updatedHtml = updatedHtml.replace(fullTag, newTag);
  }

  return updatedHtml;
}

async function run() {
  const xmlPath = join(
    process.cwd(),
    "content",
    "microsistec.WordPress.2026-08-12.xml",
  );
  const jsonPath = join(process.cwd(), "src", "lib", "blog-data.json");

  console.log("Reading XML file...");
  const xmlData = readFileSync(xmlPath, "utf-8");

  const parser = new XMLParser({
    ignoreAttributes: false,
    parseTagValue: false, // leave CDATA and content as strings
  });

  console.log("Parsing XML...");
  const jsonObj = parser.parse(xmlData);

  const items = jsonObj.rss.channel.item || [];
  const postsArray = Array.isArray(items) ? items : [items];

  // Create an attachment map (id -> url)
  const attachmentsMap = new Map<string, string>();
  for (const item of postsArray) {
    if (item["wp:post_type"] === "attachment") {
      attachmentsMap.set(String(item["wp:post_id"]), item["wp:attachment_url"]);
    }
  }

  const blogPosts = [];

  for (const item of postsArray) {
    if (item["wp:post_type"] !== "post") continue;
    if (item["wp:status"] !== "publish") continue;

    const postId = String(item["wp:post_id"]);

    // Process Categories/Tags
    let tag = "Geral";
    if (item.category) {
      let firstCat = Array.isArray(item.category)
        ? item.category[0]
        : item.category;
      if (firstCat && typeof firstCat === "object" && firstCat["#text"]) {
        tag = firstCat["#text"];
      } else if (typeof firstCat === "string") {
        tag = firstCat;
      }
    }

    // Process Featured Image
    let thumbnailId = null;
    let yoastImage = null;

    if (item["wp:postmeta"]) {
      const metaArray = Array.isArray(item["wp:postmeta"])
        ? item["wp:postmeta"]
        : [item["wp:postmeta"]];
      for (const meta of metaArray) {
        if (meta["wp:meta_key"] === "_thumbnail_id") {
          thumbnailId = String(meta["wp:meta_value"]);
        }
        if (meta["wp:meta_key"] === "_yoast_wpseo_opengraph-image") {
          yoastImage = String(meta["wp:meta_value"]);
        }
      }
    }

    const rawContent = item["content:encoded"] || "";
    let rawCoverUrl =
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"; // Default

    if (thumbnailId && attachmentsMap.has(thumbnailId)) {
      rawCoverUrl = attachmentsMap.get(thumbnailId)!;
    } else if (yoastImage && yoastImage.startsWith("http")) {
      rawCoverUrl = yoastImage;
    } else {
      const imgMatch = rawContent.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch && imgMatch[1]) {
        rawCoverUrl = imgMatch[1];
      }
    }

    // Force CloudFront for any lingering old server links
    if (rawCoverUrl.includes("microsistec.com.br/wp-content/uploads/")) {
      rawCoverUrl = rawCoverUrl.replace(
        /https?:\/\/(www\.)?microsistec\.com\.br\/wp-content\/uploads\//,
        "https://d2xnmiivr6f5qr.cloudfront.net/wp-content/uploads/",
      );
    }

    // DOWNLOAD IMAGES
    console.log(`Processing Post ID: ${postId}`);
    const localCoverUrl = await downloadImage(rawCoverUrl, `cover-${postId}`);
    const localContent = await processContentImages(rawContent, postId);

    // Process Excerpt
    let excerpt = item["excerpt:encoded"] || "";
    if (!excerpt) {
      excerpt = extractTextFromHtml(localContent).substring(0, 150) + "...";
    } else {
      excerpt = extractTextFromHtml(excerpt);
    }

    const authorLogin = item["dc:creator"];
    const author = authorsMap[authorLogin] || authorsMap.default;

    blogPosts.push({
      id: postId,
      slug: item["wp:post_name"] || `post-${postId}`,
      tag: tag,
      title: item.title,
      excerpt: excerpt,
      date: formatPubDate(item["wp:post_date"] || item.pubDate),
      readTime: calculateReadTime(localContent),
      imageUrl: localCoverUrl,
      author: author,
      content: localContent,
    });
  }

  console.log(
    `Successfully extracted ${blogPosts.length} posts and downloaded images.`,
  );

  writeFileSync(jsonPath, JSON.stringify(blogPosts, null, 2), "utf-8");
  console.log(`Data written to ${jsonPath}`);
}

run().catch((err) => {
  console.error("Error migrating:", err);
  process.exit(1);
});
