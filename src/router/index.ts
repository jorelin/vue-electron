import Vue from "vue";
import VueRouter from "vue-router";

// 使用vue插件 --- 路由插件 ，在new关键字之前调用
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/l",
    name: "Layout",
    component: () => import(/* webpackChunkName: "about" */ "../views/Layout.vue"),
    children:[
      {
        path: "/home",
        name: "Home",
        component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue"),
      },
    ]

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
