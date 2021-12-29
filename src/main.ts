import { createApp } from 'vue';

import router from '@/router';

import { setupAntd } from './antd-ui';
import App from './App';

const app = createApp(App);

app.use(router);
setupAntd(app);

app.mount('#app');
