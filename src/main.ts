import { createApp } from "vue";
import "vue-global-api";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import ElementPlus from "element-plus";
import router from "./router/index";
import "element-plus/dist/index.css";
import pinia from "@/stores/index";
import * as Icons from "@element-plus/icons-vue";
import "@/assets/style/index.scss";
const app = createApp(App);
// 注册element Icons组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});
app.use(router).use(ElementPlus).use(pinia).mount("#app");
