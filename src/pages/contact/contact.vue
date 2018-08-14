<template>
<div class="basement">
   <div class="contact-img"></div>
     <div class="text-box">
       <div class="contact-wrapper">
       <div class="contact-top">
       <div style="color: #7D734E">For France Benlgium Luxembourg Switzerland/Spain/Greece</div>
       <div class="contact-info">
         <div style="font-weight: bold">Marie Honore</div>
         <div class="info-content">
           <div class="email">mariehonore33@gmail.com</div>
           <div class="tel">+33 660 89 34 88</div>
         </div>
       </div>
       </div>
     <div class="contact-middle">
       <div style="color: #7D734E">For United States</div>
       <div style="font-weight: bold">Octavio Choy</div>
       <div>dr.gregoriochoy@gmail.com</div>
       <div>+1(203)895-5456</div>
       <div>43 West 61 Street</div>
       <div>New York,NY,10023</div>
       <div>United States</div>
     </div>
       <div class="contact-footer">
         <div class="footer-top">General inquiry</div>
         <div class="footer-content">Mingxiepiano@yahoo.com</div>
       </div>
     </div>
     </div>
     <a href="https://www.instagram.com/elephancy_/" target="_blank"><div class="instagram"></div></a>
    <a href="https://m.youtube.com/user/KennyTse1" target="_blank"><div class="youtube"></div></a>
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
    overflow-x: hidden;
    overflow-y: auto;

    .contact-wrapper {
      text-align: right;
      font-size: 20px;

      .contact-top {
        padding-bottom: 20px;
      }

      .contact-top:after {
        content: '';
        width: 20%;
        height: 2px;
        background-color: $Probrown;
        position: absolute;
        right: 30px;
        top: 175px;
      }

      .contact-middle {
        padding: 20px 0;
      }

      .contact-middle:after {
        content: '';
        width: 20%;
        height: 2px;
        background-color: $Probrown;
        position: absolute;
        right: 30px;
        top: 395px;
      }

      .contact-footer {
        padding-top: 20px;

        .footer-top {
          color: $Probrown;
        }
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
  .contact-img {
    background-image: url('/static/img/phoneContact.jpg') !important;
    background-size: 414px 261px !important;
    background-position: top !important;
  }

  .text-box {
    position: absolute !important;
    top: 386px !important;
    right: auto !important;
    width: 100% !important;
    height: calc(100vh - 168px) !important;

    .contact-wrapper {
      text-align: center !important;

      .contact-top:after {
        left: 0 !important;
        right: 0 !important;
        margin: 0 auto !important;
      }

      .contact-middle:after {
        left: 0 !important;
        right: 0 !important;
        margin: 0 auto !important;
      }
    }
  }

  .instagram {
    bottom: -24% !important;
  }

  .youtube {
    bottom: -24% !important;
  }

  .soundcloud {
    bottom: -24% !important;
  }
}

@media screen and (max-height: 668px) {
  .instagram {
    bottom: -33% !important;
  }

  .youtube {
    bottom: -33% !important;
  }

  .soundcloud {
    bottom: -33% !important;
  }
}
</style>
