import Vue from "vue";

/**
 * 获取某个组件的实例根节点
 * @param {HTMLElement} comp  组件
 * @param {String} props 属性
 * @returns 
 */
export default function(comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  });
  vm.$mount();
  return vm.$el;
}
