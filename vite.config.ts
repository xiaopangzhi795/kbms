import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true, //开启自动解包，有这个才能使用$ref,否则只能使用ref
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  base: "./",
  server: {
    host: "localhost",
    port: 9090,
    open: true,
    strictPort: false,
    https: false,
  },
  publicDir: "public",
  build: {
    assetsInlineLimit: 4096, //低于这个大小的图片使用base64，超过的使用图片资源路径
  },
});
