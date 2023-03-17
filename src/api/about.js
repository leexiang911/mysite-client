import requestInstance from "./request";

export async function getAbout(){
    return await requestInstance.get("/api/about");
}