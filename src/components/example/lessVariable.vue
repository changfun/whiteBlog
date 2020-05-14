<template>
  <div class="less-variable">
    <h2>Vue CLI3 配置less全局变量</h2>
    <p>1.如果没有安装less，请先安装less</p>
    <div class="code">npm i less-loader less --save-dev</div>
    <p>2.如果需要定义全局变量，请安装</p>
    <div class="code">npm i style-resources-loader --save-dev</div>
    <p>3.在项目根目录(src同级)创建vue.config.js并配置</p>
    <div class="code jscode">
      <div><span class="code-var">const</span> path = require<span class="code-symbol">(</span>'path'<span class="code-symbol">)</span></div>
      <div><span class="code-var">function</span> resolve <span class="code-symbol">(</span>dir<span class="code-symbol">) {</span></div>
      <div class="space-1"><span class="code-var">return</span> path.join<span class="code-symbol">(</span>__dirname, dir<span class="code-symbol">)</span></div>
      <div class="code-symbol">}</div>
      <div>module.exports = <span class="code-symbol">{</span></div>
      <div class="space-1">pluginOptions: <span class="code-symbol">{</span> <span class="code-notes space-1">//第三方插件配置</span></div>
      <div class="space-2">'style-resources-loader': <span class="code-symbol">{</span></div>
      <div class="space-2">preProcessor: 'less',</div>
      <div class="space-2">patterns:<span class="code-symbol">[</span><span class="code-symbol">(</span>, './src/assets/styles/vars.less'<span class="code-symbol">)]</span><span class="code-notes space-1"> //该地址为你的全局样式地址</span></div>
      <div class="space-2 code-symbol">}</div>
      <div class="space-1 code-symbol">}</div>
      <div class="code-symbol">}</div>
    </div>
    <p>4.此时，可以去页面试一下了</p>

    <div class="code">
     <span class="code-notes"> // vars.less</span>
      <br />@my-bg-color: #f5f5f5;
      <br />@my-theme-color: #F04846;
      <br />
      <br />
      <br /><span class="code-notes">// 页面</span>
      <br />.my-header{
      <br />background: @my-theme-color;
      <br />}
    </div>
    <p>
      遇到的坑
      如果，发现页面引入一直报错，说找不到或者不存在，或者定义无效，那么再去安装一下
    </p>
    <div class="code">npm i vue-cli-plugin-style-resources-loader --save-dev</div>
    <p>其实按道理安装style-resources-loader时，vue-cli-plugin-style-resources-loader应该会一起安装了，不过有时候特殊原因导致vue-cli-plugin-style-resources-loader安装失败，所以会包这个错。安装完重启就可以用了。</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">

</style>
