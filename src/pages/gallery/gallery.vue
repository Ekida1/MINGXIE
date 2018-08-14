<template>
  <div class="basement">
    <div class="gallery-header">
      <div class="gallery-content">
        <div class="option-item on-stage" :class="{'active-item': 'onstage' === galleryCategory }" @click="checkedCategory('onstage')">On Stage</div>
        <div class="option-item off-stage" :class="{'active-item': 'offstage' === galleryCategory }" @click="checkedCategory('offstage')">Off Stage</div>
        <div class="option-item Vision" :class="{'active-item': 'vision' === galleryCategory }" @click="checkedCategory('vision')">Vision</div>
      </div>
    </div>
     <keep-alive>
       <router-view/>
     </keep-alive>
    <div class="back-to-top" title="back to top" v-show="toTopShow" @click="handleScrollToTop"></div>
  </div>
</template>

<script>
export default {
  name: "gallery",
  data() {
    return {
      toTopShow: false,
      galleryCategory: "onstage"
    };
  },
  methods: {
    checkedCategory(type) {
      this.galleryCategory = type;
      this.$router.push({ path: "/gallery/" + type });
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
  activated() {
    this.galleryCategory = this.$route.name;
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
    height: 85px;
    text-align: center;

    .gallery-content {
      display: flex;
      position: relative;
      left: 0;
      right: 0;
      top: 20px;
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
    z-index: 199;
  }
}
</style>
