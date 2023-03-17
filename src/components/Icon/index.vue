<template>
    <i class="icon" :class="fontClass"></i>
</template>

<script>
const classMap = {
    info: "bi bi-info-circle",// info 圆心，普通
    error: "bi bi-x-circle",// 叉叉圆心，表示错误
    wran: "bi bi-exclamation-triangle",// 三角感叹号，空心
    success: "bi bi-check-square",//选中打勾的符号，空心
}
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
    }, computed: {
        // 图标类样式
        fontClass() {
            return classMap[this.type];
        },
    },
}
</script>

<style lang="less" scoped>
.icon {
    color: inherit;
    font-size: inherit;
}
</style>