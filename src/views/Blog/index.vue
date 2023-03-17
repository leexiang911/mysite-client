<template>
  <div class="Blog-container row">



    <div class="content col-2 p-1 m-0">
      <h3 class="fs-6">Article Type</h3>
      <BlogCategory />

    </div>

    <article ref="article" class="main h-100 text-start  col-10 p-1 m-0">
      <BlogList @scrollTop="scrollHandle" />
    </article>


  </div>
</template>

<script>
import BlogCategory from './components/BlogCategory.vue';
import BlogList from './components/BlogList.vue';
import LeftList from './components/LeftList.vue';
export default {
  components: {
    LeftList,
    BlogList,
    BlogCategory,
  },
  methods: {
    scrollHandle() {
      this.$refs.article.scrollTop = 0;
    }
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

* {
  scrollbar-color: @mainColor transparent;
  scroll-behavior: smooth;

  // 滚动条样式
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  //滚动条的图标
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: @scrollbar;
    border: 4px solid transparent;
  }
}

.Blog-container {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: row;

  .content {
    overflow: hidden;
    overflow-y: scroll;
    max-height: 100%;
    text-align: start;
    user-select: none;
    h3{
      color:@mainColor;
      text-align: center;
      box-sizing: border-box;
    }
  }

  article {
    background-color: #f5f5f5;
    overflow: hidden;
    overflow-y: scroll;
    max-height: 100%;
  }
}


// 在小屏幕下表示是移动端，就不需要滚动条了
@media (max-width: 576px) {

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: transparent;
    border: none;
  }
}
</style>