const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../src/lib/blog-data.json");
const metaPath = path.join(__dirname, "../src/lib/blog-meta.json");
const contentPath = path.join(__dirname, "../src/lib/blog-content.json");

const rawData = fs.readFileSync(dataPath, "utf-8");
const blogPosts = JSON.parse(rawData);

const blogMeta = blogPosts.map((post) => {
  const { content, ...meta } = post;
  return meta;
});

const blogContent = {};
blogPosts.forEach((post) => {
  blogContent[post.slug] = post.content;
});

fs.writeFileSync(metaPath, JSON.stringify(blogMeta, null, 2));
fs.writeFileSync(contentPath, JSON.stringify(blogContent, null, 2));

console.log(
  "Successfully split blog-data.json into blog-meta.json and blog-content.json",
);
