<template>
  <div class="basement">
    <ul class="news-list">
      <li class="section-item bt" v-for="(item,index) in newsList" :key="item.id" :style="{'flex-direction': (index+1) % 2 === 0 ? 'row' : 'row-reverse'}">
        <div class="img-info">
          <div class="img-container" :style="{'left': (index+1) % 2 === 0 ? '100px' : '40px'}">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
        <div class="text-info" :style="{'text-align': (index+1) % 2 === 0 ? 'left' : 'right'}">
          <p class="text-title">{{item.title}}</p>
          <p class="text-time">{{item.time}}</p>
          <p class="text-content">{{item.content}}</p>
          <div class="readmore" :style="{'float': (index+1) % 2 === 0 ? 'left' : 'right'}"><a :href="item.link">Read More</a></div>
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

newsTitleFamily();

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
      flex-direction: row-reverse;
      width: 90%;
      height: 460px;
      padding: 25px 0;
      margin: auto 5%;
      overflow: hidden;

      .img-info {
        width: 53%;
        overflow: hidden;

        .img-container {
          width: 94%;
          overflow: hidden;
          position: relative;
          bottom: 28px;

          img {
            width: 95%;
            clip-path: polygon(15% 10%, 90% 10%, 75% 90%, 0% 90%);
            -webkit-clip-path: polygon(15% 10%, 90% 10%, 75% 90%, 0% 90%);
            -moz-clip-path: polygon(15% 10%, 90% 10%, 75% 90%, 0% 90%);
            -ms-clip-path: polygon(15% 10%, 90% 10%, 75% 90%, 0% 90%);
          }
        }
      }

      .text-info {
        width: 45%;
        padding: 20px 20px;

        .text-title {
          font-size: 30px;
          color: $Probrown;
          font-family: newsTitleFont;
        }

        .text-time {
          font-size: 16px;
          color: $ProDark;
        }

        .text-content {
          color: $ProDark;
          font-family: 'Times New Roman';
          font-size: 16px;
          line-height: 32px;
          height: 128px; // 此时设置的4行后省略，由于火狐浏览器无法多行省略，所以设置定高，一来不影响其他浏览器，反正128px后会被省略，二来火狐浏览器溢出直接hidden
          multEllipsis();
        }

        .readmore {
          background-color: $Probrown;
          width: 120px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          border-radius: 1px;
          font-weight: bold;
          cursor: pointer;

          a {
            color: $ProDark !important;
          }
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

@media screen and (max-width: 415px) {
  .section-item {
    height: 740px !important;

    .img-info {
      position: relative !important;
      right: 85px !important;
    }

    .img-container {
      height: 100% !important;
    }

    img {
      width: 100% !important;
      height: 100% !important;
    }
  }
}
</style>
