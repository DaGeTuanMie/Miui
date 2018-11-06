<template>
    <div class="content">
      <div class="swiper">
        <div class="wrapper">
          <swiper :options="swiperOption" ref="mySwiper" class="content1">
            <!-- slides -->
            <swiper-slide class="item"><img src="https://attach.bbs.miui.com/block/fa/faba1ec58eb232c5db0957321cdfbb0b.jpg" class="item-img"><div class="item-desc">小米8青春版上手：它靠什么打动年轻人？</div></swiper-slide>
            <swiper-slide class="item"><img src="https://attach.bbs.miui.com/block/3f/3ff74eb1f7dac76c1bb28676850e1bc3.jpg" class="item-img"><div class="item-desc">摄影日记326：城市映像——籣州</div></swiper-slide>
            <swiper-slide class="item"><img src="https://attach.bbs.miui.com/block/6d/6d37c2962121a4e6bca1b1db4c975b3f.jpg" class="item-img"><div class="item-desc">小米游戏耳机，双麦克风设计</div></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="middle">
        <dl class="middle-top">
          <dt class="middle-title">
            <a href="#" class="title-content">分屏VS画中画，与全面屏更配</a>
          </dt>
          <dd class="middle-desc">一个屏幕上同时干两件不同的事情，同时聊QQ和微信，或者聊天的同时玩一些小游戏，用户的使用率也是极高。</dd>
        </dl>
        <ul class="middle-footer">
          <li class="footer-content"><a href="#" class="footer-desc1">其他壁纸：</a><a href="#" class="footer-desc2">小米MIX2S敦煌艺术版内置壁纸</a></li>
          <li class="footer-content"><a href="#" class="footer-desc1">手机酷玩：</a><a href="#" class="footer-desc2">微信内测新功能让你的钱包瑟瑟发抖</a></li>
          <li class="footer-content"><a href="#" class="footer-desc1">软件集合：</a><a href="#" class="footer-desc2">快来评估你电池充电和放电状</a></li>
          <li class="footer-content"><a href="#" class="footer-desc1">科技前沿：</a><a href="#" class="footer-desc2">聊一聊新一代神U,高通710 高通850</a></li>
          <li class="footer-content"><a href="#" class="footer-desc1">机型聊聊：</a><a href="#" class="footer-desc2">问答大咖说141：劲爆！小爱同学大升级</a></li>
        </ul>
      </div>
      <div class="recommend">
        <div class="title">热门板块</div>
        <ul class="content">
          <li class="item one"><a href="#" class="desc">小米8青春版</a></li>
          <li class="item two"><a href="#" class="desc">小米8/探索/屏幕指</a></li>
          <li class="item one"><a href="#" class="desc">小米手机6</a></li>
          <li class="item two"><a href="#" class="desc">小米手机8 SE</a></li>
          <li class="item one"><a href="#" class="desc">小米MIX 2S</a></li>
          <li class="item two"><a href="#" class="desc">红米Note 5</a></li>
          <li class="item one"><a href="#" class="desc">小米平板4</a></li>
          <li class="item two"><a href="#" class="desc">新功能讨论</a></li>
          <li class="item lastOne"><a href="#" class="desc">特殊组申请</a></li>
          <li class="item lastTwo"><a href="#" class="desc">小米Max 3</a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SectionContent",
      data(){
        return{
          swiperOption: {
            pagination:{
              el:'.swiper-pagination',
              clickable:true
            },
            loop: true,
            autoplay:true
          }
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      mounted() {
        console.log('this is current swiper instance object', this.swiper)
        this.swiper.slideTo(1,1000, false)
      }
    }
</script>

<style scoped lang="stylus">
  .content
    width 960px
    height 269px
    margin 10px auto 10px
    .swiper
      float left
      width 332px
      height 267px
      .wrapper
        width 332px
        height 267px
        .content1
          width 100%
          height 100%
          border-radius 5px 0 0 5px
          .item
            position relative
            width 100%
            height 100%
            .item-desc
              position absolute
              height 32px
              width 312px
              text-indent 10px
              bottom 0
              color #ffffff
              background #67696b
              opacity 0.5
              font 400 14px/32px microsoft
              padding 0 10px
          .swiper-pagination
            padding-left 130px
          .swiper-pagination-customs-active
            background red
    .middle
      float left
      width 330px
      height 235px
      border-top 1px solid #909090
      border-right 1px solid #909090
      border-bottom 1px solid #909090
      padding 15px 17px 17px 17px
      border-radius 0 5px 5px 0
      .middle-top
        width 330px
        height 87px
        text-align center
        border-bottom 1px dotted #909090
        .title-content
          font 700 20px/30px microsoft
          color #ff5e00
        .middle-desc
          width 330px
          height 36px
          font 400 12px/18px microsoft
          color #909090
          text-align left
          margin-bottom 8px
      .middle-footer
        .footer-content
          height 20px
          margin-top 12px
          margin-bottom 2px
          padding-left 10px
          background url(https://static.bbs.miui.com/static/image/miui/base/hot_li_dotted.png) 0 50% no-repeat;
          .footer-desc1
            font 400 12px/18px microsoft
            color #909090
          .footer-desc1:hover
            color #ff5e00
          .footer-desc2
            font 400 12px/18px microsoft
            color #909090
          .footer-desc2:hover
            color #ff5e00
    .recommend
      float right
      width 250px
      height 267px
      /*padding-top 15px*/
      /*margin-bottom 10px*/
      border-radius 5px
      border-top 1px solid #ccc
      border-left 1px solid #ccc
      border-right 1px solid #ccc
      .title
        height 45px
        font bold 16px/45px microsoft
        color #444
        padding-left 15px
        /*margin-bottom 15px*/
      .content
        height 210px
        width 250px
        margin 0
        .item
          float left
          width 124px
          height 43px
          font 400 14px/42px microsoft
          text-align center
          .desc
            color #666
          .desc:hover
            color #fd6440
        .one
          border-top 1px solid #ccc
          border-right 1px solid #ccc
        .two
          border-top 1px solid #ccc
        .lastOne
          border-top 1px solid #ccc
          border-bottom 1px solid #ccc
          border-right 1px solid #ccc
        .lastTwo
          border-top 1px solid #ccc
          border-bottom 1px solid #ccc
</style>
