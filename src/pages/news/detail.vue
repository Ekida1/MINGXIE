<template>
  <div class="basement">
    <div class="detail-content">
      <div class="content-img"></div>
      <p>
      {{detailContent}}
      </p>
    </div>
  </div>
</template>

<script>
import { getDetailData } from "common/request/request";
export default {
  name: "detail",
  data() {
    return {
      detailContent: ""
    };
  },
  created() {
    getDetailData().then(res => {
      if (res.success && res.data) {
        const data = res.data;
        this.detailContent = data.detailContent;
      }
      err => {
        console.log("获取Detail信息失败，失败报错:", err);
      };
    });
  }
};
</script>

<style lang="stylus" scoped>
.basement {
  width: 100%;
  margin-top: 126px;
  background-color: #F8F8F8;
  position: relative;

  .detail-content {
    .content-img {
      width: 100%;
      height: 300px;
      background-color: orange;
    }

    p {
      -moz-column-count: 2; /* Firefox */
      -webkit-column-count: 2; /* Safari and Chrome */
      column-count: 2;
      -moz-column-gap: 30px; /* Firefox */
      -webkit-column-gap: 30px; /* Safari and Chrome */
      column-gap: 30px;
    }
  }
}
</style>
