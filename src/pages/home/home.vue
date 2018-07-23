<template>
  <div class="basement">
    <div class="home-img"></div>
    <a href="https://m.youtube.com/user/KennyTse1" target="_blank"><div class="instagram"></div></a>
    <a href="https://www.instagram.com/elephancy_/" target="_blank"><div class="youtube"></div></a>
   <a href="https://m.soundcloud.com/user-210632041" target="_blank"><div class="soundcloud"></div></a>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style lang="stylus" scoped>
.basement {
  .home-img {
    width: 100%;
    height: 100vh;
    background-image: url('../../../static/img/home.jpg');
    background-size: cover;
    background-position: 50% 65%;
    background-attachment: fixed;
  }

  .instagram {
    position: absolute;
    right: 257px;
    bottom: 5%;
    width: 32px;
    height: 32px;
    background-image: url('../../../static/img/instagram.png');
    background-repeat: no-repeat;
    background-size: 100%;
    // cursor: pointer;
  }

  .instagram:after {
    content: '';
    width: 0.11rem;
    height: 50%;
    background-color: #7d734e;
    position: absolute;
    left: 157%;
    top: 25%;
  }

  .youtube {
    position: absolute;
    right: 182px;
    bottom: 5%;
    width: 32px;
    height: 32px;
    background-image: url('../../../static/img/youtube.png');
    background-repeat: no-repeat;
    background-size: 100%;
    // cursor: pointer;
  }

  .youtube:after {
    content: '';
    width: 0.11rem;
    height: 50%;
    background-color: #7d734e;
    position: absolute;
    left: 157%;
    top: 25%;
  }

  .soundcloud {
    position: absolute;
    right: 107px;
    bottom: 5%;
    width: 32px;
    height: 32px;
    background-image: url('../../../static/img/soundcloud.png');
    background-repeat: no-repeat;
    background-size: 100%;
    // cursor: pointer;
  }
}
</style>

