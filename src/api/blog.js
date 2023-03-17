import requestInstance from "./request";


/**
 * 分页获取博客列表，获取文章列表
 * @param {number} page 页码
 * @param {Number} limit 页容量
 * @param {Number} categoryid 分类id
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await requestInstance.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        },
    });
}

/**
 * 获取博客所有分类
 * @returns 
 */
export async function getBlogTypes() {
    return await requestInstance.get("/api/blogtype");
}

/**
 * 获取单篇文章博客
 * @param {String} id 博客id
 * @returns 
 */
export async function getBlog(id) {
    return await requestInstance.get(`/api/blog/${id}`);
}


/**
 * 提交评论
 * @param {Object} commentInfo 评论对象的信息，比如头像，姓名，博客的id
 * @returns 
 */
export async function postComment(commentInfo) {
    console.log(commentInfo, "post")
    return await requestInstance.post(`/api/comment`, commentInfo);
}


/**
 * 分页获取博客评论
 * @param {Number} blogid 博客id
 * @param {Number} page 页码
 * @param {Number} limit 页容量
 * @returns 
 */
export async function getComments(blogid, page = 1, limit = 10) {
    return await requestInstance.get("/api/comment", {
        params: {
            blogid,
            page,
            limit
        }
    });
}