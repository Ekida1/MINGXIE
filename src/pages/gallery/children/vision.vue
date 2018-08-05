<template>
  <div>
    <div class="photo-list">
      <div v-for="(photo,index) in photosList" :key="photo.id"  @click="exhibitionShow(index)" class="img-container" :class="{'is-left': (index+1) % 2 === 0, 'is-right': (index+1) %2 !== 0 }">
        <div class="overlay">
        </div>
         <img :src="photo.thumbnail" alt="">
      </div>
    </div>
          <div class="pop-layer" v-if="gallaryShow">
        <div class="close-pop" @click="closeExhibition"></div>
      </div>
      <exhibition v-if="gallaryShow" :slideToIndex="slideToIndex" :photosList="photosList"></exhibition>
  </div>
</template>

<script>
import exhibition from "components/exhibition/exhibition";
import { getVisonPhotosListData } from "common/request/request";
export default {
  name: "vision",
  data() {
    return {
      photosList: [{}],
      gallaryShow: false,
      slideToIndex: 0
    };
  },
  components: {
    exhibition
  },
  methods: {
    exhibitionShow(index) {
      this.gallaryShow = true;
      this.slideToIndex = index;
    },
    closeExhibition() {
      this.gallaryShow = false;
    }
  },
  created() {
    getVisonPhotosListData().then(res => {
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

@media screen and (max-width: 1456px) {
  .photo-wrap {
    justify-content: center !important;
  }
}
</style>
