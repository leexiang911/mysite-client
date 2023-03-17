import requestInstance from "./request";

export async function getBanners() {
    return await requestInstance.get("/api/banner");
}