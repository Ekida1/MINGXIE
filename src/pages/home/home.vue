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
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.basement {
  .home-img {
    width: 100%;
    height: 100vh;
    background-image: url('/static/img/newnewhome.png');
    background-repeat: no-repeat;
    background-size: 1536px 659px;
    background-position: 0px 87px;
  }

  .instagram {
    position: absolute;
    right: 257px;
    bottom: 2%;
    width: 32px;
    height: 32px;
    background-image: url('/static/img/instagram.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .instagram:after {
    content: '';
    width: 0.11rem;
    height: 50%;
    background-color: $Probrown;
    position: absolute;
    left: 157%;
    top: 25%;
  }

  .youtube {
    position: absolute;
    right: 182px;
    bottom: 2%;
    width: 32px;
    height: 32px;
    background-image: url('/static/img/youtube.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .youtube:after {
    content: '';
    width: 0.11rem;
    height: 50%;
    background-color: $Probrown;
    position: absolute;
    left: 157%;
    top: 25%;
  }

  .soundcloud {
    position: absolute;
    right: 107px;
    bottom: 2%;
    width: 32px;
    height: 32px;
    background-image: url('/static/img/soundcloud.png');
    background-repeat: no-repeat;
    background-size: 100%;
  }
}

@media screen and (max-width: 415px) {
  .home-img {
    background-image: url('/static/img/phonehome.jpg') !important;
    background-size: 505px 681px !important;
    background-position: -50px 130px !important;
  }
}
</style>

