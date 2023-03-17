<template>
  <div class="BlogCategory-container" v-loading="isLoading">

    <LeftList v-if="data" @select="handleSelect" :list="list" />

  </div>
</template>

<script>
import LeftList from './LeftList.vue';
import fetchData from "@/mixins/fetchData.js";
import { getBlogTypes } from '../../../api/blog'
export default {
  components: {
    LeftList,
  },
  mixins: [fetchData([])],
  computed: {
    categoryId() {
      return  this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      // 文章总数量
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount, 0);
      const result = [{ name: "All", id: -1, articleCount: totalArticleCount }, ...this.data];

      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: `${it.articleCount}`,
      }));
    }
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      if(item.isSelect)return;
      const query = {
        page: 1,
        limit: this.limit,
      };
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: item.id,
          },
        });
      }
    },
  }
}
</script>

<style lang="less" scoped>
* {

  @media (max-width: 576px) {
    .BlogCategory-container {

      font-size: 0.5rem;

    }
  }
}

.BlogCategory-container {
  width: 100%;
  height: 100%;
  height: max-content;
  position: relative;
}
</style>