import { RouteRecordRaw } from "vue-router";
export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      hideMenu: true,
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/layouts/index.vue"),
    meta: {
      title: "首页",
      icon: "House",
    },
    children: [],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hideMenu: true,
      title: "登录",
    },
  },
  {
    path: "/test",
    name: "test",
    redirect: "/test/labeler",
    meta: {
      title: "测试",
      icon: "Loading",
    },
    children: [
      {
        path: "/test/labeler",
        name: "DataLabeler",
        component: () => import("@/layouts/index.vue"),
        meta: {
          title: "测试1",
        },
      },
      {
        path: "/test/labeler1",
        name: "DataLabeler1",
        component: () => import("@/layouts/index.vue"),
        meta: {
          title: "测试22",
        },
      },
    ],
  },
];
