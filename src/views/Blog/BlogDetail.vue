<template>
    <div v-if="data" class="Blog-container bg-light" ref="blogcontainer" v-loading="isLoading">

        <div v-if="data" style="min-height: 120px;" class="overflow-hidden h-100">
            <div class="collapse overflow-hidden collapse-horizontal h-100" id="collapseWidthExample">
                <div class="card card-body overflow-hidden h-100 rounded-0 m-0 p-0 border-0 border-end">
                    <div class="content bg-light p-1 border-0">
                        <LeftList :list="tocWithSelect" @select="handleSelect" />
                    </div>
                </div>
            </div>
        </div>

        <button v-if="data" @click="unfoldHandle" class="btn h-100 btn btn-light p-0 border-0 align-self-start d-flex fs-5"
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false"
            aria-controls="collapseWidthExample">
            <i ref="double" class="bi bi-chevron-double-right"></i>
        </button>

        <article @scroll="myscroll" ref="arciclecontainer" v-if="data"
            :style="{ width: (isUfold ? 'calc(100% - 19vw)' : '100%') }" class="main h-100 text-start bg-light">
            <h1 class="fs-3 m-0">{{ data.title }}</h1>
            <div class="aside text-black-50">
                <span>日期{{ formatDate(data.createDate) }}</span>
                <span>浏览{{ data.scanNumber }}</span>
                <span> <a href="#data-from-container">评论{{ data.commentNumber }}</a></span>
                <span>
                    <router-link :to="{ name: 'CategoryBlog', params: { categoryId: data.category.id } }">{{
                        data.category.name }}</router-link>
                </span>
            </div>
            <div class="blogdetailcontent w-100 markdown-body mb-5 border-bottom" v-html="data.htmlContent"></div>

            <!-- 评论区域 -->
            <BlogComment />
        </article>


    </div>
</template>

<script>
import fetchData from "../../mixins/fetchData";

import { getBlog } from "../../api/blog";
import { formatDate } from '../../utils'
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import LeftList from './components/LeftList.vue';
import BlogComment from "./components/BlogComment.vue";
import eventbus from '../../eventBus';
import debounce from "../../utils/debounce";
import { titleController } from '../../utils/index'
export default {
    name: "BlogDetail",
    mixins: [fetchData(null)],
    components: {
        LeftList,
        BlogComment
    },
    data() {
        return {
            isUfold: false,//是否展开
            activeAnchor: "",// 激活的id
        }
    },
    methods: {
        async fetchData() {
            const resp = await getBlog(this.$route.params.id);
            if(!resp){
                this.$router.push("/404");
                return;
            }
            titleController.setRouterTitle(resp.title)
            return resp;
        },
        unfoldHandle() {
            if (this.$refs.double.className === "bi bi-chevron-double-right") {
                this.$refs.double.className = "bi bi-chevron-double-left";
                this.isUfold = true;
            } else {
                this.$refs.double.className = "bi bi-chevron-double-right";
                this.isUfold = false;
            }
        },
        formatDate,
        handleSelect(e) {
            window.location.hash = e.anchor;

            this.activeAnchor = e.anchor;
        },
        //作用是监听滚动条到达底部，然后让评论列表加载
        myscroll(e) {
            const range = 50
            const scrollTop = e.target.scrollTop + e.target.offsetHeight + range
            const scrollHandle = e.target.scrollHeight;
            // this.setSelect()

            debounce(this.setSelect, 500)()

            if (scrollTop >= scrollHandle) {
                eventbus.$emit("scrollToBottom")
            }
        },
        setSelect() {
            this.activeAnchor = '';
            const range = 200;
            for (const dom of this.doms) {
                // 看看当前dom元素是不是应该被选中
                if (!dom) {
                    continue;
                }
                const top = dom.getBoundingClientRect().top;
                if (top >= 0 && top <= range) {
                    this.activeAnchor = dom.id;
                    return;
                } else if (top > range) {
                    return;
                } else {
                    this.activeAnchor = dom.id;
                }
            }
        }
    },


    mounted() {
        const hash = window.location.hash
        window.location.hash = '';
        setTimeout(() => {
            window.location.hash = hash
        }, 2000);
    },
    created() {

    },
    computed: {

        tocWithSelect() {
            const getToc = (toc = []) => {
                return toc.map(t => ({
                    ...t,
                    isSelect: t.anchor === this.activeAnchor,
                    children: getToc(t.children)
                }))
            }
            return getToc(this.data.toc)
        },
        doms() {
            // 找到标题目录的所有dom元素
            const doms = [];
            const addDoms = (toc) => {
                for (const t of toc) {
                    doms.push(document.getElementById(t.anchor))
                    if (t.children && t.children.length) {
                        addDoms(t.children);
                    }
                }
            }
            addDoms(this.data.toc)
            return doms;
        }

    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
// @import "~@/styles/markdown.css";
// @import "~@/styles/html.css";


* {
    scrollbar-color: @mainColor transparent;
    scroll-behavior: smooth;

    // 滚动条样式
    ::-webkit-scrollbar {
        background-color: transparent;
        width: 8px;
    }

    //滚动条的图标
    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: @mainbgcolor;
        border: 4px solid transparent;
    }
}

@media (max-width: 576px) {

    ::-webkit-scrollbar {
        background-color: transparent;
        width: 6px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background-color: @mainbgcolor;
        border: none;
    }
}

.Blog-container {
    width: 100%;
    position: relative;
    margin: 0;
    display: flex;
    flex-direction: row;

    .content {
        overflow: hidden;
        overflow-y: scroll;
        width: 18vw;
        max-height: 100%;
        text-align: start;
        user-select: none;
        border-radius: 0;
        font-size: 0.9rem;
    }

    .main {
        overflow: hidden;
        overflow-y: scroll;

        .aside {
            font-size: 0.8rem;

            span {
                padding-right: 0.4rem;
                user-select: none;
            }
        }
    }
}

.btn {
    color: @mainbgcolor;
}
</style>