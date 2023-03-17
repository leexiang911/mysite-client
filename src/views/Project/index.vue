<template>
  <div class="project-container" v-loading="loading">
    <div v-for="item in data" :key="item.id" class="project-item text-start">
     
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb"  :src="item.thumb" />
      </a>
      <div class="info">
        <h2>
          <a
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
          >
            {{ item.name }}
          </a>
        </h2>
        <a
          class="github"
          target="_blank"
          :href="item.github"
          v-if="item.github"
        >
          github
        </a>
        <p v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState("project", ["loading", "data"]),
  created() {
    this.$store.dispatch("project/fetchProject");
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

* {
  scrollbar-color: transparent transparent;
  scroll-behavior: smooth;

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
}

// 滚动条样式
::-webkit-scrollbar {
  background-color: transparent;
  width: 8px;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: @mainbgcolor;
  border: 4px solid transparent;
}


.project-container {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 0.8rem;
  scroll-behavior: smooth;

}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @mainColor;
  }
}
</style>