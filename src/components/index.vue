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
    <!-- <router-link to class="a-box">
      <div>web开发</div>
    </router-link>
    <router-link to class="a-box">
      <div>web开发</div>
    </router-link>
    <router-link to class="a-box">
      <div>web开发</div>
    </router-link>-->

    <!-- <div class="center"> -->
    <!-- <div class="text" :style="'width:'+num+'px'">
        {{ msg}}
    </div>-->
    <!-- <p>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        </p>
        <p>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        </p>
        <p>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
        <router-link to="">开发</router-link>
    </p>-->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "夏天的风 我永远记得",
      num: 0,
      timenum: 0,
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
  },

  created() {
    // setInterval(() => {
    //   if (this.num == 0) {
    //       if(this.timenum%2==1){
    //           this.msg="为什么你不在 问山风你会回来"
    //       }else{
    //           this.msg="夏天的风 我永远记得"
    //       }
    //     this.num = 260;
    //   } else if (this.num >= 260) {
    //     this.num = 0;
    //     this.timenum++
    //   }
    // }, 3000);
  }
};
</script>

<style lang="less">
.index {
  // position: relative;
  display: flex;
  // padding-left: 20px;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  // justify-content: space-between;
  // background-color: #0f0;
  .a-box {
    display: flex;
    margin: 10px;
    width: 340px;
    height: 214px;
    text-decoration: none;
    // background-color: #ff5147;
    // background-image: url('../assets/img/binding-dark.png');
    // background-image: url("../assets/img/fan1.jpg");
    // background-position: center;

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
        margin:8px 2px;
      }
    }
  }
  // .center {
  //   position: absolute;
  //   top: 40%;
  //   left: 50%;
  //   transform: translateX(-50%) translateY(-50%);
  //   width: 900px;
  //   height: 500px;
  //   box-sizing: border-box;

  //   // background-color: #f00;

  //   // p {
  //   //   text-align: center;
  //   //   a {
  //   //     margin: 0 15px;
  //   //     display: inline-block;
  //   //     padding: 0 20px;
  //   //     text-align: center;
  //   //     line-height: 40px;
  //   //     text-decoration: none;
  //   //     color: #fff;
  //   //     font-size: 14px;
  //   //     background-color: #ff5147;
  //   //     border-radius: 9px;
  //   //     &:nth-child(3n+2) {
  //   //       // background-color: #00cc4e;
  //   //     }
  //   //     &:nth-child(3n+3) {
  //   //       // background-color: #ffba23;
  //   //     }
  //   //   }
  //   // }

  //   // .text {
  //   //   color: @tcolor;
  //   //   white-space: nowrap;
  //   //   overflow: hidden;
  //   //   transition: all 3s ease 0s;
  //   // }
  // }
}
</style>
