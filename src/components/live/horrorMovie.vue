<template>
  <div class="horror-movie">
    <el-carousel class="container" :interval="2000" type="card" height="800px" trigger="click">
      <el-carousel-item
        v-for="(item,index) in movieData"
        :key="index"
        :style="{backgroundImage:'url('+item.imgSrc+')'}"
      >
        <div class="poster">
          <div class="img-box">
              <!-- <div class="pagenum">{{index+1}}</div> -->
            <img :src="item.imgSrc" alt />
          </div>
        </div>
        <div class="dec">
          <div class="movie-name">
            <h1>{{item.name}}</h1>
            <p>{{item.enName}}</p>
          </div>
          <table border="2" style="border-collapse:collapse" cellspacing="0" cellpadding="6">
            <tr>
              <th>上映日期</th>
              <th>制片国家 / 地区</th>
              <th>类型</th>
              <th>主演</th>
              <th>导演</th>
              <th>片名</th>
            </tr>
            <tr height="380">
              <td>{{item.ReleaseDate}}</td>
              <td>{{item.productionCountries}}</td>
              <td>{{item.catecory}}</td>
              <td>{{item.Genres}}</td>
              <td>{{item.director}}</td>
              <td>{{item.name}}</td>
            </tr>
          </table>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieData: [
        {
          name: "潜伏2",
          enName: "Insidious: Chapter （系列）",
          director: "导演: 温子仁",
          Genres: "帕特里克·威尔森 / 萝丝·拜恩",
          catecory: "恐怖",
          productionCountries: "美国",
          ReleaseDate: "二〇一三年九月十三",
          imgSrc:
            "http://res.youth.cn/img-detail/1daf107bc8afff2e0e366232b7016d63:640:949.jpg"
        },

        {
          name: "解除好友2：暗网 ",
          enName: "Unfriended: Dark Web（系列）",
          director: "斯蒂芬·思科",
          Genres: "科林·伍德尔 / 斯蒂芬妮·诺格拉斯",
          catecory: "恐怖 / 犯罪",
          productionCountries: "美国",
          ReleaseDate: "二〇一八年七月二十",
          imgSrc:
            "http://res.youth.cn/img-detail/a070fb28d126d94bdfc2f8dac0aabf90:640:960.jpg"
        },
        {
          name: "电锯惊魂",
          enName: "Saw （系列）",
          director: "温子仁",
          Genres: "雷·沃纳尔 / 加利·艾尔维斯",
          catecory: "悬疑 / 惊悚 / 恐怖",
          productionCountries: "美国",
          ReleaseDate: "二〇〇四年十月二十九",
          imgSrc:
            "http://res.youth.cn/img-detail/84d18b3a416c2981956d55dd5d94db0a:640:945.jpg"
        },
        {
          name: "闪灵",
          enName: "The Shining",
          director: "斯坦利·库布里克",
          Genres: "杰克·尼科尔森 / 谢莉·杜瓦尔",
          catecory: "剧情 / 悬疑 / 恐怖",
          productionCountries: "英国 / 美国",
          ReleaseDate: "一九八〇年五月二十三",
          imgSrc:
            "http://res.youth.cn/img-detail/ad0975f66f45f5da1d1a51016a4b01c8:640:960.jpg"
        },
        {
          name: "孤儿怨",
          enName: "Orphan",
          director: "佐米·希尔拉",
          Genres: "维拉·法米加 / 彼得·萨斯加德",
          catecory: "悬疑 / 惊悚 / 恐怖",
          productionCountries: "美国 / 加拿大 / 德国 / 法国",
          ReleaseDate: "二〇〇九年七月二十四",
          imgSrc:
            "http://res.youth.cn/img-detail/9f837ab91f13a0a91fa778093b669466:640:952.jpg"
        },
        {
          name: "招魂",
          enName: "The Conjuring（系列）",
          director: "温子仁",
          Genres: "维拉·法米加 / 帕特里克·威尔森",
          catecory: "悬疑 / 惊悚 / 恐怖",
          productionCountries: "美国",
          ReleaseDate: "二〇一三年六月八日",
          imgSrc:
            "http://res.youth.cn/img-detail/42a0848b57c42356c5c56ad26518911e:640:945.jpg"
        },
        {
          name: "寂静岭",
          enName: "Silent Hill（系列）",
          director: "克里斯多夫·甘斯",
          Genres: "拉达·米切尔 / 肖恩·宾 / 劳瑞·侯登",
          catecory: "悬疑 / 恐怖",
          productionCountries: "加拿大 / 法国 / 日本 / 美国",
          ReleaseDate: "二〇〇六年四月二十一日",
          imgSrc:
            "http://res.youth.cn/img-detail/5965188d2ea4e2b2c475c58f5614b491:481:655.jpg"
        },
        {
          name: "死寂",
          enName: "Dead Silence",
          director: "温子仁",
          Genres: "唐尼·沃尔伯格 / 安贝·瓦莱塔 / 瑞恩·柯万腾",
          catecory: "悬疑 / 恐怖",
          productionCountries: "美国",
          ReleaseDate: "二〇〇七年三月十六日",
          imgSrc:
            "http://res.youth.cn/img-detail/ba7f4b731b4983f8f592eec47f5b5998:640:947.jpg"
        },
        {
          name: "死亡录像",
          enName: "[Rec]（系列）",
          director: "豪梅·巴拉格罗 / 帕科·普拉萨",
          Genres: "曼努埃拉·贝拉斯科 / 费兰·特拉萨",
          catecory: "恐怖",
          productionCountries: "西班牙",
          ReleaseDate: "二〇〇七年十一月二十三日",
          imgSrc:
            "http://res.youth.cn/img-detail/7212bf83c65025904c1147eee349bcec:640:900.jpg"
        },
        {
          name: "黑暗侵袭",
          enName: "The Descent（系列）",
          director: "尼尔·马歇尔",
          Genres: "肖娜·麦克唐纳 / 娜塔莉·杰克逊·门多萨",
          catecory: "悬疑 / 恐怖",
          productionCountries: "英国",
          ReleaseDate: "二〇〇五年七月八日",
          imgSrc:
            "http://res.youth.cn/img-detail/01522b974a7541367630ae38827d5dde:400:571.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.container {
    
.el-carousel__item {
  display: flex;
  

  .poster {
    width: 540px;
    .img-box {
      position: relative;
      width: 100%;
      height: 100%;
      img {
          width: 540px;
        height: 100%;
      }
    //   .pagenum{
    //       position: absolute;
    //       top: 20px;
    //       left: 50px;
    //       width: 50px;
    //       height: 50px;
    //       text-align: center;
    //       line-height: 50px;
    //       color: #fff;
    //       font-size: 24px;
    //       border-radius: 25px;
    //       background-color: #e30000;
    //   }
    }
  }
  .dec {
    flex: 1;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.6);
    // box-sizing: border-box;

    .movie-name {
      margin-top: 40px;
      height: 180px;

      h1 {
        color: #999;
        font-size: 30px;
        margin: 16px 10px;
      }
      p {
        padding-left: 2px;
        color: #999;
        font-size: 14px;
      }
    }
    table {
      width: 100%;
      color: #888;
      text-align: center;
      border-color: #333;
      background: url("../../assets/img/binding-dark.png");
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
}
}




</style>