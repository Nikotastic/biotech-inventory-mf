import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'inventoryMF',
      filename: 'remoteEntry.js',
      exposes: {
        './InventoryDashboard': './src/features/inventory-dashboard/components/InventoryDashboard.jsx',
        './StockManagement': './src/features/stock-management/components/StockManagement.jsx',
        './StockMovements': './src/features/stock-movements/components/StockMovements.jsx',
        './InventoryStore': './src/shared/store/inventoryStore.js'
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'zustand', 'axios']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5006,
    cors: true
  }
})