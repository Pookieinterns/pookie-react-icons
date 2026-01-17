import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/pookie-react-icons/', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'pookie-react-icons': path.resolve(__dirname, '../src/index.ts'),
    },
  },
});
