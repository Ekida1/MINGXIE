<template>
  <div class="basement">
    <div class="concerts-img"></div>
    <div class="text-box">
      <div class="options-header">
        <div
          class="left-option"
          :class="{'active-option': 'upComing' === headerOptions }"
          @click="checkedOptions('upComing')"
        >UpComing</div>
        <div
          class="right-option"
          :class="{'active-option': 'PastEvent' === headerOptions }"
          @click="checkedOptions('PastEvent')"
        >Past Events</div>
      </div>
      <ul class="tickets-list" v-show="'upComing' === headerOptions">
        <li
          class="ticket-item animation-fade-up"
          v-for="ticket in upComingTicketsList"
          :key="ticket.id"
        >
          <div class="time-title">{{ticket.timeTitle || ""}}</div>
          <div class="text-title">{{ticket.textTitle || ""}}</div>
          <div class="location-title">{{ticket.location || ""}}</div>
          <div class="text-content">
            <p>{{ticket.textContent1 || ""}}</p>
            <p>{{ticket.textContent2 || ""}}</p>
            <p>{{ticket.textContent3 || ""}}</p>
            <p>{{ticket.textContent4 || ""}}</p>
          </div>

          <div class="tickets-btn-wrapper">
            <a class="tickets-btn" :href="ticket.link">Ticket</a>
          </div>
        </li>
      </ul>
      <ul class="tickets-list" v-show="'PastEvent' === headerOptions">
        <li
          class="ticket-item animation-fade-up"
          v-for="ticket in pastTicketsList"
          :key="ticket.id"
        >
          <div class="time-title">{{ticket.timeTitle || ""}}</div>
          <div class="text-title">{{ticket.textTitle || ""}}</div>
          <div class="location-title">{{ticket.location || ""}}</div>
          <div class="text-content">
            <p>{{ticket.textContent1 || ""}}</p>
            <p>{{ticket.textContent2 || ""}}</p>
            <p>{{ticket.textContent3 || ""}}</p>
            <p>{{ticket.textContent4 || ""}}</p>
          </div>
          <div class="tickets-btn-wrapper">
            <div class="left-triangle"></div>
            <a class="tickets-btn" :href="ticket.link">Ticket</a>
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
      upComingTicketsList: [],
      pastTicketsList: [],
      headerOptions: "upComing"
    };
  },
  methods: {
    checkedOptions(option) {
      this.headerOptions = option;
    }
  },
  created() {
    getConcertsInfo().then(
      res => {
        if (res.success && res.data) {
          const data = res.data;
          this.upComingTicketsList = data.upComingTicketsList;
          this.pastTicketsList = data.pastTicketsList;
        }
      },
      err => {
        reject(err);
      }
    );
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

timeTitleFamily();

// scrollBarStyle(); // 引用全局样式方法，改变滑动条的样式
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

    .options-header {
      display: flex;
      width: 553px;
      height: 40px;

      .left-option {
        width: 50%;
        line-height: 40px;
        text-align: center;
        background-color: #000000;
        cursor: pointer;
      }

      .right-option {
        width: 50%;
        line-height: 40px;
        text-align: center;
        background-color: #000000;
        cursor: pointer;
      }

      .active-option {
        background-color: transparent;
      }
    }

    .tickets-list {
      text-align: center;
      width: 553px;
      height: calc(100vh - 201px);
      padding: 0px 30px;
      margin-top: 20px;
      overflow: auto;

      .ticket-item {
        border-bottom: 1px solid #ffffff;

        .time-title {
          font-size: 18px;
          font-family: timeTitle;
          padding-top: 20px;
        }

        .text-title {
          font-family: 'Times New Roman';
          font-size: 20px;
          padding: 15px 0;
          color: $Probrown;
        }

        .location-title {
          font-size: 20px;
          color: $Probrown;
        }

        .text-content {
          line-height: 18px;
          font-family: 'Times New Roman';
          padding: 15px 0;
        }

        .tickets-btn-wrapper {
          display: flex;

          .tickets-btn {
            text-decoration: none;
            color: #ffffff;
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

      .animation-fade-up {
        animation: fadeInUp 1000ms;
        -webkit-animation: fadeInUp 1000ms;
        -moz-animation: fadeInUp 1000ms;
        -ms-animation: fadeInUp 1000ms;
      }
    }
  }
}

/* 淡入-从下up */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (min-width: 768px) and (max-width: 1050px) {
  .text-box {
    width: 450px !important;
    right: 30px !important;

    .options-header {
      width: 450px !important;
    }

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

    .options-header {
      width: 380px !important;
    }

    .tickets-list {
      width: 380px !important;
      height: auto !important;
      margin-top: 0 !important;

      .time-title {
        padding-top: 0 !important;
      }
    }
  }
}

@media screen and (max-width: 414px) {
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

  .options-header {
    width: 380px !important;
  }

  .tickets-list {
    width: 380px !important;
    height: auto !important;
    margin-top: 0 !important;

    .time-title {
      padding-top: 0 !important;
    }
  }
}
</style>
