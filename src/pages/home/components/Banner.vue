<template>
    <div class="banner">
      <div class="wrapper">
        <a href="#" class="item one">首页</a>
        <a href="#" class="item">新帖</a>
        <a href="#" class="item">版块</a>
        <a href="#" class="item">MIUI专区</a>
        <a href="#" class="item">谈天说地</a>
        <a href="#" class="item">俱乐部</a>
        <a href="#" class="item">极客秀</a>
        <a href="#" class="item">MIUI下载</a>
        <a href="#" class="item">橙色星期五</a>
        <a href="#" class="item">论坛APP</a>
        <a href="#" class="img"></a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeBanner"
    }
</script>

<style scoped lang="stylus">
  .banner
    height 48px
    background #FD6440
    .wrapper
      position relative
      height 100%
      width 960px
      margin-top 50px
      margin-left auto
      margin-right auto
      font-size 0
      line-height 48px
      .item
        display inline-block
        height 48px
        padding 0 16px
        font-size 14px
        color #ffffff
      .one
        background #F75733
      .item:hover
        background #F75733
      .img
        position absolute
        display inline-block
        right 0
        top 12px
        width 13px
        height 12px
        background url("http://static.bbs.miui.com/static/image/miui/base/imghack.png") no-repeat -58px -75px
</style>
