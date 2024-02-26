import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { NavBar, Tabbar, TabbarItem } from 'vant';

const app = createApp(App)

app.use(Tabbar);
app.use(TabbarItem);
app.use(NavBar);

app.mount('#app')

