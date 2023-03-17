// index.js 文件作用是导入全波mock的数据，然后再传给main.js

import "./banner";// 首页图
import "./blog";// 文章
import "./setting";// 全局设置
import "./about";// 关于
import "./project";// 项目
import "./message";// 留言板
import Mock from 'mockjs';// 导入mockjs
Mock.setup({
    timeout: "1000-2000"
})