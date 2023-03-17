<template>
    <div class="blog-comment-container">
        <MessageArea title="评论" :subTitle="`${data.total}`" :list="data.rows" @submitData="handleSubmit"
            :isListLoading="isLoading" />
    </div>
</template>

<script>
import MessageArea from '../../../components/MessageArea';
import fetchData from '../../../mixins/fetchData';
import { getComments, postComment } from "../../../api/blog"
import eventbus from '../../../eventBus'
export default {
    mixins: [fetchData({ total: 0, rows: [] })],
    components: {
        MessageArea
    },
    data() {
        return {
            page: 1,
            limit: 10,
        }
    },
    computed: {
        // 判断还有数据没有
        hasMore() {
            return this.data.rows.length < this.data.total;
        },
    },
    methods: {
        async fetchData() {
            return await getComments(this.$route.params.id, this.page, this.limit)
        },
        // 提交评论的处理函数
        async handleSubmit(formData, Callback) {
            console.log("提交")
            const resp = await postComment({
                blogId: this.$route.params.id,
                ...formData,
            });

            this.data.rows.unshift(resp)
            this.data.total++;
            Callback();
        },
        // 滚动条触底事件
        scrollToBottomHandle() {
            if (this.isLoading) return;//表示在加载中
            if (!this.hasMore) return;//没有更多了
            this.fetchMore();
        },
        //加载下一页
        async fetchMore() {
            this.isLoading = true;
            this.page++;
            const resp = await this.fetchData();
            this.data.total = resp.total;
            console.log(this.data.total)

            this.data.rows = this.data.rows.concat(resp.rows);
            this.isLoading = false;
        }
    },
    mounted() {
        // 监听滚动条触底事件
        eventbus.$on("scrollToBottom", this.scrollToBottomHandle);
    },
    beforeCreate() {
        eventbus.$off("scrollToBottom", this.scrollToBottomHandle)
    }

}
</script>

<style lang="less" scoped></style>