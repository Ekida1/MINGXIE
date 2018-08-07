<template>
  <div class="basement">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="slide1">
          <iframe width="800" height="500" src="https://www.youtube.com/embed/rW-p2aZAXeY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide2">
          <iframe width="800" height="500" src="https://www.youtube.com/embed/yX4qna29IJA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide3">
          <iframe width="800" height="500" src="https://www.youtube.com/embed/iiJlhyW71lg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import videojs from "video.js";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import "video.js/dist/video-js.css";
export default {
  name: "watch",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletElement: "li"
        },
        loop: false,
        mousewheel: true,
        effect: "coverflow",
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 5,
          stretch: 0,
          depth: 760,
          modifier: 1,
          slideShadows: false
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // var options = {
    //   controls: true,
    //   preload: "auto",
    //   // poster: "//vjs.zencdn.net/v/oceans.png",
    //   width: "800",
    //   height: "500",
    //   sources: [
    //     {
    //       src: "//vjs.zencdn.net/v/oceans.mp4",
    //       type: "video/mp4"
    //     },
    //     {
    //       src: "//vjs.zencdn.net/v/oceans.webm",
    //       type: "video/webm"
    //     },
    //     {
    //       src: "//vjs.zencdn.net/v/oceans.ogv",
    //       type: "video/ogg"
    //     }
    //   ]
    // };
    // var player = videojs("#ming-player1", options, function onPlayerReady() {
    //   videojs.log("Your player is ready!");
    //   // In this context, `this` is the player that was created by Video.js.
    //   // this.play();
    //   // How about an event listener?
    //   this.on("ended", function() {
    //     videojs.log("Awww...over so soon?!");
    //   });
    // });
    // var player = videojs("#ming-player2", options, function onPlayerReady() {
    //   videojs.log("Your player is ready!");
    //   // In this context, `this` is the player that was created by Video.js.
    //   // this.play();
    //   // How about an event listener?
    //   this.on("ended", function() {
    //     videojs.log("Awww...over so soon?!");
    //   });
    // });
    // var player = videojs("#ming-player3", options, function onPlayerReady() {
    //   videojs.log("Your player is ready!");
    //   // In this context, `this` is the player that was created by Video.js.
    //   // this.play();
    //   // How about an event listener?
    //   this.on("ended", function() {
    //     videojs.log("Awww...over so soon?!");
    //   });
    // });
  }
};
</script>

<style lang="stylus" scoped>
.basement >>> .swiper-container {
  min-height: 550px;
}

.basement {
  margin-top: 126px;

  .slide1 {
    width: 800px;
    height: 500px;
    margin: 10px 0px;
    background-color: orange;
  }

  .slide2 {
    width: 800px;
    height: 500px;
    margin: 10px 0px;
    background-color: pink;
  }

  .slide3 {
    width: 800px;
    height: 500px;
    margin: 10px 0px;
    background-color: yellowgreen;
  }
}
</style>
