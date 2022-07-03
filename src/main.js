import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/global.scss";
import "@/assets/font/stylesheet.css";

createApp(App).use(router).mount("#app");
