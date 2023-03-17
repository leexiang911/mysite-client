import axios from 'axios';
import showToast from "../utils/showToast";

const requestInstance = axios.create();// 创建一个axios的实例
/**
 * 请求的实例
 */
requestInstance.interceptors.response.use(function (resp) {
    if (resp.data.code !== 0) {// code不是0就是表示收到失败的请求，给一个弹窗
        showToast({
            content: resp.data.msg || "发生错误",
            type: "error",
            dration: 2000,
        });
        console.log("错误", resp.data)
        return null;
    }
    return resp.data.data;
});


export default requestInstance;// 导出网络请求实例

/**
 * 创建axios的实例，方便拦截
 * 如果code不是零，代表返回的是没有数据的，给个错误提示，并且返回空
 * 如果有数据就返回
 * 
 */