// import "jquery"
import "bootstrap"
// import "./mock";// 传入mock，运行一遍
import Vue from 'vue';//传入vew
import App from './App.vue';//传入app组件
import router from "./router";// 导入router
import showToast from './utils/showToast';// 弹出提示
import store from './store';// 导入vuex 仓库
// Vue.config.productionTip = true;// 开发阶段的提示，可以删掉
Vue.prototype.$showToast = showToast;// 挂载弹出提示

// 注册全局指令
import vLoading from "./directives/loading";// 加载的指令
Vue.directive("loading", vLoading);

new Vue({
  router,
  store,
  render: (h) => h(App),// 渲染
}).$mount("#app");// 挂载
store.dispatch("setting/fetchSetting");
// import { getSetting } from "./api/setting"
// getSetting().then((resp)=>{

//   console.log(resp,6566)
// })