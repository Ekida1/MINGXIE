<template>
<div class="basement">
  <div class="listen-img"></div>
  <div class="sk-player" id="skPlayer" style="position:absolute;right:10px;top:150px;"></div>
</div>
</template>
<script>
import skPlayer from "skPlayer";
export default {
  name: "listen",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var player = new skPlayer({
      autoplay: true,
      //可选项,自动播放,默认为false,true/false
      listshow: true,
      //可选项,列表显示,默认为true,true/false
      mode: "listloop",
      //可选项,循环模式,默认为'listloop'
      //'listloop',列表循环
      //'singleloop',单曲循环
      music: {
        //必需项,音乐配置
        type: "file",
        //必需项,自配置文件方式指定填'file'
        source: [
          //必需项,音乐文件数组
          {
            name: "0932",
            //必需项,歌名
            author: "陈小春",
            //必需项,歌手
            src: "/static/music/0932.mp3",
            //必需项,音乐文件
            cover: "/static/music/cover/0932.jpg"
            //必需项,封面图片
          }
        ]
      }
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
    background-image: url('/static/img/listen.jpg');
    background-repeat: no-repeat;
    background-size: 1133px 721px;
    background-position: -68px 27px;
    // background-attachment: fixed;
  }
}
</style>
