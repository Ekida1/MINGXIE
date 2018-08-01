<template>
<div class="basement">
  <div class="concerts-img"></div>
  <div class="text-box">
    <ul class="tickets-list">
      <li class="ticket-item" v-for="ticket in ticketsList" :key="ticket.id">
        <div class="time-title">{{ticket.timeTitle}}</div>
        <div class="text-title">{{ticket.textTitle}}</div>
        <div class="location-title">{{ticket.location}}</div>
        <div class="text-content">{{ticket.textContent}}</div>
        <div class="tickets-btn-wrapper">
        <div class="left-triangle"></div>
        <div class="tickets-btn">Ticket</div>
        <div class="right-triangle"></div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import { getConcertsInfo } from "common/request/request";
export default {
  name: "concerts",
  data() {
    return {
      ticketsList: []
    };
  },
  created() {
    getConcertsInfo().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.ticketsList = data.ticketsList;
      }
      err => {
        reject(err);
      };
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

// scrollBarStyle(); // 引用全局样式方法，改变滑动条的样式
// timeTitleFontFamily();
.basement {
  margin-top: 126px;
  background-color: #121419;
  overflow: hidden;

  .concerts-img {
    width: 100%;
    height: calc(100vh - 126px);
    background-image: url('/static/img/concerts.png');
    background-repeat: no-repeat;
    background-size: 1357px 633px;
  }

  .text-box {
    position: absolute;
    top: 125px;
    right: 120px;
    width: 638px;
    background-image: linear-gradient(to left, rgba(255 250 250, 0), rgba(255 250 250, 0.12));
    color: #ffffff;
    line-height: 26px;

    .tickets-list {
      text-align: center;
      width: 553px;
      height: calc(100vh - 161px);
      padding: 0px 30px;
      margin-top: 20px;
      overflow: auto;

      .ticket-item {
        border-bottom: 1px solid #ffffff;

        .time-title {
          font-size: 18px;
          // font-family: 'timeTitleFont';
          padding-top: 20px;
        }

        .text-title {
          font-size: 20px;
          padding: 15px 0;
          color: $Probrown;
        }

        .location-title {
          font-size: 20px;
          color: $Probrown;
        }

        .text-content {
          padding: 15px 0;
        }

        .tickets-btn-wrapper {
          display: flex;

          .tickets-btn {
            background-color: $Probrown;
            font-size: 15px;
            width: 20%;
            height: 30px;
            line-height: 30px;
            margin: 10px 40% 30px 40%;
            border-radius: 2px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1050px) {
  .text-box {
    width: 450px !important;
    right: 30px !important;

    .tickets-list {
      width: 450px !important;
    }
  }
}

@media screen and (min-width: 410px) and (max-width: 768px) {
  .basement {
    background-color: #1A1711;
    min-height: 100vh !important;
  }

  .concerts-img {
    background-image: url('/static/img/phoneConcerts.jpg') !important;
    background-size: 415px !important;
  }

  .text-box {
    position: relative !important;
    width: 380px !important;
    right: -17px !important;
    top: -470px !important;
    background-image: none !important;

    .tickets-list {
      width: 380px !important;
      height: auto !important;
    }
  }
}

@media screen and (max-width: 409px) {
  .basement {
    background-color: #1A1711;
    min-height: 100vh !important;
  }

  .concerts-img {
    background-image: url('/static/img/phoneConcerts.jpg') !important;
    background-size: 411px !important;
  }

  .text-box {
    position: relative !important;
    width: 380px !important;
    right: 2px !important;
    top: -470px !important;
    background-image: none !important;
  }

  .tickets-list {
    width: 380px !important;
    height: auto !important;
  }
}
</style>
