<template>
  <ul class="data-list-container list-group">
    <li v-for="item in list" class="list-group-item border-0 border-bottom list-item">
      <!-- :key="item.id"  -->
      <img v-if="item.avatar" :src="item.avatar" alt="头像" title="头像" style="width: 2rem;height:2rem;border-radius: 50%;">
      <div class="data">
        <div class="nickname text-dark">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </ul>
</template>

<script lang="js">
// import Avatar from '../SiteAside/Avatar/Avatar.vue';
import formatDate from '../../utils/formatDate';
export default {
  components: { /* Avatar */ },
  props: {
    list: { type: Array, default: () => [] }
  },
  methods: {
    formatDate,
  }

}
</script>

<style lang="less" scoped>
.data-list-container {
  background-color: #ced4da;
}

.list-item {
  display: flex;
}

.nickname {
  margin-bottom: 0.5rem;
  padding-top: 0.5rem;
  margin-left: 0.4rem;
  font-weight: bold;
}

.content {
  font-size: 16px;
}

.data {
  .time {
    font-size: 0.5rem;
    color: #999;
  }
}
</style>