<template>
    <div class="detail">
      <div class="wrapper">
        <div class="left">
          <div class="title">
            <span class="desc1">每日语录：</span>
            <a href="#" class="title-img1"></a>
            <a href="#" class="desc2">心之所向，素履以往；生如逆旅，一苇以航。——七堇年</a>
            <span class="desc3">分享</span>
            <a href="#" class="title-img2"></a>
            <a href="#" class="title-img3"></a>
            <a href="#" class="title-img4"></a>
          </div>
          <ul class="content">
            <li class="item">
              <div class="item1"><img src="https://avatar.bbs.miui.com/data/avatar/000/00/00/08_avatar_small.jpg?10001" class="item1-img"></div>
              <div class="item2">
                <img src="https://static.bbs.miui.com/static/image/miui/base/pin_3.gif" class="item2-img1">
                <a href="#" class="item2-desc1">[产品发布]</a>
                <a href="#" class="item2-desc2">【2018年10月26日】MIUI 第392周发布公告及更新日志</a>
              </div>
              <div class="item3"></div>
            </li>
          </ul>
        </div>
        <div class="right"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewtipDetail"
    }
</script>

<style scoped lang="stylus">
  .detail
    margin-top 20px
    height 2580px
    .wrapper
      height 100%
      width 960px
      margin 0 auto
      .title
        position relative
        width 698px
        height 43px
        line-height 43px
        border-radius 5px
        margin-bottom 10px
        border 1px solid #ccc
        .desc1
          padding-left 10px
          width 70px
          height 43px
          font 400 12px/43px microsoft
          color #4d4d4d
        .title-img1
          display inline-block
          position absolute
          left 65px
          top 10px
          height 22px
          width 22px
          background url("https://static.bbs.miui.com/static/image/miui/base/imghack.png") no-repeat 0 -48px
        .desc2
          display inline-block
          position absolute
          left 90px
          top 0px
          width 302px
          height 43px
          font 12px/43px microsoft
          color #4d4d4d
        .desc2:hover
          color #fd6440
        .desc3
          position absolute
          right 80px
          top 0
          width 24px
          height 43px
          font 400 12px/43px microsoft
          color #4d4d4d
        .title-img2
          display inline-block
          position absolute
          right 52px
          top 15px
          width 16px
          height 16px
          background url("https://static.bbs.miui.com/static/image/miui/base/imghack.png") no-repeat 0 -22px
        .title-img3
          display inline-block
          position absolute
          right 31px
          top 15px
          width 16px
          height 16px
          background url("https://static.bbs.miui.com/static/image/miui/base/imghack.png") no-repeat -21px -22px
        .title-img4
          display inline-block
          position absolute
          right 10px
          top 15px
          width 16px
          height 16px
          background url("https://static.bbs.miui.com/static/image/miui/base/imghack.png") no-repeat -42px -22px
      .content
        width 678px
        height 2439px
        padding 0 10px
        border-radius 5px
        border: 1px solid #ccc
        .item
          padding 13px 8px
          border-radius 5px
          border-bottom 1px solid black
          background red
</style>
