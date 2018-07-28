<template>
  <div>
    <div class="components-progress" ref="progressline" @click="changeProgress">
        <div class="progress" :style="{width: this.progressbar + '%'}"></div>
      </div>
  </div>
</template>
<script>
export default {
  name: "progressBar",
  props: ["progressbar", "changeProgressHandler", "onPlay"],
  methods: {
    changeProgress(e) {
      let progressline = this.$refs.progressline;
      let progressbar =
        (e.clientX - progressline.getBoundingClientRect().left) /
        progressline.clientWidth;
      this.changeProgressHandler && this.changeProgressHandler(progressbar);
      this.onPlay && this.onPlay();
    }
  }
};
</script>
<style lang="stylus" scoped>
.components-progress {
  width: 90%;
  height: 3px;
  background-color: #8E8E8E;
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
  margin: 0 auto;
  cursor: pointer;

  .progress {
    width: 1%;
    height: 3px;
    background-color: #ffffff;
  }
}
</style>
