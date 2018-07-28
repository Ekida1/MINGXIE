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

      <progress-bar :progressbar="progressbar" :changeProgressHandler="changeProgressHandler" :onPlay="onPlay"></progress-bar>

      <div class="music-controller">
        <div class="presong" @click="shiftMusic('pre')"></div>
        <div class="play" v-if="!isplay" @click="togglePlay"></div>
        <div class="pause" v-else @click="togglePlay"></div>
        <div class="nextsong" @click="shiftMusic('next')"></div>
      </div>
    </div>
    <div class="music-box-body">
      <ul class="music-list">
        <li class="music-item" :class="{'active-item':musicList.indexOf(music) === activeMusicItem }" v-for="music in musicList" :key="music.id" @click="checkedMusicItem(music)">{{music.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./progress/progress";
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
    ProgressBar
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
      totalTime: null
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
      // console.log('from root widget', progress);
      $("#player").jPlayer("play", this.duration * progress);
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
      this.$emit("checkedMusic", music);
      this.currentMusicItem = this.musicList[this.musicList.indexOf(music)];
      this.activeTitle = music.title;
      this.activeMusicItem = this.musicList.indexOf(music);
      this.onPlay();
    },
    shiftMusic(type) {
      let index = this.musicList.indexOf(this.currentMusicItem);
      let musicListLength = this.musicList.length;
      if (type === "pre") {
        if (index === -1) index = 0;
        let newIndex = (index - 1 + musicListLength) % musicListLength;
        this.$emit("SwitchMusic", this.musicList[newIndex]);
        this.currentMusicItem = this.musicList[newIndex];
        this.activeTitle = this.currentMusicItem.title;
        this.activeMusicItem = this.musicList.indexOf(this.currentMusicItem);
        this.onPlay();
      }
      if (type === "next") {
        if (index === -1) index = 0;
        let newIndex = (index + 1) % musicListLength;
        this.$emit("SwitchMusic", this.musicList[newIndex]);
        this.currentMusicItem = this.musicList[newIndex];
        this.activeTitle = this.currentMusicItem.title;
        this.activeMusicItem = this.musicList.indexOf(this.currentMusicItem);
        this.onPlay();
      }
    }
  },
  activated() {
    // this.activeTitle = this.musicList[0].title;
    this.activeTitle = "余波荡漾"; //上面那张方式获取有bug，目前暂时先写死，如果要更新音乐，记住这里同步更新
    this.activeMusicItem = 0;
    this.currentMusicItem = this.musicList;
    $("#player").bind($.jPlayer.event.timeupdate, e => {
      this.duration = e.jPlayer.status.duration; //获取音频总时长
      let _progress = e.jPlayer.status.currentPercentAbsolute;
      this.progressbar = _progress;
      this.runTime = this.formatTime(
        this.duration * (e.jPlayer.status.currentPercentAbsolute / 100)
      );
      this.totalTime = this.formatTime(this.duration);
    });
  },
  deactivated() {
    this.isplay = false;
    $("#player").unbind($.jPlayer.event.timeupdate);
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
}

.music-box-body {
  width: 100%;
  height: calc(100vh - 261px);
  position: relative;
  background-color: #2F3135;
  opacity: 0.2;
  overflow-y: auto;

  .music-list {
    padding: 20px 0;

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
</style>