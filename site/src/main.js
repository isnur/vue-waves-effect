import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Waves from '../../src/index';

Vue.use(Waves, {
    duration: 500,
    delay: 200
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
