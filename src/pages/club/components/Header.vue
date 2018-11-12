<template>
    <div class="header">
      <div class="wrapper">
        <div class="left">
          <a href="#" class="left-link1">
            <img class="left-img1" src="https://attach.bbs.miui.com/album/201802/22/150231zpandhsdt00janpf.png">
          </a>
          <a href="#" class="left-link2" @mouseenter="handleChangeMouseenter" @mouseout="handleChangeMouseout">
            下载APP
          </a>
          <div class="erweima" ref="ewm">
            <img src="https://static.bbs.miui.com/static/image/miui/base/app_QRCode.png" class="erweima-img">
            <div class="erweima-desc">扫描下载MIUI论坛APP</div>
          </div>
        </div>
        <div class="right">
          <div class="right-item1">
            <a href="#" class="link">登陆</a>
            <span class="line">|</span>
            <a href="#" class="link miui" @mouseenter="handleEnter" @mouseout="handleOut">MIUI官网</a>
            <span class="arrow"></span>
            <span class="switch"></span>
          </div>
          <div class="right-item2">
            <img src="http://static.bbs.miui.com/static/image/miui/base/search_bg.png" class="input">
          </div>
          <div class="right-item3" ref="guanwang">
            <a href="#" class="desc">小米官网</a>
            <a href="#" class="desc">小米官网</a>
            <a href="#" class="desc">小米官网</a>
            <a href="#" class="desc">小米官网</a>
            <a href="#" class="desc">小米官网</a>
            <a href="#" class="desc">小米官网</a>
            <a href="#" class="desc">小米官网</a>
            <a href="#" class="desc">小米官网</a>
            <a href="#" class="desc">小米官网</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ClubHeader",
        methods:{
          handleChangeMouseenter(){
            this.$refs.ewm.style.display="block"
          },
          handleChangeMouseout(){
            this.$refs.ewm.style.display="none"
          },
          handleEnter(){
            this.$refs.guanwang.style.display="block"
          },
          handleOut(){
            this.$refs.guanwang.style.display="none"
          }
        }
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
          background #ffffff
          border: 1px solid #FC7050
          display none
          .erweima-img
            width 158px
            height 158px
          .erweima-desc
            color #FC7050
            font-size 14px
      .right
        position relative
        float right
        width 339px
        margin-top 40px
        text-align right
        .right-item1
          .link
            color #A2A2A2
            padding 0 5px
            font 400 12px/28px microsoft
          .arrow
            display inline-block
            width 14px
            height 7px
            background url("http://static.bbs.miui.com/static/image/miui/base/imghack.png") no-repeat -80px -80px
          .switch
            display inline-block
            width 20px
            height 22px
            background url("http://static.bbs.miui.com/static/image/miui/base/imghack.png") no-repeat -22px 5px
        .right-item2
          .input
            width 339px
            height 30px
        .right-item3
          position absolute
          right 20px
          top 20px
          width 118px
          height 315px
          border-left 1px solid #ccc
          border-right 1px solid #ccc
          border-bottom 1px solid #ccc
          background #ffffff
          display none
          .desc
            display block
            width 118px
            height 17px
            padding 9px 0
            text-align center
            font 12px/17px microsoft
            color #333333
          .desc:hover
            color #FC7050
</style>
