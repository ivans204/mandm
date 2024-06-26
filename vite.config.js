import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import 'dotenv/config';

export default defineConfig({
    build: {
        minify: process.env.APP_ENV === 'production' ? 'esbuild' : false,
        cssMinify: process.env.APP_ENV === 'production',
    },
    plugins: [
        laravel({
            input: ['resources/react/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    server:
        process.env.APP_ENV === 'production'
            ? {
                  host: true,
                  strictPort: true,
                  port: 5173,
                  hmr: {
                      protocol: 'wss',
                      host: `${process.env.DDEV_HOSTNAME}`,
                  },
              }
            : {},
});
