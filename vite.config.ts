import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgrPlugin from "vite-plugin-svgr";

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgrPlugin()],
  base: "/Portifolio",
});
