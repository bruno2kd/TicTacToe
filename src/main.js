import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/fonts.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
