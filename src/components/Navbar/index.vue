<template>
    <nav v-if="settingData"
        class="navbar-container nav nav-tabs border-0 justify-content-end position-relative d-flex p-0 p-sm-3">
        <h4 class="m-0 d-flex align-items-center d-none d-md-block">{{ settingData.siteTitle }}</h4>
        <router-link class="nav-link rounded-1 ms-2 border-0 d-none d-sm-block fs-4" v-for="item in nav_items"
            :to="{ name: item.name }" :key="item.link" :exact="item.exact" active-class="selected" exact-active-class="">
            {{ item.title }}
        </router-link>
        <!-- 小屏幕下的导航栏显示 -->
        <div class="navcontainer d-sm-none justify-content-between">
            <!-- 下拉选择页面 -->
            <div class="dropdown">
                <button @click="clickHandle" class="btn dropdown-toggle border-0 font" :to="{ name: 'Home' }" type="button"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {{ (($route.name === 'CategoryBlog' || $route.name === 'BlogDetail') ? 'Article' : '') || itemTitle &&
                        itemTitle.title
                    }}
                </button>
                <ul class="dropdown-menu">
                    <li v-for="item in nav_items"><router-link class="dropdown-item" :to="{ name: item.name }">{{ item.title
                    }}</router-link></li>
                </ul>
            </div>
            <!-- 更多的图标 和点开的弹出层 -->
            <button type="button" class="btn border-0"><i class="bi bi-three-dots fs-2 font" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"></i></button>
            <div class="offcanvas offcanvas-end offcanvas-sm" tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header text-white">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">{{ settingData.siteTitle }}</h5>
                    <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <hr style="width: 92%;margin: 0 auto;">
                <div class="offcanvas-body">

                    <div class="avatar border">

                        <img :src="settingData.avatar" alt="">
                    </div>
                    <!-- qq -->
                    
                    <a target="_blank"
                        :href="`http://wpa.qq.com/msgrd?v=3&uin=${settingData.qq}&site=qq&menu=yes`"><i
                            class="bi bi-tencent-qq d-block text-dark fs-3 bg-primary mb-1"></i></a>

                    <!-- 微信 -->
                    <div class="position-relative">
                        <i @click="weixinhoverHandle" class="bi bi-wechat fs-3 d-block text-dark bg-primary mb-1">
                        </i>

                        <div v-if="showcode" class="pop">
                            <img
                                :src="settingData.weixinQrCode">
                        </div>
                    </div>
                    <a :href="`mailto:${settingData.mail}`"><i
                            class="bi bi-envelope-at d-block text-dark fs-3 bg-primary mb-1"></i></a>

                    <a :href="settingData.github" target="_blank"><i
                            class="bi bi-github d-block text-dark fs-3 bg-primary mb-1"></i></a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            nav_items: [
                // 主页
                {
                    name: "Home", title: "Home", exact: true
                },
                // 文章
                {
                    name: "Blog",
                    title: "Article",
                    exact: false // 激活状态是否要精确匹配
                },
                // 关于我
                {
                    name: "About", title: "About Me", exact: true
                },
                // 项目和效果
                {
                    name: "Project", title: "Project", exact: true
                },
                // 留言板
                {
                    name: "Message", title: "Message", exact: true
                },
            ],
            isCategoryBlog: false,// 是不是文章分类的路由
            showcode: false,
        }

    },
    methods: {
        clickHandle() {
            // console.log(this.$route)

        },
        weixinhoverHandle() {
            this.showcode = !this.showcode;

        }
    },
    computed: {
        // 匹配到当前的路由name下的title，
        itemTitle() {
            if (!this.nav_items.length) {
                return "Home"
            }
            return this.nav_items.filter((item) => {
                return item.name == this.$route.name
            })[0]
        },
        ...mapState("setting", ["settingData"])
    },
    // watch: {

    //     $route(n, o) {

    //         console.log(n)
    //     }
    // }
}
</script>

<style lang="less" >
@import "~@/styles/var.less";

.navbar-container {
    user-select: none;
    color: @tabbarTextColor;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;

    h4 {
        position: absolute;
        left: 6vw;
        color: @titleColor;
        font-weight: 600;
    }

    a {
        color: @tabbarTextColor;
    }

    a.selected {
        background-color: @tabbarselectColor;
        color: #fff;
    }

    .navcontainer {
        width: 100%;
        height: 8.5vw;
        background-color: @mainbgcolor ;
        box-sizing: border-box;
        display: flex;
        align-items: center;

        .font {
            color: @tabbarTextColor;

            &:hover {
                color: #112;
            }
        }
    }

    .offcanvas {
        background-color: @mainbgcolor;
        color: #f5f5f5;

    }

    .avatar {
        width: 10vw;
        height: 10vw;
        margin-bottom: 1rem;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
        }

    }

    .pop {
        width: 25vw;
        height: 25vw;
        position: absolute;
        top: 20vw;

        img {
            width: 100%;
            height: 100%;
        }

    }

}</style>