import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
  },
  //import for Terminal:
  resolve:{
    alias:{
      "@": path.resolve(__dirname, "./src"),
      "assets": path.resolve(__dirname, "./src/assets"),
      "components": path.resolve(__dirname, "./src/components"),
      "constants": path.resolve(__dirname, "./src/constants"),
      "pages": path.resolve(__dirname, "./src/pages"),
      "router": path.resolve(__dirname, "./src/router"),
      "store": path.resolve(__dirname, "./src/store"),
    }
  }
})
