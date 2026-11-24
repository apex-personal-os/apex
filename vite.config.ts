import { defineConfig } from 'vite'
import tailwind from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [tailwind(), VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'APEX', short_name: 'APEX', start_url: './', scope: './',
      display: 'standalone', theme_color: '#F6F2EC', background_color: '#F6F2EC',
      icons: [{src: 'apex.svg', sizes: 'any', type: 'image/svg+xml'}],
    },
  })],
})
