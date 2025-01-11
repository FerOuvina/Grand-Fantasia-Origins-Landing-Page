import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif'], // Cache image files
      manifest: {
        name: 'Your App Name',
        short_name: 'App',
        description: 'Your App Description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.startsWith('/images'),
            handler: 'CacheFirst', // Caches the images, fetching from cache first
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // Cache for 30 days
              }
            }
          }
        ]
      }
    }),
    react()
  ]
});
