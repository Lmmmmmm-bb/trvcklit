import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const pwaOptions: Partial<VitePWAOptions> = {
  devOptions: { enabled: true },
  includeAssets: [
    'robots.txt',
    'favicon.ico',
    'apple-touch-icon.png',
    'background.svg',
    'logo.svg'
  ],
  manifest: {
    name: 'Trvcklit - travel checklist helper',
    short_name: 'Trvcklit',
    background_color: '#f5f5f5',
    display: 'fullscreen',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ]
  }
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'APP_');

  return {
    base: env.APP_BASE_URL,
    plugins: [react(), VitePWA(pwaOptions)],
    envPrefix: 'APP_',
    resolve: {
      alias: {
        '~': resolve(__dirname, 'src')
      }
    }
  };
});
