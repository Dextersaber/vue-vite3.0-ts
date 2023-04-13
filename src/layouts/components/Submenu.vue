<template>
  <template v-for="item in menuList" :key="item.path">
    <el-sub-menu
      v-if="item.children && item.children.length > 0"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <SubMenu :menuList="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path" @click="handleClickMenu(item)">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>
<script lang="ts" setup>
import SubMenu from "./Submenu.vue";
import { useRouter } from "vue-router";
interface propType {
  menuList: any;
}
const router = useRouter();
withDefaults(defineProps<propType>(), {
  menuList: [],
});
const handleClickMenu = (item: any) => {
  console.log("item", item);
  router.push(item.path);
};
</script>
