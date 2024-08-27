import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiGit } from "oh-vue-icons/icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as LaIcons from "oh-vue-icons/icons/la";
import * as CoIcons from "oh-vue-icons/icons/co";

const fa = Object.values({ ...FaIcons });
const la = Object.values({ ...LaIcons });
const co = Object.values({ ...CoIcons });
addIcons(...fa, ...la, ...co, BiGit);
const app = createApp(App)
app.component("VIcon", OhVueIcon);


app.mount('#app');
