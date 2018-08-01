<template>
  <div>
          <div class="photo-list">
      <div v-for="(photo,index) in photosList" :key="photo.id" class="img-container" :class="{'is-left': (index+1) % 2 === 0, 'is-right': (index+1) %2 !== 0 }">
        <div class="overlay">
        </div>
        <img :src="photo.imgUrl" alt="">
      </div>
      </div>
  </div>
</template>
<script>
import { getVisonPhotosListData } from "common/request/request";
export default {
  name: "vision",
  data() {
    return {
      photosList: []
    };
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
