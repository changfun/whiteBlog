<template>
<div class='img-show'>
<h2>
    IMG标签引入https图片在安卓和ios不显示
</h2>
    <p>
        引入的src图片地址是https时，在pc端和h5均正常显示，但在手机端均无法显示，并且图片链接在微信里面也无法打开；

将地址复制去浏览器及其他地方（包含微信）均能正常显示；

这是因为在引用链接时,浏览器对地址发起请求加上了refre这个请求头,而有些服务器能根据refre反盗所以引用失败返回403。

解决方法：
加一行代码就行：

    </p>
    <div class="code">&lt;meta name="referrer" content="no-referrer"&gt;</div>
    <br />
    <br />
    <p class="origin">
来源：本文为CSDN博主「芒果君君君呀_」
原文链接：<a href="https://blog.csdn.net/Mangojjx/java/article/details/90479006">https://blog.csdn.net/Mangojjx/java/article/details/90479006</a></p>
</div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.img-show {
p {

    color: @tcolor;
    line-height: 24px;
    &.origin {
        color: @tcolor;
        font-size: 12px;
            text-align: right;
        a {
            color: @acolor;
        }
    }
}


}
</style>