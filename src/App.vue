<template>
  <div id="container" :class="{night:isNight}" v-title data-title="张凡个人网站">
    <el-container class="index-container">
      <el-header class="index-header" style="height:52px">
        <div class="tit">
          <a href="http://zhangfine.top">张凡个人网站</a>
        </div>
        <i @click="mobileMenuShow = !mobileMenuShow" class="iconfont icon-Menu"></i>

        <el-switch
          class="theme"
          @change="changeTheme"
          v-model="isNight"
          active-color="#00a08a"
          inactive-color="#666"
        ></el-switch>
      </el-header>

      <el-container class="index-main">
        <el-aside class="main-aside" v-show="mobileMenuShow">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                router
                default-active="2"
                class="el-menu-vertical-demo"
                :unique-opened="isMenuOpened"
              >
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
                  <el-menu-item-group>
                    <template slot="title">电影</template>
                    <el-menu-item index="horrormovie">
                      <i class="fa fa-file-text-o"></i>恐怖电影TOP10
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group>
                    <template slot="title">杂文</template>
                    <el-menu-item index="websites">
                      <i class="fa fa-file-text-o"></i>Some websites
                    </el-menu-item>
                  </el-menu-item-group>
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
                  <el-menu-item index="bgshow">
                    <i class="fa fa-file-text-o"></i>Vue项目动态添加的图片不显示
                  </el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="fa fa-folder-o fa-lg"></i>
                    <span>SKILLS</span>
                  </template>
                  <el-menu-item index="es6">
                    <i class="fa fa-file-text-o"></i>ES6知识点汇总
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>

        <el-main class="main-center">
          <el-scrollbar style="height:100%">

          <router-view></router-view>
          </el-scrollbar>
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
      //是否深色主题
      isNight: false,
      // 浅色背景颜色
      dayBg: "#f9f9f9",
      // 深色背景颜色
      nightBg: "#232324",
      //当前背景颜色
      varBg: "#f9f9f9",
      //板块背景颜色
      mainBg: "#333333",

      //列表是否只保持一个子菜单的展开
      isMenuOpened: false,
      //当前窗口大小
      screenWidth: document.body.clientWidth,
      mobileMenuShow: true
    };
  },
  methods: {
    changeTheme() {
      if (this.isNight) {
        window.localStorage.setItem("theme", 1);
      } else {
        window.localStorage.setItem("theme", 0);
      }
    }
  },
  created() {
    if (window.localStorage.getItem("theme") == 1) {
      this.isNight = true;
    } else {
      this.isNight = false;
    }
  },

  mounted() {
    //监听窗口大小变化

    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;

      if (this.screenWidth >= 992) {
        this.isMenuOpened = false;
        this.mobileMenuShow = true;
      } else if (this.screenWidth < 992) {
        this.isMenuOpened = true;
        //低于992时导航默认隐藏,但此处992与媒体查询的992存在区别,此处宽度不包含导航条,所以992附件可能出现导航消失但菜单按钮未出现
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

  @media screen and (min-width: 992px) and (max-width: 1200px) {
    body {
      #container {
        .index-container {
          .index-main {
            
            .main-center {
              padding: 0;
              .el-scrollbar {
                padding: 0 40px;
                .el-scrollbar__wrap {
                  margin-right: -57px !important;
                  padding-right: 40px;
                }
              }
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
          .index-header {
            div.tit {
              margin-right: 0;
              text-align: center;
            }
            i.iconfont {
              display: block;
            }
            div.theme {
              display: block;
              left: 30px;
              top: 16px;
            }
          }
          .index-main {
            .main-aside {
              position: fixed;
              //防止导航低于电影海报层级
              z-index: 997;
              padding: 0;
              top: 52px;
              left: 0;
              width: 100% !important;
              .tac {
                position: fixed;
                z-index: 998;
                left: 0;
                width: 100%;
                box-shadow: 0px 1px 8px 2px #999;
              }
            }

            .main-center {
              padding: 0;
              .el-scrollbar {
                padding: 0 40px;
                .el-scrollbar__wrap {
                  margin-right: -57px !important;
                  padding-right: 40px;
                }
              }
            }
          }
        }
      }
      //手机顶部导航样式
      #container.night {
        .index-container {
          .index-main {
            .main-aside {
              .tac {
                box-shadow: 0px 1px 6px 2px #242424;
              }
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
            .theme {
              display: block;
              left: 30px;
              top: 16px;
            }
          }
          .index-main {
            .main-aside {
              position: fixed;
              
              //防止导航低于电影海报层级
              z-index: 997;
              padding: 0;
              top: 52px;
              left: 0;
              width: 100% !important;
              .tac {
                position: fixed;
                // position: absolute;
                z-index: 998;
                left: 0;
                width: 100%;
                // height: auto;
                box-shadow: 0px 1px 8px 2px #999;
                
              }
            }

            .main-center {
              padding: 0;
              .el-scrollbar {
                padding: 0 20px ;
                .el-scrollbar__wrap {
                  margin-right: -37px !important;
                  padding-right: 20px;
                }
              }
            }
          }
        }
      }
      //手机顶部导航样式
      #container.night {
        .index-container {
          .index-main {
            .main-aside {
              .tac {
                box-shadow: 0px 1px 6px 2px #242424;
              }
            }
          }
        }
      }
    }
  }
  #container {
    height: 100%;
    min-height: 100%;
    background-color: @bg;
    .index-container {
      height: 100%;
      .index-header {
        z-index: 999;
        position: fixed;
        width: 100%;
        height: 52px;
        padding: 0;
        background-color: @bg;
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
          top: 0;
          padding: 16px;
          font-size: 18px;
        }
        .theme {
          display: none;
          position: absolute;
          width: 40px;
          height: 20px;
          top: 16px;
          right: 30px;
        }
        &:hover {
          .theme {
            display: block;
          }
        }
      }

      .index-main {
        height: 100%;
        // margin-top: 52px;
        padding-top: 52px;
        box-sizing: border-box;
        background-color: @bg;
        .main-aside {
          // position: relative;
          padding: 0 10px 10px 10px;
          width: 300px;
          // min-height: 224px;
          .tac {
            position: fixed;
            width: 280px;
            min-height: 224px;
            ul {
              border: none;
              // height: auto;
              .el-submenu {
                // background-color: #fff;
                .el-submenu__title {
                  color: @tcolor;
                  font-size: 14px;
                  &:hover {
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

        .main-center {
          padding: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          .el-scrollbar {
            padding: 0 60px ;
            box-sizing: border-box;
            .el-scrollbar__wrap {
              margin-right: -77px !important;
              padding-right: 60px;
              padding-top: 20px;
              
          }
          }
        }
      }
    }
  }

  #container.night {
    background-color: @nightBg;
    .index-container {
      height: 100%;
      .index-header {
        background-color: @nightBg;
        i {
          color: #707070;
        }
      }

      .index-main {
        background-color: @nightBg;
        .main-aside {
          .tac {
            ul {
              .el-submenu {
                background-color: @nightBk;
                .el-submenu__title {
                  &:hover {
                    background-color: #393939;
                  }
                  .fa {
                    color: @tcolor;
                    margin-right: 5px;
                  }
                }
                ul {
                  .el-menu-item-group {
                    .el-menu-item-group__title {
                      color: #666;
                      background-color: @nightBk;
                    }
                  }
                  .el-menu-item {
                    color: @tcolor;
                    background-color: @nightBk;
                    &:hover {
                      background-color: #393939;
                    }
                    &.is-active {
                      background-color: #393939;
                    }
                    .fa {
                      color: @tcolor;
                      margin-right: 5px;
                      padding-bottom: 3px;
                    }
                  }
                }
              }
            }
          }
        }

        .main-center {
          background-color: @nightBk;
        }
      }
    }
  }
  .night {
    h2 {
      color: #bbb;
    }
    h3,
    h4,
    h5 {
      color: #999;
    }
    p {
      color: #999;
    }

    .code {
      color: #999;
      background-color: #211f20;
      &.jscode {
        color: #00a08a;
      }
    }
  }
}
</style>

