/// <reference types="vite/client" />

declare module '*.vue' {
import { DefineComponent } from 'vue';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare const React: string;
declare module '*.json';
declare module '*.png';
declare module '*.jpg';

declare const PASS_ENV: {
  value:
    | 'dev1'
    | 'dev2'
    | 'dev3'
    | 'test1'
    | 'test2'
    | 'test3'
    | 'test'
    | 'pre'
    | 'prod';
  /** 目前在跑的环境 */
  env: 'dev' | 'test' | 'pre' | 'prod';
};
