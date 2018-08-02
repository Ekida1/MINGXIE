<template>
<div class="basement">
  <div class="listen-img"></div>
  <div id="player"></div>
  <music-box class="muisc-box" :musicList="musicList" @checkedMusic="playMusic" @SwitchMusic="playMusic"></music-box>
</div>
</template>
<script>
import musicBox from "./muiscComponent/musicBox";
import { getMusicFile } from "common/request/request";
export default {
  name: "listen",
  components: {
    musicBox
  },
  data() {
    return {
      musicList: Array
    };
  },
  methods: {
    playMusic(item, isfirst) {
      if (isfirst === "first") {
        $("#player").jPlayer("setMedia", {
          mp3: item.file
        });
      } else {
        $("#player")
          .jPlayer("setMedia", {
            mp3: item.file
          })
          .jPlayer("play");
      }
    }
  },
  mounted() {},
  activated() {
    getMusicFile()
      .then(res => {
        if (res.success && res.data) {
          const data = res.data;
          this.musicList = data.musicList;
        }
        err => {
          console.log("获取音乐信息失败，失败报错:", err);
        };
      })
      .then(() => {
        $("#player").jPlayer({
          supplied: "mp3", //默认支持MP3 M4A
          wmode: "window"
        });
        this.playMusic(this.musicList[0], "first"); //一进来先选中第一首歌曲
      });
  }
};
</script>
<style lang="stylus" scoped>
.basement {
  margin-top: 126px;
  background-color: #121419;

  .listen-img {
    width: 100%;
    height: calc(100vh - 126px);
    background-image: url('/static/img/listen.png');
    background-repeat: no-repeat;
    background-size: 425px 277px;
  }

  .muisc-box {
    // 暂定定位
    position: absolute;
    top: 160px;
    right: 100px;
    width: 400px;
  }
}

@media screen and (max-width: 415px) {
  .basement {
    background-color: #1A1711 !important;
  }

  .listen-img {
    background-image: url('/static/img/phoneListen.jpg') !important;
    background-size: contain !important;
  }

  .muisc-box {
    top: auto !important;
    bottom: 0 !important;
    right: 0px !important;
    width: 100% !important;
  }
}
</style>
