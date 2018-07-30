<template>
<div class="basement">
  <div class="about-img"></div>
  <div class="text-box">
    <div class="text-container">
    <div class="text-title">
      "A breathtakingly fine account which not only equalled but eclipsed that superb Kitchen recording of decades ago"
    </div>
    <div class="text-content">
    {{aboutText}}
    </div>
    </div>
  </div>
</div>
</template>
<script>
import { getAboutText } from "common/request/request";
export default {
  name: "about",
  data() {
    return {
      aboutText: ""
    };
  },
  created() {
    getAboutText().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.aboutText = data.aboutText;
      }
      err => {
        reject(err);
      };
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

allTextFontFamily();
scrollBarStyle(); // 引用全局样式方法，改变滑动条的样式

.basement {
  margin-top: 126px;
  background-color: #020202;

  .about-img {
    width: 100%;
    height: calc(100vh - 126px);
    background-image: url('/static/img/about.png');
    background-repeat: no-repeat;
    background-size: contain;
  }

  .text-box {
    position: absolute;
    top: 150px;
    right: 47px;
    width: 640px;
    background-image: linear-gradient(to left, rgba(255 250 250, 0), rgba(255 250 250, 0.22));
    color: #ffffff;
    line-height: 26px;

    .text-container {
      width: 620px;
      height: calc(100vh - 150px);
      padding: 20px 30px;
      overflow: auto;
      font-family: 'textFont';

      .text-title {
        text-decoration: underline;
        font-size: 15px;
        margin-bottom: 25px;
      }

      .text-content {
        font-size: 17px;
      }
    }

    .text-container:after {
      content: '';
      width: 2px;
      height: 100%;
      background-color: #ffffff;
      position: absolute;
      left: 100%;
      top: 0%;
    }
  }
}
</style>
