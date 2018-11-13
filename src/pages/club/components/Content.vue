<template>
  <div class="content">
    <div class="content-wrapper">
      <div class="swiper">
        <div class="wrapper">
          <swiper :options="swiperOption" ref="mySwiper" class="content1">
            <!-- slides -->
            <swiper-slide class="item"><img src="https://attach.bbs.miui.com/block/9c/9cdca4bf9004b54255de263ddba19c51.jpg" class="item-img"><div class="item-desc">【回顾】极客实验室东莞站</div></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="middle">
        <dl class="middle-top">
          <dt class="middle-title">
            <a href="#" class="title-content">MIUI超级讨论季-一起深入聊聊MIUI</a>
          </dt>
          <dd class="middle-desc">MIUI超级讨论季---不管在城市还是校园，参加该主题活动，一起深度聊聊MIUI，同时展望你期待哪些功能加入。</dd>
        </dl>
        <ul class="middle-footer">
          <li class="footer-content"><a href="#" class="footer-desc1">【活动回顾】</a><a href="#" class="footer-desc2">MIUI超级讨论季-贵阳站</a></li>
          <li class="footer-content"><a href="#" class="footer-desc1">【活动回顾】</a><a href="#" class="footer-desc2">MIUI超级讨论季-乌鲁木齐</a></li>
          <li class="footer-content"><a href="#" class="footer-desc1">【活动回顾】</a><a href="#" class="footer-desc2">MIUI超级讨论季-哈理工站</a></li>
          <li class="footer-content"><a href="#" class="footer-desc1">【活动回顾】</a><a href="#" class="footer-desc2">MIUI超级讨论季-郑州升达站</a></li>
          <li class="footer-content"><a href="#" class="footer-desc1">【活动回顾】</a><a href="#" class="footer-desc2">MIUI超级讨论季-河北大学站</a></li>
        </ul>
      </div>
      <div class="right">
        <div class="myClub">我的俱乐部</div>
        <div class="join">
          <div class="join-title">加入属于你的俱乐部</div>
          <div class="join-item">
            <span class="title1">东北地区</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">大连</a></li>
              <li class="item"><a class="item-desc" href="#">朝阳</a></li>
              <li class="item"><a class="item-desc" href="#">哈尔滨</a></li>
              <li class="item"><a class="item-desc" href="#">沈阳</a></li>
              <li class="item"><a class="item-desc" href="#">长春</a></li>
              <li class="item"><a class="item-desc" href="#">娄底</a></li>
              <li class="item"><a class="item-desc" href="#">通化</a></li>
              <li class="item"><a class="item-desc" href="#">葫芦岛</a></li>
              <li class="item"><a class="item-desc" href="#">东北校园</a></li>
              <li class="item"><a class="item-desc" href="#">鞍山</a></li>
              <li class="item"><a class="item-desc" href="#">牡丹江</a></li>
              <li class="item"><a class="item-desc" href="#">佳木斯</a></li>
            </ul>
          </div>
          <div class="join-item">
            <span class="title1">华北地区</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">北京</a></li>
              <li class="item"><a class="item-desc" href="#">呼和浩特</a></li>
              <li class="item"><a class="item-desc" href="#">天津</a></li>
              <li class="item"><a class="item-desc" href="#">石家庄</a></li>
              <li class="item"><a class="item-desc" href="#">张家口</a></li>
              <li class="item"><a class="item-desc" href="#">华北校园</a></li>
              <li class="item"><a class="item-desc" href="#">大同</a></li>
              <li class="item"><a class="item-desc" href="#">太原</a></li>
              <li class="item"><a class="item-desc" href="#">唐山</a></li>
              <li class="item"><a class="item-desc" href="#">衡水</a></li>
              <li class="item"><a class="item-desc" href="#">赤峰</a></li>
              <li class="item"><a class="item-desc" href="#">通辽</a></li>
              <li class="item"><a class="item-desc" href="#">保定</a></li>
              <li class="item"><a class="item-desc" href="#">沧州</a></li>
              <li class="item"><a class="item-desc" href="#">长治</a></li>
              <li class="item"><a class="item-desc" href="#">秦皇岛</a></li>
              <li class="item"><a class="item-desc" href="#">承德</a></li>
              <li class="item"><a class="item-desc" href="#">乌海</a></li>
              <li class="item"><a class="item-desc" href="#">邯郸</a></li>
            </ul>
          </div>
          <div class="join-item">
            <span class="title1">华东地区</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">无锡</a></li>
              <li class="item"><a class="item-desc" href="#">苏州</a></li>
              <li class="item"><a class="item-desc" href="#">青岛</a></li>
              <li class="item"><a class="item-desc" href="#">常州</a></li>
              <li class="item"><a class="item-desc" href="#">上海</a></li>
              <li class="item"><a class="item-desc" href="#">嘉兴</a></li>
              <li class="item"><a class="item-desc" href="#">南京</a></li>
              <li class="item"><a class="item-desc" href="#">华东校园</a></li>
              <li class="item"><a class="item-desc" href="#">烟台</a></li>
              <li class="item"><a class="item-desc" href="#">福州</a></li>
              <li class="item"><a class="item-desc" href="#">杭州</a></li>
              <li class="item"><a class="item-desc" href="#">济南</a></li>
              <li class="item"><a class="item-desc" href="#">厦门</a></li>
              <li class="item"><a class="item-desc" href="#">合肥</a></li>
              <li class="item"><a class="item-desc" href="#">金华</a></li>
              <li class="item"><a class="item-desc" href="#">徐州</a></li>
              <li class="item"><a class="item-desc" href="#">菏泽</a></li>
              <li class="item"><a class="item-desc" href="#">聊城</a></li>
              <li class="item"><a class="item-desc" href="#">泉州</a></li>
              <li class="item"><a class="item-desc" href="#">潍坊</a></li>
              <li class="item"><a class="item-desc" href="#">淄博</a></li>
              <li class="item"><a class="item-desc" href="#">临沂</a></li>
              <li class="item"><a class="item-desc" href="#">滁州</a></li>
              <li class="item"><a class="item-desc" href="#">绍兴</a></li>
              <li class="item"><a class="item-desc" href="#">亳州</a></li>
              <li class="item"><a class="item-desc" href="#">安庆</a></li>
              <li class="item"><a class="item-desc" href="#">盐城</a></li>
              <li class="item"><a class="item-desc" href="#">枣庄</a></li>
            </ul>
          </div>
          <div class="join-item">
            <span class="title1">华中地区</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">武汉</a></li>
              <li class="item"><a class="item-desc" href="#">郑州</a></li>
              <li class="item"><a class="item-desc" href="#">南昌</a></li>
              <li class="item"><a class="item-desc" href="#">洛阳</a></li>
              <li class="item"><a class="item-desc" href="#">长沙</a></li>
              <li class="item"><a class="item-desc" href="#">焦作</a></li>
              <li class="item"><a class="item-desc" href="#">鹤壁</a></li>
              <li class="item"><a class="item-desc" href="#">南阳</a></li>
              <li class="item"><a class="item-desc" href="#">商丘</a></li>
              <li class="item"><a class="item-desc" href="#">华中校园</a></li>
              <li class="item"><a class="item-desc" href="#">仙桃</a></li>
              <li class="item"><a class="item-desc" href="#">安阳</a></li>
              <li class="item"><a class="item-desc" href="#">漯河</a></li>
              <li class="item"><a class="item-desc" href="#">孝感</a></li>
              <li class="item"><a class="item-desc" href="#">湘潭</a></li>
              <li class="item"><a class="item-desc" href="#">新乡</a></li>
            </ul>
          </div>
          <div class="join-item">
            <span class="title1">华南地区</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">深圳</a></li>
              <li class="item"><a class="item-desc" href="#">郑州</a></li>
              <li class="item"><a class="item-desc" href="#">佛山</a></li>
              <li class="item"><a class="item-desc" href="#">东莞</a></li>
              <li class="item"><a class="item-desc" href="#">南宁</a></li>
              <li class="item"><a class="item-desc" href="#">海口</a></li>
              <li class="item"><a class="item-desc" href="#">珠海</a></li>
              <li class="item"><a class="item-desc" href="#">肇庆</a></li>
              <li class="item"><a class="item-desc" href="#">华南校园</a></li>
            </ul>
          </div>
          <div class="join-item">
            <span class="title1">西南地区</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">成都</a></li>
              <li class="item"><a class="item-desc" href="#">重庆</a></li>
              <li class="item"><a class="item-desc" href="#">昆明</a></li>
              <li class="item"><a class="item-desc" href="#">贵阳</a></li>
              <li class="item"><a class="item-desc" href="#">西南校园</a></li>
              <li class="item"><a class="item-desc" href="#">铜仁</a></li>
            </ul>
          </div>
          <div class="join-item">
            <span class="title1">西北地区</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">西安</a></li>
              <li class="item"><a class="item-desc" href="#">兰州</a></li>
              <li class="item"><a class="item-desc" href="#">银川</a></li>
              <li class="item"><a class="item-desc" href="#">乌鲁木齐</a></li>
              <li class="item"><a class="item-desc" href="#">咸阳</a></li>
              <li class="item"><a class="item-desc" href="#">西宁</a></li>
              <li class="item"><a class="item-desc" href="#">固原</a></li>
              <li class="item"><a class="item-desc" href="#">宝鸡</a></li>
              <li class="item"><a class="item-desc" href="#">杨凌</a></li>
              <li class="item"><a class="item-desc" href="#">西北校园</a></li>
            </ul></div>
          <div class="join-item">
            <span class="title">其他地区</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">香港</a></li>
              <li class="item"><a class="item-desc" href="#">澳门</a></li>
              <li class="item"><a class="item-desc" href="#">海外</a></li>
              <li class="item"><a class="item-desc" href="#">台湾</a></li>
            </ul>
          </div>
          <div class="join-item">
            <span class="title1">俱乐部大本营</span>
            <ul class="content1">
              <li class="item"><a class="item-desc" href="#">会客厅</a></li>
              <li class="item"><a class="item-desc" href="#">城市部长工作室</a></li>
              <li class="item"><a class="item-desc" href="#">校园部长工作室</a></li>
              <li class="item"><a class="item-desc" href="#">MIUI学院</a></li>
              <li class="item"><a class="item-desc" href="#">慧眼看天下</a></li>
            </ul>
          </div>
        </div>
        <div class="myClub1">俱乐部部长申请</div>
        <div class="myClub2">俱乐部版规及发帖说明</div>
        <div class="newClub">
          <span class="newClub-title">新开通俱乐部</span>
          <div class="newClub-item">
            佳木斯俱乐部&nbsp;
            <span class="newClub-desc">2018-9-29开通 | 成员：54</span>
          </div>
          <div class="newClub-item">
            烟台俱乐部&nbsp;
            <span class="newClub-desc">2017-8-31开通 | 成员：110</span>
          </div>
          <div class="newClub-item">
            杨凌俱乐部&nbsp;
            <span class="newClub-desc">2017-6-20开通 | 成员：31</span>
          </div>
          <div class="newClub-item">
            新乡俱乐部&nbsp;
            <span class="newClub-desc">2017-5-4开通 | 成员：76</span>
          </div>
        </div>
        <div class="hotClub">
          <span class="hotClub-title">热门俱乐部</span>
          <ul class="hotClub-content">
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">嘉兴</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">苏州</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">无锡</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">南阳</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">天津</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">鹤壁</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">大连</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">佛山</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">会客厅</a></li>
            <li class="hotClub-item"><a class="hotClub-desc" href="javascript:void(0)">深圳</a></li>
          </ul>
        </div>
        <div class="coreClub">
          <span class="coreClub-title">俱乐部积分排行</span>
          <ul class="coreClub-content">
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">俱乐部会客厅</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">深圳俱乐部</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">北京俱乐部</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">武汉俱乐部</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">呼和浩特俱乐部</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">成都俱乐部</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">城市部长工作室</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">校园部长工作室</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">重庆俱乐部</a>
              <span class="coreClub-desc">29761</span>
            </li>
            <li class="coreClub-item">
              <a href="javascript:void(0)" class="coreClub-link">无锡俱乐部</a>
              <span class="coreClub-desc">29761</span>
            </li>
          </ul>
        </div>
      </div>
      <content-review></content-review>
    </div>
  </div>
</template>

<script>
  import ContentReview from './Review'
  export default {
    name: "ClubContent",
    components:{
      ContentReview
    },
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
    /*height 269px*/
    height 3875px
    margin 10px auto 10px
    .content-wrapper
      float left
      width 960px
      height 2000px
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
      .right
        float right
        width 250px
        .myClub
          width 250px
          height 24px
          padding 12px 0
          color #ffffff
          font 700 16px/24px microsoft
          text-align center
          border-radius 5px
          background #FF6D4A
        .join
          width 224px
          height 1040px
          margin-top 5px
          padding 12px
          border 1px solid #e6e6e6
          border-radius 5px
          .join-title
            font 700 16px/24px microsoft
          .join-item
            float left
            margin-top 10px
            border-bottom 1px dotted #cdcdcd
            padding-bottom 10px
            .title1
              font 400 12px/18px microsoft
            .content1
              margin-top 10px
              .item
                float left
                margin-right 12px
                margin-top 5px
                .item-desc
                  font 400 12px/18px miscrosoft
                  color #333
                .item-desc:hover
                  color #ff6f3d
        .myClub1
          width 250px
          height 24px
          padding 12px 0
          margin-top 10px
          color #ffffff
          font 700 16px/24px microsoft
          text-align center
          border-radius 5px
          background #2caafa
        .myClub2
          width 250px
          height 24px
          padding 12px 0
          margin-top 10px
          color #ffffff
          font 700 16px/24px microsoft
          text-align center
          border-radius 5px
          background #71c041
        .newClub
          margin-top 10px
          width 224px
          height 176px
          padding 12px
          border 1px solid #e6e6e6
          border-radius 5px
          .newClub-title
            font 700 16px/24px microsoft
          .newClub-item
            margin-top 15px
            font 400 12px/18px microsoft
            .newClub-desc
              color #909090
        .hotClub
          margin-top 10px
          width 224px
          height 86px
          padding 12px
          border 1px solid #e6e6e6
          border-radius 5px
          .hotClub-title
            font 700 16px/24px microsoft
          .hotClub-content
            margin-top 10px
            .hotClub-item
              float left
              margin-right 12px
              margin-top 5px
              .hotClub-desc
                color #000000
                font 400 12px/18px microsoft
              .hotClub-desc:hover
                color #FF6D4A
        .coreClub
          width 224px
          height 386px
          padding 12px
          margin-top 10px
          border 1px solid #e6e6e6
          border-radius 5px
          .coreClub-title
            font 700 16px/24px microsoft
          .coreClub-content
            line-height 21px
            background url("http://static.bbs.miui.com/static/image/miui/base/sortnum2.png") no-repeat 0 3px
            .coreClub-item
              margin-top 15px
              padding-left 25px
              .coreClub-link
                font 400 12px/21px microsoft
                color #8f8f8f
              .coreClub-link:hover
                color #FF6D4A
              .coreClub-desc
                float right
                font 400 12px/21px microsoft
                color #8f8f8f
</style>
