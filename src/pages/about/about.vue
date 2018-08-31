<template>
  <div class="basement">
    <div class="about-img"></div>
    <div class="text-box">
      <div class="text-container animation-fade-up">
        <div class="text-title">
          "A breathtakingly fine account which not only equalled but eclipsed that superb Kitchen recording of decades ago."
        </div>
        <div class="text-title text-author">-The West Australian</div>
        <p class="text-content">
          {{aboutParagraph.paragraph1}}
        </p>
        <p class="text-content">
          {{aboutParagraph.paragraph2}}
        </p>
        <p class="text-content">
          {{aboutParagraph.paragraph3}}
        </p>
        <p class="text-content">
          {{aboutParagraph.paragraph4}}
        </p>
        <p class="text-content">
          {{aboutParagraph.paragraph5}}
        </p>
        <p class="text-content">
          {{aboutParagraph.paragraph6}}
        </p>
        <p class="text-date">Updated in August, 2018</p>
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
      aboutParagraph: ""
    };
  },
  created() {
    getAboutText().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.aboutParagraph = data.aboutParagraph;
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

scrollBarStyle(); // 引用全局样式方法，改变滑动条的样式

.basement {
  overflow: hidden;
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
    color: #C7C7C7;
    line-height: 26px;

    .text-container {
      width: 620px;
      height: calc(100vh - 150px);
      padding: 20px 30px;
      overflow: auto;
      font-family: 'textFont';

      .text-title {
        text-indent: 25px;
        font-style: italic;
        font-size: 15px;
        margin-bottom: 25px;
        text-decoration: underline;
      }

      .text-author {
        float: right;
      }

      .text-content {
        font-family: 'Times New Roman';
        text-indent: 25px;
        font-size: 17px;
        clear: both;
      }

      .text-date {
        font-family: 'Times New Roman';
        font-size: 17px;
        float: right;
      }
    }

    .animation-fade-up {
      animation: fadeInUp 1000ms;
      -webkit-animation: fadeInUp 1000ms;
      -moz-animation: fadeInUp 1000ms;
      -ms-animation: fadeInUp 1000ms;
    }
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
