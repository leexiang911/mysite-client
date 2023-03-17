import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";






/* import Home from "../views/Home";
import About from "../views/About";
import Blog from "../views/Blog";
import Project from "../views/Project";
import Message from "../views/Message";
import BlogDetail from "../views/Blog/BlogDetail"
 */
import NotFound from '../views/NotFound'

configure({
  trickleSpeed: 200,//进度条速度
  showSpinner: false,//是否显示旋转的小圈
})

/**
* 模拟延迟函数
* @param {Number} duration 延迟的时间
* @returns promise
*/
function delay(duration = 100) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, duration);
  })
}


function getPageComponent(pageCompResolve) {
  return async () => {
    start();//进度条开始 /* 这里的process.env.NODE_ENV是webpack生成在浏览器环境中的 */
    if (process.env.NODE_ENV === "development") {
      await delay(500);//开发环境中就延迟
    }
    const comp = await pageCompResolve();
    done();//进度条结束
    return comp;
  }
}


export default [
  //title是网站标题
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() => import(/*wepackChunkName:"Home"*/"../views/Home")),
    meta: { title: "Home" }
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() => import(/*wepackChunkName:"About"*/"../views/About")),
    meta: { title: "About Me" }
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() => import(/*wepackChunkName:"Blog"*/"../views/Blog")),
    meta: { title: "Article" }
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() => import(/*wepackChunkName:"Blog"*/"../views/Blog/index.vue")),
    meta: { title: "Article" }
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() => import(/*wepackChunkName:"Blog"*/"../views/Blog/BlogDetail")),
    meta: { title: "ArticleDetail" }
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() => import(/*wepackChunkName:"Project"*/"../views/Project")),
    meta: { title: "Project" }
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() => import(/*wepackChunkName:"Message"*/"../views/Message")),
    meta: { title: "Message" }
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound
  }
];
