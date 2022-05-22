import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'APP_');
  return {
    base: env.APP_BASE_URL,
    plugins: [react()],
    envPrefix: 'APP_'
  };
});
