import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@fortawesome/fontawesome-free/css/all.css"; // Importação do FontAwesome

createApp(App).use(router).mount("#app");
