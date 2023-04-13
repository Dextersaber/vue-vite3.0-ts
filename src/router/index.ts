import { createRouter, createWebHistory } from "vue-router";
import { staticRouter } from "./modules/staticRouter";
const router = createRouter({
  history: createWebHistory(),
  routes: [...staticRouter],
});

export default router;
