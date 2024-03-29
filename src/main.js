import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import ButtonComponent from "@/components/UI/ButtonComponent.vue";

import "./assets/main.css";
import "./assets/_shared.scss";

const app = createApp(App);

app.component("ButtonComponent", ButtonComponent);
app.use(createPinia());

app.mount("#app");
