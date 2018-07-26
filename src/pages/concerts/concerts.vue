<template>
<div class="basement">
  <div class="concerts-img"></div>
  <div class="text-box">
    <ul class="tickets-list">
      <li class="ticket-item" v-for="ticket in ticketsList" :key="ticket.id">
        <div class="time-title">{{ticket.timeTitle}}</div>
        <div class="text-title">{{ticket.textTitle}}</div>
        <div class="text-content">{{ticket.textContent}}</div>
        <div class="tickets-btn-wrapper">
        <div class="left-triangle"></div>
        <div class="tickets-btn">TICKETS</div>
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
  background-color: #020202;
  overflow: hidden;

  .concerts-img {
    width: 100%;
    height: calc(100vh - 126px);
    background-image: url('/static/img/about.jpg');
    background-repeat: no-repeat;
    background-size: 1330px 902px;
    background-position: -245px -60px;
  }

  .text-box {
    position: absolute;
    top: 125px;
    right: 120px;
    width: 573px;
    background-image: linear-gradient(to left, rgba(255 250 250, 0), rgba(255 250 250, 0.22));
    color: #ffffff;
    line-height: 26px;

    .tickets-list {
      width: 553px;
      height: calc(100vh - 161px);
      padding: 0px 30px;
      margin-top: 20px;
      overflow: auto;

      .ticket-item {
        border-bottom: 1px solid #ffffff;

        .time-title {
          font-size: 30px;
          // font-family: 'timeTitleFont';
          padding: 20px 0;
        }

        .text-title {
          font-size: 30px;
          padding: 15px 0;
        }

        .text-content {
          padding: 15px 0;
        }

        .tickets-btn-wrapper {
          display: flex;

          .tickets-btn {
            font-size: 25px;
            margin: 10px 0 30px 0;
            padding: 5px 0 5px 0;
            border-top: 1.5px solid #7D734E;
            border-bottom: 1.5px solid #7D734E;
            cursor: pointer;
          }

          .left-triangle {
            width: 28px;
            margin-top: 15px;
            getTriangleImg();
            background-repeat: no-repeat;
            background-size: contain;
            cursor: pointer;
          }

          .right-triangle {
            width: 28px;
            margin-top: 15px;
            getTriangleImg();
            transform: rotateY(180deg);
            background-repeat: no-repeat;
            background-size: contain;
            cursor: pointer;
          }
        }
      }
    }

    .tickets-list:after {
      content: '';
      width: 2px;
      height: 97%;
      background-color: #ffffff;
      position: absolute;
      left: 100%;
      top: 3%;
    }
  }
}
</style>
