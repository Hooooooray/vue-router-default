import {createApp} from 'vue';
import App from './App.vue';
import router from './router'

import 'vant/lib/index.css';
import {
    Button,
    Tabbar, TabbarItem
} from 'vant';

const app = createApp(App);

app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)

app.use(router).mount('#app')