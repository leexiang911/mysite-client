import requestInstance from "./request";

/**
 * 获取留言板的留言
 * @param {Number} page 页码
 * @param {Number} limit 页容量
 * @returns 
 */
export async function getMessage(page = 1, limit = 10) {
    return await requestInstance.get("/api/message", {
        params: {
            page,
            limit,
        },
    });
}

/**
 * 提交新的留言
 * @param {Object} msgInfo 留言对象
 * @returns 
 */
export async function postMessage(msgInfo) {
    return await requestInstance.post("/api/message", msgInfo);
}