<template>
    <div class="Message-area-container" id="Message-area-container">
        <DataFrom v-on="$listeners" />
        <h3 class="position-relative">
            <span class="title">{{ title }}</span>
            <span class="subtitle badge bg-primary text-">{{ subTitle }}</span>
        </h3>
        <DataList :list="list" />
        <div class="loading" v-if="isListLoading" :style="{ backgroundImage: `url(${loadingUrl})` }"></div>
        <span v-if="isListLoading" class="text-muted">载入评论中...</span>
    </div>
</template>

<script>
import loadingUrl from '@/assets/loading.svg';
import DataFrom from './DataFrom.vue';
import DataList from './DataList.vue';
export default {
    props: {
        title: { type: String, default: "" },//标题，是留言板还是评论
        subTitle: { type: String, default: "" },//副标题
        list: { type: Array, default: () => [] },//留言列表&评论列表
        isListLoading: { type: Boolean, default: true },//是否正在加载
    },
    components: {
        DataFrom,
        DataList
    },
    methods: {
    },
    data() {
        return {
            loadingUrl,
        }
    }
}
</script>

<style lang="less" scoped>
.Message-area-container {
    h3 {
        font-size: 1.5rem;
        display: block;
        padding-right: 1rem;
        width: max-content;
        font-weight: bold;
        height: 1.5rem;

        .title {
            margin-right: 0.25rem;
            background-color: #ddd;
            padding: 0.25rem;
            border-radius: 0.25rem;
        }
    }

    .loading {
        height: 2.5rem;
        width: 100%;
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
    }
}
</style>