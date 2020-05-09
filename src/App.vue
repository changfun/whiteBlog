<template>
  <div id="container">
    <el-container class="index-container">
      <el-header class="index-header" style="height:52px">
        <div class="tit">
          <a href="http://zhangfine.top">张凡个人网站</a>
        </div>
        <i @click="mobileMenuShow = !mobileMenuShow" class="iconfont icon-Menu"></i>
      </el-header>
      <!-- <transition name="fade"> -->
      <!-- 手机导航 -->
      <el-aside v-show="mobileMenuShow" class="main-aside-mobile" width="370px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu router unique-opened default-active="2" class="el-menu-vertical-demo">
              <el-submenu index="1">
                <template slot="title">
                  <i class="fa fa-folder-o fa-lg"></i>
                  <span>博客</span>
                </template>
                <el-menu-item index="mega">
                  <i class="fa fa-file-text-o"></i>MEGAsync-不限速网盘
                </el-menu-item>
                <el-menu-item index="ittool">
                  <i class="fa fa-file-text-o"></i>软件开发10款实用工具
                </el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="fa fa-folder-o fa-lg"></i>
                  <span>生活分享</span>
                </template>
                <el-menu-item index="2-1">
                  <i class="fa fa-file-text-o"></i>母鸡
                </el-menu-item>
                <el-menu-item index="2-2">
                  <i class="fa fa-file-text-o"></i>再见
                </el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="fa fa-folder-o fa-lg"></i>
                  <span>例题</span>
                </template>
                <el-menu-item index="imgshow">
                  <i class="fa fa-file-text-o"></i>https图片在安卓和ios不显示
                </el-menu-item>
                <el-menu-item index="3-2">
                  <i class="fa fa-file-text-o"></i>再见
                </el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="fa fa-folder-o fa-lg"></i>
                  <span>VLOG</span>
                </template>
                <el-menu-item index="4-1">
                  <i class="fa fa-file-text-o"></i>母鸡
                </el-menu-item>
                <el-menu-item index="4-2">
                  <i class="fa fa-file-text-o"></i>再见
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <!-- </transition> -->

      <el-container class="index-main">
        <el-aside class="main-aside" width="300px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu router default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>博客</span>
                  </template>
                  <el-menu-item index="mega">
                    <i class="fa fa-file-text-o"></i>MEGAsync-不限速网盘
                  </el-menu-item>
                  <el-menu-item index="ittool">
                    <i class="fa fa-file-text-o"></i>软件开发10款实用工具
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>生活分享</span>
                  </template>
                  <el-menu-item index="2-1">
                    <i class="fa fa-file-text-o"></i>母鸡
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <i class="fa fa-file-text-o"></i>再见
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>常见问题</span>
                  </template>
                  <el-menu-item index="imgshow">
                    <i class="fa fa-file-text-o"></i>img标签https图片安卓ios不显示
                  </el-menu-item>
                  <el-menu-item index="varless">
                    <i class="fa fa-file-text-o"></i>Vue-CLI3配置less全局变量
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>VLOG</span>
                  </template>
                  <el-menu-item index="4-1">
                    <i class="fa fa-file-text-o"></i>母鸡
                  </el-menu-item>
                  <el-menu-item index="4-2">
                    <i class="fa fa-file-text-o"></i>再见
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-aside class="main-aside-small" width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu router unique-opened default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>博客</span>
                  </template>
                  <el-menu-item index="mega">
                    <i class="fa fa-file-text-o"></i>MEGAsync-不限速网盘
                  </el-menu-item>
                  <el-menu-item index="ittool">
                    <i class="fa fa-file-text-o"></i>软件开发10款实用工具
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>生活分享</span>
                  </template>
                  <el-menu-item index="2-1">
                    <i class="fa fa-file-text-o"></i>母鸡
                  </el-menu-item>
                  <el-menu-item index="2-2">
                    <i class="fa fa-file-text-o"></i>再见
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>电影</span>
                  </template>
                  <el-menu-item index="3-1">
                    <i class="fa fa-file-text-o"></i>母鸡
                  </el-menu-item>
                  <el-menu-item index="3-2">
                    <i class="fa fa-file-text-o"></i>再见
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>VLOG</span>
                  </template>
                  <el-menu-item index="4-1">
                    <i class="fa fa-file-text-o"></i>母鸡
                  </el-menu-item>
                  <el-menu-item index="4-2">
                    <i class="fa fa-file-text-o"></i>再见
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main class="main-center">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      screenWidth: document.body.clientWidth,
      mobileMenuShow: false
    };
  },

  mounted() {
    // 监听窗口大小
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
      if (this.screenWidth > 768) {
        this.mobileMenuShow = false;
      }
    };
  }
};
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;

  //手机导航动画
  //   .fade-enter-active, .fade-leave-active {
  //   transition: all .5s;
  // }
  // .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //   opacity: 0;
  //   transform: translateY(-100%);
  // }

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    body {
      #container {
        .index-container {
          .index-main {
            .main-aside {
              display: none;
            }
            .main-aside-small {
              display: block;
            }
            .main-center {
              padding-right: 100px;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    body {
      #container {
        .index-container {
          .index-main {
            .main-aside {
              display: none;
            }
            .main-aside-small {
              display: block;
            }
            .main-center {
              padding-right: 20px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    body {
      #container {
        .index-container {
          .index-header {
            div.tit {
              margin-right: 0;
              text-align: center;
            }
            i.iconfont {
              display: block;
            }
          }
          .index-main {
            .main-aside {
              display: none;
            }

            .main-center {
              padding-right: 20px;
            }
          }
        }
        .el-aside.main-aside-mobile {
          display: block;
        }
      }
    }
  }
  #container {
    height: 100%;

    min-height: 100%;
    // background-color: #fcfcfc;
    background-color: @bg;
    // background-image:@bgimg;
    .index-container {
      height: 100%;
      .index-header {
        z-index: 2;
        position: fixed;
        width: 100%;
        height: 52px;
        padding: 0;
        background-color: @bg;
        // opacity: .5;
        // background-image: url("./assets/img/binding-dark.png");
        .tit {
          margin-right: 170px;
          text-align: right;
          height: 100%;
          a {
            text-decoration: none;
            line-height: 52px;
            color: #707070;
            // color: #999;
            font-size: 20px;
            font-weight: 100;
            text-align: right;
          }
        }
        i {
          display: none;
          position: absolute;
          cursor: pointer;
          right: 50px;
          top: 18px;
          // color: #7a7a7a;
          // color: $textColor;
          font-size: 18px;
          // transition: all 1s;
          // &:hover {
          //   transform: rotateZ(360deg);

          // }
        }
      }
      //手机导航
      .main-aside-mobile {
        position: relative;
        top: 52px;
        left: 0;
        width: 100% !important;
        .tac {
          position: relative;
          width: 100%;
          height: 228px;
          padding: 0 20px;

          ul {
            background-color: #fcfcfc;
            border: none;
            .el-submenu {
              border-bottom: 1px solid #ccc;
              box-sizing: border-box;
              background-color: #fff;
              .el-submenu__title {
                color: #333;
                font-size: 14px;
                font-weight: bold;
                &:hover {
                  background-color: #afb3b9;
                }
                .fa {
                  margin-right: 5px;
                  color: #333;
                }
                .el-submenu__icon-arrow {
                  display: none;
                }
              }
              ul {
                .el-menu-item {
                  color: #333;
                  font-size: 14px;
                  background-color: #fff;
                  &:hover {
                    background-color: #fff;
                    color: #007ca9;
                  }
                  &.is-active {
                    background-color: #fff;
                    color: #007ca9;
                  }
                  .fa {
                    margin-right: 5px;
                    color: #333;
                    padding-bottom: 3px;
                  }
                }
              }
            }
          }
        }
      }
      .index-main {
        margin-top: 52px;
        
        background-color: @bg;
        .main-aside {
          position: relative;
          padding: 0 10px 10px 10px;
          height: 100%;
          .tac {
            position: fixed;
            width: 280px;
            ul {
              border: none;
              .el-submenu {
                // margin-bottom: 10px;
                background-color: #fff;
                .el-submenu__title {
                  color: @tcolor;
                  font-size: 14px;
                  &:hover {
                    // background-color: #afb3b9;
                    background-color: #fff;
                  }
                  .fa {
                    margin-right: 5px;
                  }
                  .el-submenu__icon-arrow {
                    display: none;
                  }
                }
                ul {
                  .el-menu-item {
                    color: @tcolor;
                    font-size: 14px;
                    background-color: #fff;
                    &:hover {
                      background-color: @bg;
                      // color: @acolor;
                      // color: #333;
                      // font-weight: bold;
                    }
                    &.is-active {
                      background-color: @bg;
                      // color: @acolor;
                      // color: #333;
                      // font-weight: bold;
                    }
                    .fa {
                      margin-right: 5px;
                      padding-bottom: 3px;
                    }
                  }
                }
              }
            }
          }
        }
        .main-aside-small {
          display: none;
          position: relative;
          width: 250px !important;
          padding: 0 10px 10px 10px;
          height: 100%;
          .tac {
            position: fixed;
            width: 230px;
            ul {
              background-color: #fcfcfc;
              border: none;
              .el-submenu {
                margin-bottom: 10px;
                background-color: #fff;
                .el-submenu__title {
                  color: #333;
                  font-size: 14px;
                  font-weight: bold;
                  &:hover {
                    background-color: #afb3b9;
                  }
                  .fa {
                    margin-right: 5px;
                    color: #333;
                  }
                  .el-submenu__icon-arrow {
                    display: none;
                  }
                }
                ul {
                  .el-menu-item {
                    color: #333;
                    font-size: 14px;
                    background-color: #fff;
                    &:hover {
                      background-color: #fff;
                      color: #007ca9;
                    }
                    &.is-active {
                      background-color: #fff;
                      color: #007ca9;
                    }
                    .fa {
                      margin-right: 5px;
                      color: #333;
                      padding-bottom: 3px;
                    }
                  }
                }
              }
            }
          }
        }

        .main-center {
          // padding: 20px 300px 0 40px;
          padding: 20px 100px 0 60px;
          width: 100%;
          height: 100%;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
