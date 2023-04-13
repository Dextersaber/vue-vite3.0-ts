<template>
  <component :is="layoutComponent[themeConfig.layout]"></component>
</template>
<script lang="ts" setup>
import { type Component, computed } from "vue";
import { store } from "@/stores";
import vertical from "./vertical/index.vue";
const stores = store();
const layoutComponent: { [key: string]: Component } = {
  vertical,
};
const themeConfig = computed(() => stores.themeConfig);
</script>
