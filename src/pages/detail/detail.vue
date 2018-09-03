<template>
  <div class="detail-basement">
    <div class="detail-content animation-fade-up">
      <div class="detail-content-img" :style="{backgroundImage:'url(/static/img/reviews_pic' + this.$route.params.id + '.jpg)'}"></div>
      <div v-html="detailContent"></div>
    </div>
  </div>
</template>
<script>
import { getDetailData } from "common/request/request";
export default {
  name: "detail",
  data() {
    return {
      detailContent: ""
    };
  },
  activated() {
    getDetailData(this.$route.params.id).then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.detailContent = data.detailContent;
      }
      err => {
        console.log("获取Detail信息失败，失败报错:", err);
      };
    });
  }
};
</script>

<style lang="stylus">
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.detail-basement {
  width: 100%;
  margin-top: 126px;
  background-color: #F8F8F8;
  position: relative;

  .detail-content {
    padding: 0 200px;

    .detail-content-img {
      width: 100%;
      height: 450px;
      background-image: url('/static/img/reviews_pic1.jpg');
      background-repeat: no-repeat;
      background-position: 50%;
    }

    .detail-first-text {
      margin-top: 30px;
    }

    .detail-content-text {
      text-indent: 25px;
      font-family: 'Times New Roman';
      font-size: 20px;
    }

    .detail-content-link {
      color: $Probrown;
    }
  }

  .animation-fade-up {
    animation: fadeInUp 1000ms;
    -webkit-animation: fadeInUp 1000ms;
    -moz-animation: fadeInUp 1000ms;
    -ms-animation: fadeInUp 1000ms;
  }
}

/* 淡入-从下up */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 415px) {
  .detail-content {
    padding: 0 20px !important;
  }
}
</style>
