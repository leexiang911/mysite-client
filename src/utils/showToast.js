import getComponentRootDom from "./getCompnentsRootDom.js";// 要获取某个组件的根节点元素
import Icon from '../components/Icon';// 获取到图标组件
import styles from './showToast.module.less'

/**
 * 弹出showTost
 * @param {Object} options {content:"消息内容",type:"消息类型",duration:"数字类型，持续时间",container:html元素，如果不传就会在body中显示}
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    // 创建消息元素
    const messagediv = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type,
    });

    messagediv.innerHTML = `${iconDom.outerHTML} &nbsp; ${content}`;

    const typeClassNmae = styles[`message-${type}`];// 设置样式类名
    messagediv.className = `${styles.message} ${typeClassNmae}`;

    if (options.container) {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
    }

    container.appendChild(messagediv);
    // 浏览器强行渲染
    messagediv.clientHeight; // 导致reflow

    // 回归到正常位置
    messagediv.style.opacity = 1;
    messagediv.style.transform = `translate(-50%, -50%)`;
    // 等一段时间，消失
    setTimeout(() => {
        messagediv.style.opacity = 0;
        messagediv.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        messagediv.addEventListener(
            "transitionend",
            function () {
                messagediv.remove();
                // 运行回调函数
                options.callback && options.callback();
            },
            { once: true }
        );
    }, duration);
}