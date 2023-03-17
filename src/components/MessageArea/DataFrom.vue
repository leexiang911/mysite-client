<template>
    <!-- 阻止默认事件 -->
    <form id="data-from-container" class="data-from-container  container" @submit.prevent="handleSubmit"
        ref="data-from-container">

        <div class="form-item row input-group">
            <div class="input-area col-4">
                <input class="form-control" v-model.trim="formData.nickname" type="text" placeholder="用户昵称"
                    maxlength="15" />
                <span class="tip">{{ formData.nickname.length }}/15</span>
            </div>
            <div class="error">{{ error.nickname }}</div>
        </div>

        <div class="form-item row input-group">
            <div class="text-area col">
                <textarea class="form-control text-inner" v-model.trim="formData.content" placeholder="输入内容" maxlength="300"
                    rows="5"></textarea>
                <span class="tip">{{ formData.content.length }}/300</span>
            </div>
            <div class="error">{{ error.content }}</div>
        </div>

        <div class="form-item input-group">
            <div class="button-area">
                <button class="btn sub-mit btn-primary" :disabled="isSubmiting">{{ isSubmiting ? "提交中..." : "提交"
                }}</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                nickname: '',
                content: '',
            },
            error: {
                nickname: '',
                content: '',
            },
            isSubmiting: false,
        }
    },
    methods: {
        handleSubmit() {
            this.error.nickname = this.formData.nickname ? "" : "请输入昵称";
            this.error.content = this.formData.content ? "" : "请输入内容";
            if (this.error.nickname || this.error.content) {
                // 有错误
                return;
            }
            this.isSubmiting = true;//正在提交，防止重复点击
            this.$emit("submitData", this.formData, () => {

                //把按钮变成提交状态，并且清空所有提示信息和输入的信息
                this.isSubmiting = false;
                this.error.nickname = '';
                this.error.content = '';
                this.formData.nickname = '';
                this.formData.content = '';
                this.$showToast({
                    content: "评论成功",
                    container: this.$refs['data-from-container'],
                    type: "success",
                });

            });//传递事件，让父组件来处理事件，这里是传给index.vue
        },

    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.data-from-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;

    .form-item {
        margin-bottom: 0.5rem;

        .error {
            height: 1rem;
            font-weight: bold;
            font-size: 1rem;
            padding-left: 2rem;
            margin-bottom: 0.25rem;
            color: @declarationTitleColor;
        }
    }

    .input-area,
    .text-area,
    .button-area {
        display: flex;
        flex-direction: column;
    }

    .text-area>textarea {
        border-style: dotted;
        resize: none;
        min-height: max-content;
        height: max-content;
        width: 100%;
        overflow: auto;
        word-break: break-all;
    }
}

.tip {
    color: grey;
    display: block;
    font-size: 0.5rem;
}

button[disabled] {
    color: #999;
    cursor: no-drop !important;
}

.sub-mit {
    background-color: @mainbgcolor;
}
</style>