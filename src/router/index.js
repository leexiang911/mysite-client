import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import { titleController } from '../utils/index'

if (!window.VueRouter) {// 表示不是cdn才使用
  Vue.use(VueRouter); // 使用一个vue插件
}

const router = new VueRouter({
  // 配置
  routes, // 路由匹配规则
  mode: "history",
});
router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouterTitle(to.meta.title)
  }
})

export default router;
