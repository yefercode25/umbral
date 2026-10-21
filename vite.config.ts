import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: [
        'favicon.ico',
        'icons/icon-192.png',
        'icons/icon-512.png',
        'icons/icon-maskable-512.png',
        'icons/apple-touch-icon.png',
        'icons/favicon-light.png',
        'icons/favicon-dark.png',
        'icons/brand-mark-256.png',
        'fonts/GoogleSans-VariableFont_GRAD,opsz,wght.ttf',
        'fonts/GoogleSans-Italic-VariableFont_GRAD,opsz,wght.ttf'
      ],
      manifest: {
        id: '/',
        name: 'Umbral · Aprende. Practica. Decide.',
        short_name: 'Umbral',
        description: 'Plataforma de estudio mobile-first y offline-first.',
        theme_color: '#FFFDF9',
        background_color: '#FFFDF9',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        lang: 'es-CO',
        dir: 'ltr',
        categories: ['education', 'productivity'],
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,png,svg,webp,json,ttf,webmanifest}'],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        cleanupOutdatedCaches: true,
        clientsClaim: true
      }
    })
  ]
})
