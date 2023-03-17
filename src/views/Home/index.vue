<template>
  <div class="Home-container " ref="homecontainer" v-loading="loading">
    <!-- <button type="button" class="btn btn-primary" @click="clickHandle">88</button> -->

    <div class="row mt-0 mt-lg-3 align-self-center" v-show="!loading">

      <!-- 宣言框 -->
      <div class="col-lg-6 declaration-container ">
        <div class="declaration text-start fs-1 d-flex align-items-center justify-content-between">
          My Declaration
          <svg class="d-none d-lg-block" width="6rem" height="6rem" viewBox="0 0 80 80" version="1.1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
            xmlns:serif="http://www.serif.com/"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
            <g>
              <path d="M56.794,12.013l-0.804,-0.802l3.212,-3.211l0.8,0.802l-3.208,3.211Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M59.202,12.013l-3.212,-3.211l0.804,-0.802l3.208,3.211l-0.8,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M56.794,24.01l-0.804,-0.801l3.212,-3.212l0.8,0.802l-3.208,3.211Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M59.202,24.01l-3.212,-3.211l0.804,-0.802l3.208,3.212l-0.8,0.801Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M56.794,36.008l-0.804,-0.802l3.212,-3.211l0.8,0.801l-3.208,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M59.202,36.008l-3.212,-3.212l0.804,-0.801l3.208,3.211l-0.8,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M56.794,48.005l-0.804,-0.801l3.212,-3.212l0.8,0.801l-3.208,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M59.202,48.005l-3.212,-3.212l0.804,-0.801l3.208,3.212l-0.8,0.801Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M56.794,60.003l-0.804,-0.802l3.212,-3.212l0.8,0.802l-3.208,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M59.202,60.003l-3.212,-3.212l0.804,-0.802l3.208,3.212l-0.8,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M56.794,72l-0.804,-0.802l3.212,-3.212l0.8,0.802l-3.208,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M59.202,72l-3.212,-3.212l0.804,-0.802l3.208,3.212l-0.8,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M44.795,12.013l-0.804,-0.802l3.213,-3.211l0.804,0.802l-3.213,3.211Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M47.204,12.013l-3.213,-3.211l0.804,-0.802l3.213,3.211l-0.804,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M44.795,24.01l-0.804,-0.801l3.213,-3.212l0.804,0.802l-3.213,3.211Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M47.204,24.01l-3.213,-3.211l0.804,-0.802l3.213,3.212l-0.804,0.801Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M44.795,36.008l-0.804,-0.802l3.213,-3.211l0.804,0.801l-3.213,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M47.204,36.008l-3.213,-3.212l0.804,-0.801l3.213,3.211l-0.804,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M44.795,48.005l-0.804,-0.801l3.213,-3.212l0.804,0.801l-3.213,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M47.204,48.005l-3.213,-3.212l0.804,-0.801l3.213,3.212l-0.804,0.801Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M44.795,60.003l-0.804,-0.802l3.213,-3.212l0.804,0.802l-3.213,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M47.204,60.003l-3.213,-3.212l0.804,-0.802l3.213,3.212l-0.804,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M44.795,72l-0.804,-0.802l3.213,-3.212l0.804,0.802l-3.213,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M47.204,72l-3.213,-3.212l0.804,-0.802l3.213,3.212l-0.804,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M32.796,12.013l-0.799,-0.802l3.213,-3.211l0.799,0.802l-3.213,3.211Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M35.21,12.013l-3.213,-3.211l0.799,-0.802l3.213,3.211l-0.799,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M32.796,24.01l-0.799,-0.801l3.213,-3.212l0.799,0.802l-3.213,3.211Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M35.21,24.01l-3.213,-3.211l0.799,-0.802l3.213,3.212l-0.799,0.801Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M32.796,36.008l-0.799,-0.802l3.213,-3.211l0.799,0.801l-3.213,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M35.21,36.008l-3.213,-3.212l0.799,-0.801l3.213,3.211l-0.799,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M32.796,48.005l-0.799,-0.801l3.213,-3.212l0.799,0.801l-3.213,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M35.21,48.005l-3.213,-3.212l0.799,-0.801l3.213,3.212l-0.799,0.801Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M32.796,60.003l-0.799,-0.802l3.213,-3.212l0.799,0.802l-3.213,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M35.21,60.003l-3.213,-3.212l0.799,-0.802l3.213,3.212l-0.799,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M32.796,72l-0.799,-0.802l3.213,-3.212l0.799,0.802l-3.213,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M35.21,72l-3.213,-3.212l0.799,-0.802l3.213,3.212l-0.799,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M20.798,12.013l-0.8,-0.802l3.213,-3.211l0.799,0.802l-3.212,3.211Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M23.211,12.013l-3.213,-3.211l0.8,-0.802l3.212,3.211l-0.799,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M20.798,24.01l-0.8,-0.801l3.213,-3.212l0.799,0.802l-3.212,3.211Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M23.211,24.01l-3.213,-3.211l0.8,-0.802l3.212,3.212l-0.799,0.801Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M20.798,36.008l-0.8,-0.802l3.213,-3.211l0.799,0.801l-3.212,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M23.211,36.008l-3.213,-3.212l0.8,-0.801l3.212,3.211l-0.799,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M20.798,48.005l-0.8,-0.801l3.213,-3.212l0.799,0.801l-3.212,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M23.211,48.005l-3.213,-3.212l0.8,-0.801l3.212,3.212l-0.799,0.801Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M20.798,60.003l-0.8,-0.802l3.213,-3.212l0.799,0.802l-3.212,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M23.211,60.003l-3.213,-3.212l0.8,-0.802l3.212,3.212l-0.799,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M20.798,72l-0.8,-0.802l3.213,-3.212l0.799,0.802l-3.212,3.212Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
              <path d="M23.211,72l-3.213,-3.212l0.8,-0.802l3.212,3.212l-0.799,0.802Z"
                style="fill:#5b6fb5;fill-rule:nonzero;" />
            </g>
          </svg>
        </div>
        <h2 v-if="data" class="declaration_title fw-bolder">{{ title || (data[0] && data[0].title) }}</h2>
        <div v-if="data[0]" class="declaration_content fs-3 text-start">{{ text || (data[0] && data[0].description) }}
        </div>
      </div>
      <!-- 轮播图框 -->
      <div v-if="data" class="col-lg-5 col-sm-8 ms-auto me-auto carousel-container align-self-center">

        <div id="carouselDom" class="carousel slide carousel-fade h-100 w-md-50" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" style="overflow: hidden;" :class="{ active: index === 0 }"
              v-for="(item, index) in data" :key="item.id" data-bs-interval="10000">
              <img :src="item.bigImg" class="d-block w-100 h-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselDom" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselDom" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>


      </div>

    </div>

    <svg width="15%" height="8%" viewBox="0 0 241 25" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <path
        d="M240.625,24.879c-8.313,0 -12.549,-5.856 -15.952,-10.573c-3.555,-4.92 -5.977,-7.934 -10.789,-7.934c-4.814,0 -7.234,3.014 -10.789,7.934c-3.403,4.701 -7.639,10.573 -15.955,10.573c-8.315,0 -12.551,-5.872 -15.954,-10.573c-3.553,-4.92 -5.976,-7.934 -10.788,-7.934c-4.808,0 -7.231,3.014 -10.782,7.934c-3.405,4.701 -7.639,10.573 -15.956,10.573c-8.311,0 -12.546,-5.872 -15.947,-10.573c-3.553,-4.92 -5.972,-7.934 -10.783,-7.934c-4.809,0 -7.229,3.014 -10.782,7.934c-3.404,4.701 -7.638,10.573 -15.953,10.573c-8.312,0 -12.549,-5.872 -15.95,-10.573c-3.553,-4.92 -5.973,-7.934 -10.783,-7.934c-4.81,0 -7.23,3.014 -10.783,7.934c-3.401,4.701 -7.637,10.573 -15.95,10.573c-8.314,0 -12.548,-5.872 -15.949,-10.573c-3.552,-4.92 -5.974,-7.934 -10.78,-7.934l0,-6.372c8.312,0 12.546,5.857 15.948,10.573c3.553,4.92 5.972,7.934 10.781,7.934c4.808,0 7.229,-3.014 10.782,-7.934c3.402,-4.716 7.638,-10.573 15.951,-10.573c8.313,0 12.549,5.857 15.951,10.573c3.553,4.92 5.974,7.934 10.782,7.934c4.809,0 7.231,-3.014 10.785,-7.934c3.401,-4.716 7.637,-10.573 15.95,-10.573c8.315,0 12.549,5.857 15.951,10.573c3.551,4.92 5.974,7.934 10.779,7.934c4.812,0 7.235,-3.014 10.786,-7.934c3.405,-4.716 7.639,-10.573 15.952,-10.573c8.315,0 12.551,5.857 15.956,10.573c3.553,4.92 5.974,7.934 10.786,7.934c4.812,0 7.234,-3.014 10.789,-7.934c3.403,-4.716 7.638,-10.573 15.955,-10.573c8.316,0 12.552,5.857 15.955,10.573c3.555,4.92 5.976,7.934 10.786,7.934l-0,6.372Z"
        style="fill:#fcb028;fill-rule:nonzero;" />
    </svg>

    <div class="row m-0 p-0" v-if="settingData">
      <div class="userInfo text-start col-sm-12 col-lg-6 d-sm-block d-none ps-4 pe-4">
        <div class="d-flex w-50 justify-content-around">
          <a :title="`QQ:` + settingData.qq" role="button"
            :href="`tencent://message/?Menu=yes&uin=${settingData.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"><i
              class="bi bi-tencent-qq d-block"></i></a>


          <div class="position-relative">
            <i role="button" :title="`wechat${settingData.weixin}`" @mouseover="weixinhoverHandle"
              @mouseleave="weixiincodemouseleave" class="bi bi-wechat d-block">
            </i>

            <div v-show="showcode" class="pop">
              <img aria-label="微信二维码" :src="settingData.weixinQrCode">
            </div>
            <!--  -->
          </div>
          <a role="button" :title="settingData.mail" :href="`mailto:${settingData.mail}`"><i
              class="bi bi-envelope-at d-block"></i></a>

          <a role="button" :title="settingData.githubName" :href="settingData.github" target="_blank"><i
              class="bi bi-github d-block"></i></a>
        </div>
        <!-- <div v-if="settingData" class="decorate-img border">
          <img :src="settingData.avatar" alt="">
        </div> -->
      </div>
    </div>
    <!-- 用来装饰的div -->
    <div class="decorate d-none d-lg-block">

    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState("banner", ["loading", "data"]),
    ...mapState("setting", ["settingData"]),
    myavatar() {
      return this.$store.setting.settingData
    }
  },
  methods: {
    clickHandle() {
      this.$showToast({
        type: "info",
        content: "888"
      })

      this.$showToast({
        type: "error",
        content: "网络错误",
        container: this.$refs.homecontainer
      })
    },
    showText() {
      if (this.timer) return;
      console.log()
      let i = 0;
      this.text = ''
      this.timer = setInterval(() => {
        let temText = this.fullText.substring(0, i);
        this.text = temText;
        i++;
        if (this.text === this.fullText) {
          clearInterval(this.timer);
          this.timer = null;
          return;
        }
      }, 50)
    },
    weixinhoverHandle() {
      this.showcode = true;
    },
    weixiincodemouseleave() {
      let timer = setTimeout(() => {
        this.showcode = false;
        clearTimeout(timer);
      }, 2000);
    }
  },
  data() {
    return {
      // 图片的数据保存在混入的data中（this。data）
      text: ``,
      fullText: ``,
      timer: null,
      title: '',
      index: 0,
      showcode: false,
      avatar: ''
    }
  },
  watch: {

    index(nwValue, olaValue) {

      this.fullText = this.data[nwValue].description;
      this.showText();
      this.title = this.data[nwValue].title;
    }

  },
  mounted() {
    const carouselDom = document.querySelector("#carouselDom");
    carouselDom.addEventListener("slid.bs.carousel", event => {
      this.index = event.to;
    })
  },
  created() {
    this.$store.dispatch("banner/fetchBanner")
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

* {
  -webkit-user-drag: none;
}

.Home-container {
  background-color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;

  // 宣言框
  .declaration-container {
    height: 45%;
    padding-left: 4vw;
    user-select: none;

    // 首页宣言
    .declaration {
      color: @mainColor;

    }

    .declaration_title {
      font-size: 3rem;
      color: @declarationTitleColor;
    }

    .declaration_content {
      color: @declarationContent;
    }
  }

  // 轮播图框
  .carousel-container {
    height: 40%;
    z-index: 1;
    padding: 0;
    border-radius: 1vw;
    overflow: hidden !important;
    user-select: none;
  }

  .userInfo {
    // 联系方式
    position: absolute;
    height: 50px;
    bottom: 2rem;
    flex-direction: row !important;

    i {
      color: @mainColor;
      font-size: 2rem;
      width: 2rem;
      height: 2rem;
      line-height: 2rem;
      cursor: pointer;
    }
  }

  /* 装饰用的div，没有用 */
  .decorate {
    position: absolute;
    width: 22vw;
    height: 28vw;
    background-color: #EFA41F;
    right: 0;
    bottom: 0;
    z-index: 0;


  }

  .pop {
    position: absolute;
    left: 8px;
    top: -50px;
    width: 100px;
    height: 100px;
    z-index: 100;
    margin: -50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .decorate-img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: absolute;
    overflow: hidden;
    right: 2rem;
    bottom: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>