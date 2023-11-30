import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

import App from './App.vue';

import { registerPlugins } from './plugins';

const app = createApp(App);

library.add(faEyeSlash, faEye);

registerPlugins(app);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
