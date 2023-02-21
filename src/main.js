import { createApp } from "vue";
import App from "./App.vue";

// import "./assets/main.css";

import router from "./router";
import baseUrl from "./baseUrl";

createApp(App).use(router).use(baseUrl).mount("#app");
