
/**
 * 时间戳变成准确时间
 * @param {Number} timestamp 时间戳
 * @returns 
 */
export default function (timestamp) {
    const date = new Date(+timestamp);
    const Y = date.getFullYear();
    const M = date.getMonth() + 1;
    const D = date.getDate();
    return `${Y}-${M.toString().padStart(2, "0")}-${D.toString().padStart(2, "0")}`;
}