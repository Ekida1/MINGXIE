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
    background-size: 1357px 633px;
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
        font-style: italic;
        font-size: 15px;
        margin-bottom: 25px;
      }

      .text-content {
        font-family: 'Times New Roman';
        font-size: 17px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1135px) {
  .text-box {
    width: 400px !important;

    .text-container {
      width: 390px !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .about-img {
    background-image: url('/static/img/phoneAbout.jpg') !important;
    background-size: 411px !important;
  }

  .text-box {
    position: relative !important;
    top: -250px !important;
    right: 10px !important;
    width: 383px !important;
    background-image: none !important;

    .text-container {
      width: 394px !important;
      height: auto !important;
    }
  }
}

@media screen and (min-height: 750px) {
  .text-box {
    top: -350px !important;
  }
}
</style>
