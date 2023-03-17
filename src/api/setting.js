import requestInstance from "./request";

/**
 * 获取全局设置
 * @returns 
 */
export async function getSetting(){
    return await requestInstance.get("/api/setting");
}