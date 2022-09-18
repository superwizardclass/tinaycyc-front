import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter } from 'vue-router';
import App from './App.vue'

const store = createStore({
    state() {
        return {

        }
    }
});

const router = createRouter({

});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');



