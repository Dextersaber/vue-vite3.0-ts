<template>
  <el-container class="layout">
    <el-aside :width="themeConfig.isCollapse ? '65px' : '210px'">
      <div class="menu">
        <div class="logo">
          <img
            src="https://img.alicdn.com/imgextra/i4/O1CN01fbqryd1ZossCmdlga_!!6000000003242-54-tps-200-200.apng"
            alt=""
          />
          <span v-show="!themeConfig.isCollapse">Phoenix</span>
        </div>
        <el-menu
          background-color="#191a20"
          text-color="#fff"
          :default-active="activeMenu"
          :collapse="themeConfig.isCollapse"
          class="vertical el-menu-vertical-demo"
        >
          <Submenu :menuList="menuList"></Submenu>
        </el-menu>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <div class="header-left">
          <el-icon class="collapse-icon" @click="collapse">
            <component
              :is="themeConfig.isCollapse ? 'expand' : 'fold'"
            ></component>
          </el-icon>
        </div>
        <div class="header-right">
          <Language />
          <span class="theme">
            <el-switch
              v-model="themeValue"
              class="ml-2"
              inline-prompt
              style="
                --el-switch-on-color: #13ce66;
                --el-switch-off-color: #ff4949;
              "
              :active-icon="Sunny"
              :inactive-icon="Moon"
            />
          </span>
          <el-icon class="collapse-icon" @click="toggle">
            <component :is="isFullscreen ? 'Aim' : 'FullScreen'"></component>
          </el-icon>
          <span class="username">Phoenix</span>
        </div>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { store } from "@/stores";
import Submenu from "../components/Submenu.vue";
import Language from "../components/Language.vue";
import { useRouter, useRoute } from "vue-router";
import { useFullscreen } from "@vueuse/core";
import { staticRouter } from "@/router/modules/staticRouter";
import { Sunny, Moon } from "@element-plus/icons-vue";
const router = useRouter();
const menuList = ref<any>([]);
const route = useRoute();
const stores = store();
const themeValue = ref<boolean>(false);
const { isFullscreen, toggle } = useFullscreen();
const themeConfig = computed(() => stores.themeConfig);
const filterMenu = (list: any) => {
  const menus =
    list?.length &&
    list.filter((item: any) => {
      if (item?.children?.length > 0) {
        item.children = item.children.filter(
          (child: any) => !child?.meta.hideMenu
        );
      }
      return !item?.meta.hideMenu;
    });
  return menus;
};
menuList.value = filterMenu(staticRouter);
const activeMenu = computed(() => route.path);
console.log("route", route.path);

const collapse = () => {
  stores.setThemeConfig({
    ...stores.themeConfig,
    isCollapse: !themeConfig.value.isCollapse,
  });
};
</script>
<style lang="scss">
.layout {
  width: 100%;
  height: 100%;
  .el-aside {
    transition: all 0.3s ease;
  }
  .menu {
    width: auto;
    height: 100%;
    background-color: #191a20;
    border-right: 1px solid #191a20;
    .logo {
      box-sizing: border-box;
      height: 55px;
      border-bottom: 1px solid #282a35;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #282a35;
      img {
        width: 28px;
      }
      span {
        font-size: 21.5px;
        font-weight: bold;
        color: #dadada;
        white-space: nowrap;
      }
    }
    .el-menu {
      border-right: none;
    }
    .el-menu,
    .el-menu--popup {
      .el-menu-item {
        background: #191a20;
        &.is-active {
          background: #060708;
          &::before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 4px;
            content: "";
            background: #f00;
          }
        }
      }
    }
  }
  .el-header {
    border-bottom: 1px solid #f1f1f1;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    padding: 0 15px;
    background-color: #ffffff;
    .collapse-icon {
      margin-right: 20px;
      font-size: 22px;
      cursor: pointer;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .theme {
      padding: 0 10px;
    }
    .username {
      margin: 0 20px;
      font-size: 15px;
    }
  }
}
</style>
