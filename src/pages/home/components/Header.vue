<template>
    <div class="header">
      <div class="wrapper">
        <div class="left">
          <a href="#" class="left-link1">
            <img class="left-img1" src="https://attach.bbs.miui.com/album/201802/22/150231zpandhsdt00janpf.png">
          </a>
          <a href="#" class="left-link2">
            下载APP
          </a>
          <div class="erweima">
            <img src="https://static.bbs.miui.com/static/image/miui/base/app_QRCode.png" class="erweima-img">
            <div class="erweima-desc">扫描下载MIUI论坛APP</div>
          </div>
        </div>
        <div class="right">
          <div class="right-item1">
            <a href="#" class="link"></a>
            <span class="line">|</span>
            <a href="#" class="link"></a>
            <a href="#" class="img1"></a>
            <a href="#" class="img2"></a>
          </div>
          <div class="right-item2"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped lang="stylus">
  .header
    height 100px
    .wrapper
      position relative
      height 100px
      width 960px
      margin 0 auto
      .left
        position absolute
        float left
        height 100px
        width 276px
        text-align center
        .left-link1
          display inline-block
          float left
          height 100%
          width 148px
        .left-link2
          display block
          margin-top 40px
          float right
          width 100px
          height 21px
          font 12px/21px microsoft
          text-align center
          color #FC7050
          background url("https://static.bbs.miui.com/static/image/miui/base/QRCode_tg.png") no-repeat
        .erweima
          position absolute
          width 158px
          height 178px
          padding 20px
          left 110px
          top 80px
          border: 1px solid #FC7050
          .erweima-img
            width 158px
            height 158px
          .erweima-desc
            color #FC7050
            font-size 14px
</style>
