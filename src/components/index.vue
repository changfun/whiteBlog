<template>
  <div class="index">
    <div class="center">
      <!-- <div v-show="isShow=='p1'" class="text" :style="'width:'+num+'px'">
        夏天的风 我永远记得
      </div> -->
      <div class="text" :style="'width:'+num+'px'">
        {{ msg}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
        msg:'夏天的风 我永远记得',
      num: 0,
      timenum:0
    };
  },
  
  created() {

    setInterval(() => {
      if (this.num == 0) {
          if(this.timenum%2==1){
              this.msg="为什么你不在 问山风你会回来"
          }else{
              this.msg="夏天的风 我永远记得"
          }
        this.num = 260;
      } else if (this.num >= 260) {
        this.num = 0;
        this.timenum++
      }
    }, 3000);
  },

};
</script>

<style lang="less">
.index {
  position: relative;
  height: 100%;
  .center {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 400px;
    height: 50px;
   
    .text {
      white-space: nowrap;
      overflow: hidden;
      transition: all 3s ease 0s;
    }
  }
}
</style>
