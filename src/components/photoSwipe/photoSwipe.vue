<template>
  <div class="basement" @click="closeGallary">
    <div class="warpper">
      <swiper class="swiper-containers" ref="exhibitionSwiper" :options="swiperOption">
        <swiper-slide  v-for="(img,index) in imgs" :key="index">
          <img class="gallary-img" :src="img" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    </div>
</template>
<script>
export default {
  name: "CommonGallary",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        loop: false,
        autoplay: false,
        zoom: true,
        touchRatio: 0.8,
        autoHeight: true,
        preventLinksPropagation: true
      }
    };
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    },
    slideToIndex: Number
  },
  computed: {
    swiper() {
      return this.$refs.exhibitionSwiper.swiper;
    }
  },
  mounted() {
    this.swiper.slideTo(this.slideToIndex, 0, false);
  },
  methods: {
    closeGallary() {
      this.$emit("exitGallary");
    }
  }
};
</script>
<style lang="stylus" scoped>
.basement >>> .swiper-container {
  overflow: visible;
}

.basement {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  z-index: 101;

  .warpper {
    width: 100%;
    // height: 0;
    // padding-bottom: 150%;
    background: #000;

    .gallary-img {
      width: 100%;
    }

    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
