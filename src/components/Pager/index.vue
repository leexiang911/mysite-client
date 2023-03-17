<template>
    <div class="page-container">
        <!-- 首页 -->
        <a :class="{ disabled: current === 1 }" @click="handleClick(1)">
            <i class="bi bi-align-start"></i> <!-- 这是图标 -->
        </a>
        <!-- 上一页 -->
        <a :class="{ disabled: current === 1 }" @click="handleClick(current - 1)">
            <i class="bi bi-arrow-left-circle-fill"></i> <!-- 这是图标 -->
        </a>

        <a v-for="(n, i) in numberItems" :key="i" :class="{ active: current === n }" @click="handleClick(n)">{{ n }}</a>


        <!-- 下一页 -->
        <a :class="{ disabled: current === pageNumber }" @click="handleClick(current + 1)">
            <i class="bi bi-arrow-right-circle-fill"></i> <!-- 这是图标 -->
        </a>
        <!-- 尾页 -->
        <a :class="{ disabled: current === pageNumber }" @click="handleClick(pageNumber)">
            <i class="bi bi-align-end"></i> <!-- 这是图标 -->
        </a>
    </div>
</template>
  
<script>
export default {
    props: {
        current: { type: Number, default: 1 },//当前页，默认是1
        total: { type: Number, default: 100 },//总数据条数
        limit: { type: Number, default: 10, required: true },//一页显示多少条数据
        visibleNumber: { type: Number, default: 10 },//一页可见多少个数字项
    },
    computed: {
        pageNumber() {
            return Math.ceil(this.total / this.limit);
        },
        visibleMin() {
            let min = this.current - Math.floor(this.visibleNumber / 2);
            if (min < 1) min = 1;
            return min;
        },
        visibleMax() {
            let max = this.visibleMin + this.visibleNumber - 1;
            if (max > this.pageNumber) max = this.pageNumber;
            return max;
        },
        numberItems() {
            let numbers = [];
            for (let i = this.visibleMin; i <= this.visibleMax; i++) {
                numbers.push(i);
            }
            return numbers;
        }
    },
    methods: {
        handleClick(newPage) {
            // console.log(newPage, 'newpage')
            if (newPage < 1) newPage = 1;
            if (newPage > this.pageNumber) newPage = this.pageNumber;
            if (newPage === this.current) return;
            this.$emit("pageChange", newPage);
        }
    },
}
</script>
  
<style lang="less" scoped>
@import "~@/styles/var.less";

.page-container {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 1rem 0;
    transition: all 1s;

    a {
        transition: all 0.75s;
        vertical-align: center;
        font-family: 'Ubuntu Mono';
        user-select: none;
        display: inline-block;
        min-width: 2rem;
        font-size: 1.2rem;
        text-align: center;
        border-radius: 50%;
        line-height: 2rem;
        color: @mainbgcolor;
        cursor: pointer;
        margin: 0.125rem;
        border: 1px solid rgba(1, 1, 1, 0.1);
        text-shadow: 0px 0px 1px;
        text-decoration: none;

        &:hover {
            background-color: rgba(7, 28, 71, 0.06);
        }



        &.active {
            color: white;
            background-color: @mainbgcolor;
        }

        &.disabled {
            color: #999;
            background-color: rgba(7, 28, 71, 0.1);
            cursor: no-drop;
        }

        @media (max-width: 576px) {
            min-width: 1rem;
            font-size: 0.5rem;
            line-height: 1rem;
            padding: 0;
            margin: 0.1rem;

            i {
                width: 100%;
                height: 100%;
            }
        }
    }


}
</style>