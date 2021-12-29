import path from 'path';
import { defineConfig } from 'vite';
import styleImport from 'vite-plugin-style-import';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const { stage, env } = parseEnv();

  return {
    define: {
      PASS_ENV: { value: stage, env },
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      styleImport({
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `ant-design-vue/es/${name}/style`;
            },
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 更改主题在这里
            'primary-color': '#52c41a',
          },
          javascriptEnabled: true,
        },
      },
    },
  };
});

/** 解析环境变量 */
function parseEnv() {
  const stage = process.env.STAGE || 'dev1';

  const env = stage.match(/\D+/)?.[0];
  const envOrder = stage.match(/\d+/)?.[0]; // 第几套环境

  return { stage, env, envOrder };
}
