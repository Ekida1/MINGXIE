<template>
  <div>
    <div class="photo-wrap">
      <div class="img-banner">
        <div class="banner-img-wrapper" @click="openGallery(0)">
          <div class="overlay"></div>
          <img class="img-big" :src="photosList[0].thumb" alt="">
        </div>
      </div>
      <div class="photo-list">
        <div v-for="(photo,index) in photosList" :key="photo.id" v-if="index>0" class="img-container" @click="openGallery(index)" :class="{'is-left': (index+1) % 2 === 0, 'is-right': (index+1) %2 !== 0 }">
          <div class="overlay-item">
          </div>
          <img class="img-item" :src="photo.thumb" alt="">
        </div>
      </div>
      <a :href="zip">
        <div class="downLoad-btn"></div>
      </a>
    </div>
    <LightBox ref="lightbox" :images="photosList" :startAt="slideToIndex" :show-light-box="false"></LightBox>
  </div>
</template>

<script>
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");
import LightBox from "vue-image-lightbox";
import { getonStagePhotosListData } from "common/request/request";
export default {
  name: "onstage",
  data() {
    return {
      photosList: [{}],
      zip: "",
      gallaryShow: false,
      slideToIndex: 0
    };
  },
  components: {
    LightBox
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    }
  },
  created() {
    getonStagePhotosListData().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.photosList = data.photosList;
        this.zip = data.zip;
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
  margin: auto 0px;
  overflow: hidden;

  .pop-layer {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1900;
    opacity: 0.6;
    background: #303030;

    .close-pop {
      z-index: 1900;
      background-image: url('/static/img/close.png');
      background-size: contain;
      background-repeat: no-repeat;
      position: fixed;
      top: 20px;
      right: 240px;
      width: 53px;
      height: 50px;
      cursor: pointer;
    }
  }

  .img-banner {
    display: flex;
    justify-content: center;

    .banner-img-wrapper {
      cursor: pointer;
    }

    .banner-img-wrapper:hover > .overlay {
      opacity: 1;
      background: hsla(50, 0%, 0%, 0.6);
      transition: 0.3s opacity ease-out;
    }

    .overlay {
      position: absolute;
      z-index: 10;
      display: block;
      width: 879px;
      height: 478px;
      opacity: 0;
      overflow: hidden;
      transition: 0.3s opacity ease-in;
    }

    .img-big {
      width: 879px;
      height: 478px;
    }
  }

  .photo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;

    .img-container {
      margin: 20px 70px;
      cursor: pointer;

      .overlay-item {
        position: absolute;
        z-index: 99;
        display: block;
        width: 483px; // 和图片的宽度一致
        height: 294px; // 和图片的高度一致
        opacity: 0;
        overflow: hidden;
        transition: 0.3s opacity ease-in;
      }

      .img-item {
        width: 483px; // 和图片的宽度一致
        height: 294px; // 和图片的高度一致
      }
    }

    .img-container:hover > .overlay-item {
      opacity: 1;
      background: hsla(50, 0%, 0%, 0.6);
      transition: 0.3s opacity ease-out;
    }
  }

  .downLoad-btn {
    position: relative;
    left: 91%;
    bottom: 35px;
    opacity: 0.7;
    background-image: url('/static/img/download.png');
    width: 53px;
    height: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 199;
  }

  .downLoad-btn:before {
    content: 'DownLoad All';
    position: absolute;
    left: -25px;
    bottom: 50px;
    width: 110px;
    margin-bottom: 10px;
    color: #000000;
    font-weight: bold;
  }
}

@media screen and (max-width: 1456px) {
  .photo-wrap {
    justify-content: center !important;
  }
}

@media screen and (max-width: 415px) {
  .overlay {
    width: 325px !important;
    height: 177px !important;
  }

  .img-big {
    width: 325px !important;
    height: 177px !important;
  }

  .overlay-item {
    width: 325px !important;
    height: 177px !important;
  }

  .img-item {
    width: 325px !important;
    height: 177px !important;
  }

  .downLoad-btn {
    left: 71% !important;
    bottom: 13px !important;
  }
}
</style>
