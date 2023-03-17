<template>
    <div v-loading="isLoading" ref="container" class="blog-list-container">
        <div class="container">
            <div v-for="(item, i) in data.rows" :key="item.id" class="card m-1" style="width:18rem;height: max-content;">
                <img @click.stop="clickHandle(item)" v-if="item.thumb" :src="item.thumb" class="card-img-top" alt="...">
                <div v-if="item.category" class="card-body">
                    <h5 @click.stop="clickHandle(item)" class="card-title">{{ item.title }}</h5>
                    <p @click.stop="clickHandle(item)" class="card-text">{{ item.description }}</p>
                    <p class="info"><i class="bi bi-chat-right-text-fill"></i>{{ item.commentNumber }} <i
                            class="bi bi-eye-fill"></i>{{ item.scanNumber }} <i class="bi bi-calendar-date-fill"></i>{{
                                formatDate(item.createDate) }}
                        <RouterLink class="blogTypeLink" :to="{
                            name: 'CategoryBlog',
                            params: {
                                categoryId: item.category.id
                            }
                        }">{{ item.category.name }}</RouterLink>
                    </p>
                </div>
            </div>

        </div>
        <!-- 无数据 -->
        <Empty v-if="!isLoading && data.rows.length === 0" />
        <!-- 分页 -->
        <pager v-if="data.total && data.total > 5" :current="routeInfo.page" @pageChange="handlePageChange"
            :limit="routeInfo.limit" :total="data.total" />

    </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getBlogs } from '@/api/blog.js';
import { formatDate } from '../../../utils/index';
import Pager from "../../../components/Pager";
import Empty from "../../../components/Empty";
export default {
    components: {
        Pager,// 分页组件
        Empty,
    },
    mixins: [fetchData({ total: 0, rows: [] })],
    methods: {
        async fetchData() {
            const res = await getBlogs(
                this.routeInfo.page,
                this.routeInfo.limit,
                this.routeInfo.categoryId
            )
            return res;
        },
        formatDate,
        /**
         * 分页组件emit过来的事件，表示翻页,点击后决定跳转路由
         * @param {Number} newPage 新的一页
         */
        handlePageChange(newPage) {
            // console.log(newPage);
            const query = {
                page: newPage,// 页码=》新的一页
                limt: this.routeInfo.limit,// 页容量
            }

            //没有分类的跳转
            if (this.routeInfo.categoryId === -1) {
                // categoryId是-1表示没有分类
                this.$router.push({
                    name: "Blog",
                    query,
                });

                // 有分类的跳转
            } else {
                console.log(666)
                this.$router.push({
                    name: "CategoryBlog",
                    query,
                    params: {
                        categoryId: this.routeInfo.categoryId
                    }
                });
            }
        },

        // 点击卡片
        clickHandle(item) {
            this.$router.push({
                name: "BlogDetail",
                params: {
                    id: item.id
                }
            })
        },

    },
    computed: {
        routeInfo() {
            // 通过路由信息获取文章分类信息
            const categoryId = this.$route.params.categoryId || -1; // 分类id
            const page = +this.$route.query.page || 1;// 页码
            const limit = +this.$route.query.limit || 10;// 页容量
            return {
                categoryId,
                page,
                limit,
            }
        }
    },
    created() { },
    watch: {
        async $route() {
            this.isLoading = true;// 设置在加载中状态
            await this.$emit("scrollTop");// 让父元素设置滚动条高度
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

* {
    scroll-behavior: smooth;
    -webkit-user-drag: none;
    user-select: none;
}

.blog-list-container {
    width: 100%;
    height: 100%;
    position: relative;

    .container {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        font-size: 1rem;

        .info {
            font-size: 0.8rem;
            user-select: none;
        }

        .card-text {
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .blogTypeLink {
            text-decoration: none;
            color: @mainColor;
        }
    }
}
</style>