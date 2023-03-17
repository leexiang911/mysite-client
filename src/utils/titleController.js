// 网站标题控制js
let routerTitle = '';// 初始化路由标题
let sitiTitle = '';// 初始化网站标题

/**
 * 设置网站标题函数
 */
function setTitle() {
    if (!routerTitle || !sitiTitle) {
        document.title = "loading...";
    } else if (routerTitle && !sitiTitle) {
        document.title = routerTitle;
    } else if (!routerTitle && sitiTitle) {
        document.title = sitiTitle;
    } else {
        document.title = `${routerTitle} - ${sitiTitle}`;
    }
}


export default {
    /**
     * 设置路由标题
     * @param {String} title 标题
     */
    setRouterTitle(title) {
        routerTitle = title;
        setTitle();
    },

    /**
     * 设置网站标题
     * @param {String} title 标题
     */
    setSiteTitle(title) {
        sitiTitle = title;
        setTitle();
    }
}