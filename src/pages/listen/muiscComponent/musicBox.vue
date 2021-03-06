<template>
  <div>
    <div class="music-box-head">
      <div class="music-title">
        {{activeTitle}}
        </div>
      <div class="music-time">
        <span class="left-time">{{runTime}}</span>
        /
        <span class="total-time">{{totalTime}}</span>
        </div>

      <progress-bar :progressbar="progressbar"
       :changeProgressHandler="changeProgressHandler"
        :onPlay="onPlay"></progress-bar>

      <div class="music-controller">
        <div class="presong" @click="shiftMusic('pre')"></div>
        <div class="play" v-if="!isplay" @click="togglePlay"></div>
        <div class="pause" v-else @click="togglePlay"></div>
        <div class="nextsong" @click="shiftMusic('next')"></div>
      </div>
      <div class="volume-controller">
        <div v-show="isVoice" class="icon-volume" @click="toggleVoice"></div>
        <div v-show="!isVoice" class="icon-silence-volume" @click="toggleVoice"></div>
        <div class="volume-wrapper">
          <vol-progress-bar :valProgressbar="volume"
          :changeProgressHandler="changeVolumeHandler" @volumeIsTrue="volumeIsTrue"
           ></vol-progress-bar>
        </div>
      </div>
    </div>
    <div class="music-box-body">
      <div class="music-wrap" ref="listenListWrapper">
      <ul class="music-list">
        <li class="music-item" :class="{'active-item':localMusicList.indexOf(music) === activeMusicItem }" v-for="music in localMusicList" :key="music.id" @click="checkedMusicItem(music)">{{music.title}}</li>
      </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./progress/progress";
import volProgressBar from "./progress/volProgress";
import BScroll from "better-scroll";
export default {
  name: "musicBox",
  props: {
    musicList: {
      default: function() {
        return [];
      }
    }
  },
  components: {
    ProgressBar,
    volProgressBar
  },
  data() {
    return {
      progressbar: Number,
      activeTitle: "未知音乐",
      activeMusicItem: 0, //当前播放歌曲的索引值，默认是0，也就是第一个
      currentMusicItem: {},
      isplay: false,
      duration: null,
      runTime: null,
      totalTime: null,
      volume: 0,
      beforeSilenceVol: 0,
      isVoice: true,
      localMusicList: []
    };
  },
  methods: {
    togglePlay() {
      this.isplay = !this.isplay;
      if (this.isplay) {
        $("#player").jPlayer("play"); //jPlayer提供的方法提供 播放
      } else {
        $("#player").jPlayer("pause"); //jPlayer提供的方法提供 暂停
      }
    },
    changeProgressHandler(progress) {
      $("#player").jPlayer("play", this.duration * progress);
    },
    changeVolumeHandler(progress) {
      $("#player").jPlayer("volume", progress);
    },
    onPlay() {
      if (!this.isplay) {
        this.isplay = !this.isplay;
      }
    },
    formatTime(time) {
      if (time === 0) {
        return `00:00`;
      }
      time = Math.floor(time);
      let min = Math.floor(time / 60);
      let sec = Math.floor(time % 60);

      sec = sec < 10 ? `0${sec}` : sec;
      return `${min}:${sec}`;
    },
    checkedMusicItem(music) {
      if (this.activeMusicItem === this.localMusicList.indexOf(music)) return;
      this.$emit("checkedMusic", music);
      this.currentMusicItem = this.localMusicList[
        this.localMusicList.indexOf(music)
      ];
      this.activeTitle = music.title;
      this.activeMusicItem = this.localMusicList.indexOf(music);
      this.onPlay();
    },
    shiftMusic(type) {
      let index = this.localMusicList.indexOf(this.currentMusicItem);
      let musicListLength = this.localMusicList.length;
      if (type === "pre") {
        if (index === -1) index = 0;
        let newIndex = (index - 1 + musicListLength) % musicListLength;
        this.$emit("SwitchMusic", this.localMusicList[newIndex]);
        this.currentMusicItem = this.localMusicList[newIndex];
        this.activeTitle = this.currentMusicItem.title;
        this.activeMusicItem = this.localMusicList.indexOf(
          this.currentMusicItem
        );
        this.onPlay();
      }
      if (type === "next") {
        if (index === -1) index = 0;
        let newIndex = (index + 1) % musicListLength;
        this.$emit("SwitchMusic", this.localMusicList[newIndex]);
        this.currentMusicItem = this.localMusicList[newIndex];
        this.activeTitle = this.currentMusicItem.title;
        this.activeMusicItem = this.localMusicList.indexOf(
          this.currentMusicItem
        );
        this.onPlay();
      }
    },
    toggleVoice() {
      this.isVoice = !this.isVoice;
      if (!this.isVoice) {
        this.beforeSilenceVol = this.volume / 100; //this.volum是进度条的百分比值，真实的音量值是 0-1之间的小数值，所以要除以100
        this.changeVolumeHandler(0);
      } else {
        this.changeVolumeHandler(this.beforeSilenceVol);
      }
    },
    volumeIsTrue() {
      this.isVoice = true;
    }
  },
  mounted() {},
  watch: {
    musicList(val) {
      this.localMusicList = val;
      this.activeTitle = this.localMusicList[0].title;
    }
  },
  activated() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.listenListWrapper, { click: true });
    });
    this.activeMusicItem = 0;
    this.currentMusicItem = this.localMusicList;
    $("#player").bind($.jPlayer.event.timeupdate, e => {
      this.duration = e.jPlayer.status.duration; //获取音频总时长
      this.volume = e.jPlayer.options.volume * 100; // this.volum介于1-100之间
      let _progress = e.jPlayer.status.currentPercentAbsolute;
      this.progressbar = _progress;
      this.runTime = this.formatTime(
        this.duration * (e.jPlayer.status.currentPercentAbsolute / 100)
      );
      this.totalTime = this.formatTime(this.duration);
    });
    $("#player").bind($.jPlayer.event.ended, e => {
      //绑定一个事件，在音乐结束的时候，自动切换到下一首
      this.shiftMusic("next");
    });
    $("#player").bind($.jPlayer.event.volumechange, e => {
      //当调节音量的时候触发此jplayer方法！！！
      this.volume = e.jPlayer.options.volume * 100; // this.volum介于1-100之间，这里是真正的音量被调节的地方
    });
  },
  deactivated() {
    this.isplay = false;
    $("#player").unbind($.jPlayer.event.timeupdate);
    $("#player").unbind($.jPlayer.event.ended);
    $("#player").unbind($.jPlayer.event.volumechange);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.music-box-head {
  position: relative;
  width: 100%;
  height: 90px;
  background-color: #2F3135;
  opacity: 0.8;

  .music-title {
    width: 250px;
    position: absolute;
    left: 15px;
    top: 5px;
    color: #ffffff;
    ellipsis();
  }

  .music-time {
    color: #ffffff;
    position: absolute;
    right: 35px;
    top: 5px;
  }

  .music-controller {
    display: flex;
    justify-content: space-around;
    width: 140px;
    height: 30px;
    margin-left: 15px;
    position: absolute;
    left: 0;
    top: 50px;

    .presong {
      width: 23px;
      height: 23px;
      background-image: url('/static/img/presong.png');
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .play {
      width: 23px;
      height: 23px;
      background-image: url('/static/img/play.png');
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .pause {
      width: 23px;
      height: 23px;
      background-image: url('/static/img/pause.png');
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .nextsong {
      width: 23px;
      height: 23px;
      background-image: url('/static/img/nextsong.png');
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }

  .volume-controller {
    width: 100px;
    position: absolute;
    left: 255px;
    top: 50px;

    .icon-volume {
      display: inline-block;
      width: 23px;
      height: 23px;
      background-image: url('/static/img/volume.png');
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .icon-silence-volume {
      display: inline-block;
      width: 23px;
      height: 23px;
      background-image: url('/static/img/silence.png');
      background-size: cover;
      background-repeat: no-repeat;
      cursor: pointer;
    }

    .volume-wrapper {
      position: absolute;
      top: -25px;
      left: 28px;
      width: 70px;
    }
  }
}

.music-box-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 261px);
  position: relative;
  background-color: #2F3135;
  opacity: 0.2;
  overflow-y: auto;

  .music-wrap {
    .music-list {
      display: flex;
      flex-direction: column;
      padding: 20px 0;
    }

    .music-item {
      color: #ffffff;
      padding: 5px 20px;
      cursor: pointer;
      ellipsis();
    }

    .music-item:hover {
      color: orange;
      background-color: #ffffff;
      opacity: 0.9;
    }

    .active-item {
      color: orange;
      background-color: #ffffff;
      opacity: 0.9;
    }
  }
}

@media screen and (max-width: 415px) {
  .music-box-head {
    opacity: 1 !important;
  }

  .music-box-body {
    display: flex;
    flex-direction: column-reverse;
    height: calc(100vh - 443px) !important;
    position: absolute !important;
    bottom: 89px !important;
    opacity: 0.4 !important;
    background-color: #1A1711 !important;

    .music-wrap {
      overflow: hidden;

      .music-list {
        flex-direction: column-reverse !important;
        padding: 10px 0;
        margin: 0;
      }
    }
  }
}
</style>
