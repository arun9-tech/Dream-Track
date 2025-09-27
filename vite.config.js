import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the essential part that fixes the 404 error
  server: {
    historyApiFallback: true,
  },
});