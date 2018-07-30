<template>
  <div class="basement">
    <div class="gallery-header">
      <div class="gallery-content">
        <div class="option-item on-stage" :class="{'active-item': 'onStage' === galleryCategory }" @click="checkedCategory('onStage')">On Stage</div>
        <div class="option-item off-stage" :class="{'active-item': 'offStage' === galleryCategory }" @click="checkedCategory('offStage')">Off Stage</div>
        <div class="option-item Vision" :class="{'active-item': 'Vision' === galleryCategory }" @click="checkedCategory('Vision')">Vision</div>
      </div>
    </div>
    <ul class="photo-list">
      <li v-for="photo in photosList" :key="photo.id" class="img-container">
        <div class="overlay">
           </div>
        <img :src="photo.imgUrl" alt="">
      </li>
    </ul>
    <div class="back-to-top" title="back to top" v-show="toTopShow" @click="handleScrollToTop"></div>
  </div>
</template>

<script>
import { getPhotosListData } from "common/request/request";
export default {
  name: "gallery",
  data() {
    return {
      photosList: [],
      toTopShow: false,
      galleryCategory: "onStage"
    };
  },
  methods: {
    checkedCategory(type) {
      this.galleryCategory = type;
    },
    showScrollToTop() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 100) {
        this.toTopShow = true;
      } else if (top >= 0 && top <= 100) {
        this.toTopShow = false;
      }
    },
    handleScrollToTop() {
      // if (document.documentElement.scrollTop)
      //   document.documentElement.scrollTop = 0;
      // else if (window.pageYOffset) window.pageYOffset = 0;
      // else if (document.body.scrollTop) document.body.scrollTop = 0;
      const currentScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (currentScroll > 0) {
        window.scrollTo(0, currentScroll - currentScroll / 20);
        window.requestAnimationFrame(this.handleScrollToTop);
      }
    }
  },
  created() {
    getPhotosListData().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.photosList = data.photosList;
      }
      err => {
        reject(err);
      };
    });
  },
  mounted() {
    window.addEventListener("scroll", this.showScrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.showScrollToTop);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  margin-top: 126px;

  .gallery-header {
    width: 100%;
    height: 100px;
    text-align: center;

    .gallery-content {
      display: flex;
      // justify-content: space-around;
      position: relative;
      left: 0;
      right: 0;
      top: 50px;
      margin: 0 auto;
      border: 1.5px solid $ProDark;
      width: 250px;
      height: 35px;

      .option-item {
        line-height: 32px;
        flex-grow: 1;
        cursor: pointer;
      }

      .option-item:hover {
        color: $Probrown;
      }

      .active-item {
        color: $Probrown;
        font-weight: bold;
      }
    }

    .gallery-content:before {
      content: '';
      width: 1.5px;
      height: 68%;
      background-color: $ProDark;
      position: relative;
      left: 88px;
      top: 6px;
    }

    .gallery-content:after {
      content: '';
      width: 1.5px;
      height: 68%;
      background-color: #171718;
      position: relative;
      right: 65px;
      top: 6px;
    }
  }

  .photo-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto 60px;
    overflow: hidden;

    .img-container {
      margin: 20px 20px;
      cursor: pointer;

      img {
        width: 400px;
        height: 267px;
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
      width: 400px;
      height: 267px;
      opacity: 0;
      overflow: hidden;
      transition: 0.3s opacity ease-in;
    }
  }

  .back-to-top {
    position: fixed;
    bottom: 5%;
    right: 1%;
    opacity: 0.7;
    background-image: url('/static/img/backToTop.png');
    width: 53px;
    height: 50px;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
  }
}

@media screen and (max-width: 1456px) {
  .photo-list {
    justify-content: center !important;
  }
}
</style>
