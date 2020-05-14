<template>
<div class='websites'>
    <div class="site-item" v-for="(item, index) in sitesData" :key="index">
            <div class="site-icon">
                <a :href="item.http" target="_blank">
                    <img :src="item.icon" alt="">
                </a>
            </div>
            <div class="site-dec">
                <div class="tit">{{item.name}}</div>
                <div class="dec"><span class="label" v-for="(it, index) in item.label" :key="index">{{it}}</span></div>
            </div>
    </div>
    <div class="site-item none" ></div>
    <div class="site-item none" ></div>
    <div class="site-item none" ></div>
    <div class="site-item none" ></div>
</div>
</template>

<script>
export default {
    data() {
        return {
              sitesData:[
                {name:"Thenounproject",icon:require("../../assets/img/site1.png"),label:['设计','ICON','开发'],http:"https://thenounproject.com/"},
                {name:"AD110",icon:require("../../assets/img/ad110.png"),label:['设计','艺术','图书'],http:"https://www.ad110.com/"},
                {name:"InstantLogoSearch",icon:require("../../assets/img/instant.png"),label:['设计','LOGO'],http:"http://www.instantlogosearch.com/"},
                {name:"theminimalists",icon:require("../../assets/img/man.jpg"),label:['设计','极简','博客'],http:"https://www.theminimalists.com/"},
                {name:"logodesignlove",icon:require("../../assets/img/love.png"),label:['设计','极简','博客'],http:"https://www.logodesignlove.com/"},
                {name:"pixabay",icon:require("../../assets/img/pixabay.png"),label:['设计','极简','壁纸'],http:"https://pixabay.com/"},
                // {name:"APPINN",icon:require("../../assets/img/appinn.png"),label:['资源','APP','开发'],http:"https://www.appinn.com/"},
                // {name:"CODELF",icon:require("../../assets/img/codelf.png"),label:['开发'],http:"https://unbug.github.io/codelf/"},
                // {name:"EMOJI",icon:require("../../assets/img/emoji.png"),label:['开发','资源'],http:"https://emojipedia.org/"},
            ]
        }
    },
}
</script>

<style lang="less">
.websites {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .site-item {
        margin: 10px;
        width: 236px;
        height: 244px;
        background-color: #fff;
       &.none {
           opacity: 0;
       }
            .site-icon {
                width: 100%;
                height: 140px;
                // background: url('../../assets/img/coffee.png') no-repeat;
                background-color: #f2f2f2;
                // background-size: auto 120px ;
                // background-position: center center;
                border: 1px solid #eee;
                border-bottom: none;
                border-radius: 3px 3px 0 0;
                box-sizing: border-box;
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    img {
                        margin-top: 10px;
                        height: 120px;
                    }
                }
                
            }
            .site-dec {
                padding: 10px 6px;
                width: 100%;
                height: 104px;
                color: #000;
                border: 1px solid #eee;
                border-radius: 0 0 3px 3px;
                box-sizing: border-box;
                .tit {
                    margin: 10px 0 16px;
                    font-weight: bold;
                }
                .dec {
                    .label {
                        margin: 0 5px;
                        padding: 4px 10px;
                        color: #808080;
                        font-size: 12px;
                        border-radius: 5px;
                        background-color: #f2f2f2;
                    }
                }
            }
        
    }
}
</style>