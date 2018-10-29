<template>
    <div class="footer">
      <div class="wrapper">
        <img src="https://static.bbs.miui.com/static/image/miui/base/footer_title.png" class="img">
        <div class="desc">
          <div class="desc-links">
            <a href="#" class="desc-links-item">MIUI官方网站</a>
            <span class="line">|</span>
            <a href="#" class="desc-links-item">小米旗下网站</a>
            <span class="line">|</span>
            <a href="#" class="desc-links-item">加入小米</a>
            <span class="line">|</span>
            <a href="#" class="desc-links-item">免责声明</a>
            <span class="line">|</span>
            <a href="#" class="desc-links-item">隐私政策</a>
            <span class="line">|</span>
            <a href="#" class="desc-links-item">手机版</a>
          </div>
          <div class="copyright">
            京ICP备10046444号 | 京公网安备11010802020134号 | 京ICP证110507号
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewtipFooter"
    }
</script>

<style scoped lang="stylus">
  .footer
    height 45px
    padding 21px 0 23px
    background #2F2F2F
    .wrapper
      height 100%
      width 960px
      margin 0 auto
      text-align center
      .img
        float left
      .desc
        .desc-links
          color #ffffff
          .desc-links-item
            color #ffffff
        .copyright
          font 12px/22px microsoft
          color #6E6E6E
</style>
