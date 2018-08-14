<template>
  <div class="basement">
     <div class="wrapper">
      <swiper class="swiper-containers" ref="exhibitionSwiper" :options="swiperOption">
        <swiper-slide  v-for="img in photosList" :key="img.id">
          <img class="exhibition-img" :src="img.bigImg" alt="">
        </swiper-slide>
      </swiper>
          <div class="close-pop" @click="closeExhibition"></div>
          <div class="swiper-button-prev"></div><!--左箭头-->
          <div class="swiper-button-next"></div><!--右箭头-->
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "exhibition",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    photosList: Array,
    slideToIndex: Number
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.exhibitionSwiper.swiper;
    }
  },
  methods: {
    closeExhibition() {
      this.$emit("closeModal");
    }
  },
  mounted() {
    this.swiper.slideTo(this.slideToIndex, 0, false);
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-button-prev {
  background-image: url('/static/img/prev.png');
  background-size: cover;
  left: -100px;
  width: 65px;
  height: 124px;
}

.wrapper >>> .swiper-button-next {
  background-image: url('/static/img/next.png');
  background-size: cover;
  right: -100px;
  width: 65px;
  height: 124px;
}

.basement {
  height: 100%;

  .wrapper {
    z-index: 2000;
    width: 952px;
    height: 643px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;

    .close-pop {
      z-index: 1900;
      background-image: url('/static/img/close.png');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: -28px;
      right: -62px;
      width: 53px;
      height: 50px;
      cursor: pointer;
    }
  }

  .exhibition-img {
    width: 952px;
    height: 643px;
  }
}
</style>
