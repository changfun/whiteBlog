<template>
  <div class="index">
    <router-link
      :to="item.linkto"
      class="a-box"
      v-for="(item, index) in imgData"
      :key="index"
      :style="{background:'url('+item.path+')',backgroundSize:'100%'}"
    >
      <div>
        <div class="zhanwei"></div>
        <p>{{item.dec}}</p>
      </div>
    </router-link>
    <a class="a-box"></a>
    <a class="a-box"></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgData: [
        {
          dec: "MEGAsync-不限速网盘",
          linkto: "mega",
          path: require("../assets/img/banner.png")
        },
        {
          dec: "软件开发的10款实用工具",
          linkto: "ittool",
          path: require("../assets/img/banner2.png")
        },
        {
          dec: "IMG标签引入https图片在安卓和ios不显示",
          linkto: "imgshow",
          path: require("../assets/img/banner3.jpg")
        },
        {
          dec: "Vue CLI3 配置less全局变量",
          linkto: "varless",
          path: require("../assets/img/banner1.png")
        },
        {
          dec: "恐怖电影TOP10",
          linkto: "horrormovie",
          path: require("../assets/img/banner4.png")
        },
        {
          dec: "Vue项目动态添加的图片不显示",
          linkto: "bgshow",
          path: require("../assets/img/banner5.jpg")
        },
        {
          dec: "ES6知识点汇总",
          linkto: "es6",
          path: require("../assets/img/es6.jpg")
        },
        {
          dec: "首页",
          linkto: "index",
          path: require("../assets/img/mao1.jpg")
        },
        {
          dec: "首页",
          linkto: "index",
          path: require("../assets/img/mao1.jpg")
        },
        {
          dec: "首页",
          linkto: "index",
          path: require("../assets/img/mao1.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="less">
.index {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .a-box {
    display: flex;
    margin: 10px;
    width: 340px;
    height: 214px;
    text-decoration: none;
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      color: #fff;
      font-size: 24px;
      background-color: rgba(0, 0, 0, 0.4);
      .zhanwei {
        flex: 1;
        background: none;
      }
      p {
        color: #fff;
        margin: 8px 2px;
      }
    }
  }
}
</style>
