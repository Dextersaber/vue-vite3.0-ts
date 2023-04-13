import { defineStore, createPinia } from "pinia";

export const store = defineStore("store", {
  state: () => {
    return {
      themeConfig: {
        layout: "vertical",
        isCollapse: false,
      },
    };
  },
  getters: {},
  actions: {
    setThemeConfig(themeConfig: any) {
      this.themeConfig = { ...themeConfig };
    },
  },
});
const pinia = createPinia();
export default pinia;
