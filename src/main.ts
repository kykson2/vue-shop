import { createApp } from "vue";
import "@/style.css";
import App from "@/App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import store from "@/store/store";
import router from "./router";

library.add(fas, far, fab);

const app = createApp(App);

app.use(router, axios, store);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.mount("#app");
app.config.globalProperties.axios = axios;
