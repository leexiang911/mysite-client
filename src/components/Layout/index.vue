<template>
    <!-- layout布局组件的外边框容器 -->
    <div class="layout-container">
        <!-- 主要内容区域 -->
        <div class="container-lg main-content d-flex p-0">
            <!-- 头部 -->
            <header>
                <slot name="header"></slot>
            </header>
            <!-- 主区域 -->
            <main>
                <slot name="main"></slot>
            </main>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-container {
    width: 100%;
    height: 100%;
    background-color: #5B6FB5;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;

    .main-content {
        height: 80vh;
        background-color: #fff;
        border-radius: 2.85vh;
        overflow: hidden;
        flex-flow: column;
        position: relative;
    }
}

@media (max-width: 992px) {
    .main-content {
        background-color: #fff !important;
        height: 100% !important;
        border-radius: 0 !important;
    }
}

main {
    flex: 1;    
    overflow: hidden;
}
</style>