<template>
  <div class="about-container">
    <iframe v-loading="loading
    "  :frameborder="0" scrolling="auto" width="100%" height="100%" class="about-content" :src="src"
      frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState("about", {
      src: 'data',
      loading: "loading"
    })
  },
  created() {
    this.$store.dispatch("about/fetchAbout");

  },
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;

  .about-content {
    display: block;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>