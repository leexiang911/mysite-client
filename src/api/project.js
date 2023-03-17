import requestInstance from "./request";

/**
 * 获取项目地址
 * @returns 
 */
export async function getProject(){
    return await requestInstance.get("/api/project");
}