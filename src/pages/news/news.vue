<template>
<div class="basement">
  <ul class="news-list">
    <li class="section-item bt" v-for="(item,index) in newsList" :key="item.id" :style="{'flex-direction': (index+1) % 2 === 0 ? 'row-reverse' : 'row' }">
      <div class="img-info">
        <div class="img-content"></div>
      </div>
      <div class="text-info">
        <div class="text-title">{{item.title}}</div>
        <div class="text-content">{{item.content}}</div>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
import { getNewsListData } from "common/request/request";
export default {
  name: "news",
  data() {
    return {
      newsList: []
    };
  },
  computed: {},
  activated() {
    getNewsListData().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.newsList = data.newsList;
      }
      err => {
        console.log("获取News信息失败，失败报错:", err);
      };
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

newsTitleFontFamily();
allTextFontFamily();

.basement {
  width: 100%;
  margin-top: 126px;
  background-color: #F8F8F8;
  position: relative;

  .news-list {
    width: 100%;

    .bt:not(:last-child) {
      border-bottom: 1px solid #000000;
    }

    .section-item {
      display: flex;
      width: 80%;
      min-height: 480px;
      padding: 25px 0;
      margin: auto 10%;
      overflow: hidden;

      .img-info {
        width: 45%;
        background-color: orange;

        .img-content {
          width: 100%;
          height: 70%;
          background-image: url('/static/img/news.jpg');
          background-size: contain;
          background-repeat: no-repeat;
          margin: 10% auto;
        }
      }

      .text-info {
        width: 55%;
        padding: 20px 20px;
        background-color: yellowgreen;

        .text-title {
          font-size: 50px;
          color: $Probrown;
          font-family: 'newsTitleFont';
        }

        .text-content {
          color: #171718;
          font-family: 'textFont';
          font-size: 20px;
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .section-item {
    flex-direction: column !important;
  }

  .img-info {
    width: 100% !important;
    height: 200px !important;

    .img-content {
      height: 100% !important;
      margin: 0 !important;
    }
  }

  .text-info {
    width: 100% !important;
  }
}
</style>
