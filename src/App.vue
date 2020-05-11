<template>
  <div id="container" v-title data-title="张凡个人网站">
    <el-container class="index-container">
      <el-header class="index-header" style="height:52px">
        <div class="tit">
          <a href="http://zhangfine.top">张凡个人网站</a>
        </div>
        <i @click="mobileMenuShow = !mobileMenuShow" class="iconfont icon-Menu"></i>
      </el-header>
   
      <el-container class="index-main">
        <el-aside class="main-aside" v-show="mobileMenuShow">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu router default-active="2" class="el-menu-vertical-demo" :unique-opened="isMenuOpened">
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
      //列表是否只保持一个子菜单的展开
      isMenuOpened:false,
      //当前窗口大小
      screenWidth:document.body.clientWidth,
      mobileMenuShow: true
    };
  },
  mounted() {

  //监听窗口大小变化

  window.onresize = () => {

   this.screenWidth = document.body.clientWidth;

   if (this.screenWidth > 992) {
     this.isMenuOpened=false
     this.mobileMenuShow = true;
   }else if (this.screenWidth < 992)  {
     this.isMenuOpened=true
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
              padding: 20px 40px 0;
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
          }
          .index-main {
            
            .main-aside {
              position: absolute;
              z-index: 999;
              top: 52px;
              left: 0;
              width: 100% !important;
              .tac {
                width: 100%;
              }
            }
           
            .main-center {
              padding: 20px 40px 0;
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
              position: absolute;
              z-index: 999;
              top: 52px;
              left: 0;
              width: 100% !important;
              .tac {
                width: 100%;
              }
            }

            .main-center {
              padding:20px 20px 0;
              
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
        z-index: 2;
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
      }
     
      .index-main {
        margin-top: 52px;
        background-color: @bg;
        .main-aside {
          position: relative;
          padding: 0 10px 10px 10px;
          width: 300px;
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
        

        .main-center {
          padding: 20px 60px 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
        }
      }
    }
  }
}
</style>

