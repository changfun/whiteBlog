<template>
  <div class="bg-show">
    <h2>在Vue项目中，添加的本地图片不显示，如何处理</h2>
    <h4>遇到的问题：</h4>
    <p>在vue项目开发过程中，我们常常会在页面中添加本地图片测试。可是当我们在样式中添加了本地图片，编译打包部署到服务器上时，发现图片并不能显示出来，这是为什么呢~~~</p>
    <p>我们一般写的css样式如下：</p>
    <div class="code">background: url("../../assets/logo.png") no-repeat;</div>
    <h5>问题原因：</h5>
    <p>因为在编译打包后，图片的路径解析出现了问题。</p>

    <h5>解决方法：</h5>
    <p>1、在data中的IMG地址加上require()即可,定义如下：</p>
    <div class="code">
      <span class="code-var">export default</span> {
      <br /><span class="code-attribute" :style="{paddingLeft:tabSize+'px'}">name: 'index'</span>,
      <br /><span class="code-attribute" :style="{paddingLeft:tabSize+'px'}">data</span>() {
      <br /><span class="code-attribute" :style="{paddingLeft:tabSize*2+'px'}">return</span> {
      <br /><span class="code-attribute" :style="{paddingLeft:tabSize*3+'px'}">tips:</span> {
      <br /><span class="code-attribute" :style="{paddingLeft:tabSize*4+'px'}">backgroundImage: "url(" +<span class="code-key"> require</span>("../../assets/logo.png") + ")",</span>
      <br /><span class="code-attribute" :style="{paddingLeft:tabSize*4+'px'}">backgroundRepeat: "no-repeat",</span>
      <br /><span class="code-attribute" :style="{paddingLeft:tabSize*4+'px'}">backgroundSize: "50px 50px"</span>
      <br /><span :style="{paddingLeft:tabSize*3+'px'}">}</span>
      <br /><span :style="{paddingLeft:tabSize*2+'px'}">}</span>
      <br /><span :style="{paddingLeft:tabSize+'px'}">}</span>
      <br /><span :style="{paddingLeft:tabSize*0+'px'}">}</span>
    </div>
    <p>2、通过行内样式引入：</p>
    <div class="code">&lt;img class="tips" :style="tips" /&gt;</div>
  </div>
</template>

<script>
export default {
data() {
    return {
        tabSize:40
    }
},
};
</script>

<style>
</style>