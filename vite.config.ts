import path from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: ['.js', '.vue', '.json', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), vueJsx()],
});
