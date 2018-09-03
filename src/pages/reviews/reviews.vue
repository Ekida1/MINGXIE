<template>
  <div class="basement">
    <ul class="reviews-list animation-fade-up">
      <li class="section-item bt" v-for="item in reviewsList" :key="item.id">
        <div class="img-info">
          <div class="img-container" @click="toDetail(item.id)">
            <img :src="item.imgUrl" alt="Read More">
          </div>
        </div>
        <div class="text-info">
          <p class="text-title">{{item.title}}</p>
          <p class="text-content">{{item.content}}</p>
          <div class="readmore" @click="toDetail(item.id)">Read More</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getReviewsListData } from "common/request/request";
export default {
  name: "reviews",
  data() {
    return {
      reviewsList: []
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: "/detail",
        name: "detail",
        params: {
          id: id
        }
      });
    }
  },
  activated() {
    getReviewsListData().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.reviewsList = data.reviewsList;
      }
      err => {
        console.log("获取Reviews信息失败，失败报错:", err);
      };
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  width: 100%;
  margin-top: 126px;
  background-color: #F8F8F8;
  position: relative;

  .reviews-list {
    width: 100%;

    .bt:not(:last-child) {
      border-bottom: 1px solid #000000;
    }

    .section-item {
      display: flex;
      flex-direction: row-reverse;
      width: 90%;
      height: 450px;
      padding: 25px 0;
      margin: auto 5%;
      overflow: hidden;

      .img-info {
        width: 55%;
        // background-color: orange;
        overflow: hidden;

        .img-container {
          width: 100%;
          height: 80%;
          overflow: hidden;
          cursor: pointer;

          // background: #E5C3B2;
          img {
            width: 84%;
            float: right;
          }
        }
      }

      .text-info {
        width: 45%;
        padding: 20px 20px;

        .text-title {
          font-size: 40px;
          color: $Probrown;
        }

        .text-content {
          color: $ProDark;
          font-family: 'Times New Roman';
          font-size: 18px;
          line-height: 32px;
          height: 128px; // 此时设置的4行后省略，由于火狐浏览器无法多行省略，所以设置定高，一来不影响其他浏览器，反正128px后会被省略，二来火狐浏览器溢出直接hidden
          multEllipsis();
        }

        .readmore {
          background-color: $Probrown;
          color: $ProDark;
          width: 120px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          border-radius: 1px;
          font-weight: bold;
          margin-top: 30px;
          cursor: pointer;
        }
      }
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
    height: 675px !important;

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
