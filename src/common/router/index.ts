import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/home/Index.vue"),
    meta: {
      title: "主页",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;

  // 可以进行权限控制
  // const role = localStorage.getItem('ms_username');
  // if (!role && to.path !== '/login') {
  //   next('/login');
  // } else if (to.meta.permission) {
  //   // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
  //   role === 'admin'
  //       ? next()
  //       : next('/403');
  // } else {
  //   next();
  // }

  // 进入下个页面
  next();
});
