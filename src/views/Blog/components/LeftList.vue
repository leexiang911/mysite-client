<template>
  <ul class="LeftList-container list-group p-0 ms-2">
    <li class="list-group-item list-group-item-action border-0 ms-1 mb-1 p-0" :class="{ select: item.isSelect }"
      v-for="(item, i) in list">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">{{ item.name }}</span>
      <span :class="{ active: item.isSelect }" @click="handleClick(item)" v-if="item.aside" class="aside">{{
        item.aside }}</span>
      <LeftList v-if="item.children" :list="item.children" @select="handleClick" />
    </li>


  </ul>
</template>

<script>
export default {
  name: "LeftList",
  data() {
    return {
    }
  },
  props: {
    list: { type: Array, default: () => [] }
  },
  methods: {
    handleClick(item) {
      if (!item.active) {
        this.$emit("select", item)
      }
    },
  },
  computed: {


  },
  watch: {

  },
  mounted() {
  }

}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

* {
  list-style: none;
  padding: 0;
  border-radius: 0;
}

li {
  color: @tabbarTextColor;
  font-size: 0.8rem;

  &.select {
    background-color: @mainColor;
    color: #f5f5f5;
  }
}



span {
  cursor: pointer;
  border-bottom: 1px solid;
  border-bottom-color: transparent;


}

.aside {
  font-size: 0.5rem;
  color: @declarationTitleColor;
  padding-left: 0.1rem;
}
</style>