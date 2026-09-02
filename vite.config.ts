// Configured for Vercel deployment.
// cloudflare: false — disables @cloudflare/vite-plugin so the build outputs a Vercel-compatible bundle.
// tanstackStart.server.preset: 'vercel' — tells Nitro (TanStack Start's build engine) to generate
//   Vercel Functions output under .vercel/output instead of Cloudflare Workers format.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Disable the Cloudflare Workers adapter — not needed on Vercel
  cloudflare: false,
  tanstackStart: {
    server: {
      preset: "vercel",
    },
  },
  // @ts-ignore - Bypass lovable type restriction to allow custom build config
  build: {
    // Target modern browsers for smaller bundles
    target: "es2020",
    // Enable CSS minification
    cssMinify: true,
    // Smaller chunks for better caching
    rollupOptions: {
      onwarn(warning, warn) {
        if (
          warning.code === "UNUSED_EXTERNAL_IMPORT" &&
          warning.message.includes("@tanstack/router-core")
        )
          return;
        warn(warning);
      },
      output: {
        // Split vendor libraries into separate chunks
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lucide-react")) return "icons";
            if (
              id.includes("@radix-ui") ||
              id.includes("@tanstack/react-query")
            )
              return "ui";
            if (
              id.includes("@tanstack/react-router") ||
              id.includes("@tanstack/router")
            )
              return "router";
            return "vendor";
          }
        },
      },
    },
  },
});
