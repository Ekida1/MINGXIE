<template>
<div class="basement">
   <div class="contact-img"></div>
     <div class="text-box">
       <div class="contact-title">For France Benlgium Luxembourg</div>
       <div class="contact-info">
         <div class="info-top">Marie Honore</div>
         <div class="info-content">
           <div class="email">mariehonore33@gmail.com</div>
           <div class="tel">+33 660 89 34 88</div>
         </div>
       </div>
       <div class="contact-footer">
         <div class="footer-top">General inquiry</div>
         <div class="footer-content">Mingxiepiano@yahoo.com</div>
       </div>
     </div>
     <a href="https://m.youtube.com/user/KennyTse1" target="_blank"><div class="instagram"></div></a>
    <a href="https://www.instagram.com/elephancy_/" target="_blank"><div class="youtube"></div></a>
    <a href="https://m.soundcloud.com/user-210632041" target="_blank"><div class="soundcloud"></div></a>
</div>
</template>
<script>
export default {
  name: "contact"
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

scrollBarStyle(); // 引用全局样式方法，改变滑动条的样式

.basement {
  margin-top: 126px;
  background-color: #ffffff;

  .contact-img {
    width: 100%;
    height: calc(100vh - 126px);
    background-image: url('/static/img/contact.png');
    background-repeat: no-repeat;
    background-size: 1559px 877px;
    background-position: 0px -154px;
  }

  .text-box {
    position: absolute;
    top: 150px;
    right: 195px;
    width: 400px;
    height: calc(100vh - 210px);
    padding: 30px;
    background-image: linear-gradient(to left, rgba(255 250 250, 0), rgba(255 250 250, 0.9));
    color: #333333;
    line-height: 26px;
    overflow: auto;

    .contact-title {
      float: right;
      line-height: 60px;
      font-size: 50px;
    }

    .contact-info {
      float: right;
      padding: 20px 0;

      .info-top {
        font-size: 30px;
        font-weight: bold;
      }
    }

    .contact-footer {
      float: right;
      padding: 20px 0;

      .footer-top {
        font-size: 30px;
        font-weight: bold;
      }
    }
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
    background-color: #7d734e;
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
    background-color: #7d734e;
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
</style>
