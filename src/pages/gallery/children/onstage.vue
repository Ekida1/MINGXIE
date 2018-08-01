<template>
  <div>
    <div class="photo-wrap">
      <div class="img-banner">
        <div class="overlay"></div>
        <img :src="photosList[0].imgUrl" alt="">
      </div>
      <div class="photo-list">
      <div v-for="(photo,index) in photosList" :key="photo.id" v-if="index>0" class="img-container" :class="{'is-left': (index+1) % 2 === 0, 'is-right': (index+1) %2 !== 0 }">
        <div class="overlay">
        </div>
        <img :src="photo.imgUrl" alt="">
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getonStagePhotosListData } from "common/request/request";
export default {
  name: "onstage",
  data() {
    return {
      photosList: []
    };
  },
  created() {
    getonStagePhotosListData().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.photosList = data.photosList;
      }
      err => {
        reject(err);
      };
    });
  }
};
</script>

<style lang="stylus" scoped>
.photo-wrap {
  margin: auto 60px;
  overflow: hidden;

  .img-banner {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  .photo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;

    .img-container {
      margin: 20px 70px;
      cursor: pointer;

      img {
        width: 483px; // 和图片的宽度一致
        height: 294px; // 和图片的高度一致
      }
    }

    .img-container:hover > .overlay {
      opacity: 1;
      background: hsla(50, 0%, 0%, 0.6);
      transition: 0.3s opacity ease-out;
    }

    .img-container .overlay {
      position: absolute;
      z-index: 99;
      display: block;
      width: 483px; // 和图片的宽度一致
      height: 294px; // 和图片的高度一致
      opacity: 0;
      overflow: hidden;
      transition: 0.3s opacity ease-in;
    }
  }
}

@media screen and (max-width: 1456px) {
  .photo-wrap {
    justify-content: center !important;
  }
}
</style>
