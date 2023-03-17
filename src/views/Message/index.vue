<template>
  <div ref="messageContainer" class="message-container text-start p-3">

    <MessageArea title="留言板" :subTitle="`${data.total}`" :isListLoading="isLoading" :list="data.rows"
      @submitData="handleSubmit" />

    <div class="no-data fs-5 text-center text-secondary" v-if="nodata"> No More Messages...</div>
  </div>
</template>

<script>
import MessageArea from '../../components/MessageArea';
import fetchData from '../../mixins/fetchData';
import * as msgApi from "../../api/message";
export default {
  components: {
    MessageArea
  },
  data() {
    return {
      page: 1,
      limit: 10,
      nodata: false,
    }
  },
  mixins: [fetchData({ total: 0, reows: [] })],
  methods: {
    async fetchData() {
      return msgApi.getMessage(this.page, this.limit);
    },
    async handleSubmit(formData, callBack) {
      const resp = await msgApi.postMessage(formData)
      callBack();
      this.data.rows.unshift(resp);
      this.data.total++;
    },
    async fetchMore() {
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;

      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;
    },
    myscroll(e) {
      if (!this.hasMore) {
        this.nodata = true;
        return;
      }
      const range = 50
      const scrollTop = e.target.scrollTop + e.target.offsetHeight + range;
      const scrollHandle = e.target.scrollHeight;
      // this.setSelect()
      if (scrollTop >= scrollHandle) {
        if (!this.isLoading) {
          this.fetchMore()
        }
      }

    },
  },
  mounted() {
    this.$refs.messageContainer.addEventListener("scroll", (e) => { this.myscroll(e) });
  },
  beforeDestroy() {
    this.$refs.messageContainer.removeEventListener("scroll", (e) => { this.myscroll(e); console.log(9090) });
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    },
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

* {
  /* 兼容火狐 */
  scrollbar-color: @mainbgcolor transparent;
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

.message-container {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>