import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  plugins: [
    react(),
    federation({
      name: "realInventoryMF", // Changed name to avoid conflict
      filename: "remoteEntry.js",
      exposes: {
        "./InventoryDashboard":
          "./src/features/inventory-dashboard/components/InventoryDashboard.jsx",
        "./InventoryStore": "./src/shared/store/inventoryStore.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand", "axios"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5007, // Changed from 5006
    cors: true,
  },
});
