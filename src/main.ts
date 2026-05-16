import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import './assets/fonts.css' // Ή τη διαδρομή του δικού σου CSS αρχείου

import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);

app.mount("#app");
