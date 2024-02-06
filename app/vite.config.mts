import reactRefresh from '@vitejs/plugin-react';
import path from 'path';
import { ConfigEnv, UserConfigExport, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import express from 'vite3-plugin-express';

// https://vitejs.dev/config/
export default function ({}: ConfigEnv): UserConfigExport {
  return defineConfig({
    test: {
      globals: true,
      fileParallelism: false,
      reporters: 'dot',
      environment: 'happy-dom',
    },
    plugins: [
      tsconfigPaths(),
      reactRefresh(),
      express(path.resolve('../api/src/main.ts')),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      assetsDir: '.',
      // brotliSize: false,
    },
  });
}
