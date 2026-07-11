/// <reference types="node" />
import { defineConfig } from "vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Plain multi-page static site — no framework.
export default defineConfig({
  server: { host: "::", port: 8080, strictPort: true, allowedHosts: true },
  preview: { host: "::", port: 8080, strictPort: true },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        drainCleaning: resolve(__dirname, "services/drain-cleaning.html"),
        serviceAreas: resolve(__dirname, "service-areas/index.html"),
        contact: resolve(__dirname, "contact.html"),
        notFound: resolve(__dirname, "404.html"),
      },
    },
  },
});
