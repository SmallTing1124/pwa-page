import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.svg', 'logo.png', 'images/**/*'],
      manifest: {
        name: '玖木介紹頁',
        short_name: '玖木',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#0f172a',
        // icons: [...],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'], // 確保這些檔案會被 cache
      }
    })
  ]
});