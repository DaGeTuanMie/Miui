<template>
    <div class="fans">
      <div class="wrapper">
        <div class="title">
          <div class="title-desc">MIUI全球粉丝站</div>
          <a href="javascript:void(0)" class="yuan" @click="handleFansClick">{{msg}}</a>
          <div class="titleLogo" ref="logo">
            <a href="#" class="titleLink one"></a>
            <a href="#" class="titleLink two"></a>
            <a href="#" class="titleLink three"></a>
            <a href="#" class="titleLink four"></a>
            <a href="#" class="titleLink five"></a>
            <a href="#" class="titleLink six"></a>
            <a href="#" class="titleLink seven"></a>
            <a href="#" class="titleLink eight"></a>
            <a href="#" class="titleLink nine"></a>
            <a href="#" class="titleLink ten"></a>
            <a href="#" class="titleLink ele"></a>
            <a href="#" class="titleLink twe"></a>
          </div>
          <div class="titleDesc" ref="desc">
            注：MIUI粉丝站由全球Android爱好者自发创建，其观点和立场不代表MIUI官方
          </div>
        </div>
        <ul class="content" ref="content">
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
          <li class="item"><a href="#" class="item-logo"><span class="logo-img"></span><span class="logo-desc">德国</span></a></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewtipFans",
        data(){
          return{
            msg:'+',
            flag:true
          }
        },
        methods:{
          handleFansClick(){
            if(this.flag){
              this.msg="-"
              this.$refs.logo.style.display='none'
              this.$refs.desc.style.display='block'
              this.$refs.content.style.display='block'
              this.flag=!this.flag
            }else{
              this.msg="+"
              this.$refs.logo.style.display='block'
              this.$refs.desc.style.display='none'
              this.$refs.content.style.display='none'
              this.flag=!this.flag
            }
          }
        }
    }
</script>

<style scoped lang="stylus">
  .fans
    padding-top 16px
    border-top 2px solid #eae9e9
    .wrapper
      width 960px
      color #c3c3c3
      margin 0 auto 16px
      .title
        text-align left
        height 31px
        line-height 31px
        width 100%
        .title-desc
          float left
          color #4c4c4c
          font 500 16px/31px microsoft
        .yuan
          float left
          width 22px
          height 23px
          text-align center
          line-height 23px
          color #4c4c4c
          border 1px solid #4c4c4c
          margin 6px 0 0 4px
          border-radius 11px
        .titleLogo
          float right
          width 795px
          height 42px
          .titleLink
            float left
            margin-top 9px
            height 22px
            line-height 25px
            padding-left 35px
          .one
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -27px
          .two
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -55px
          .three
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -83px
          .four
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -618px
          .five
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -197px
          .six
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -225px
          .seven
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -317px
          .eight
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -344px
          .nine
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -373px
          .ten
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -402px
          .ele
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -495px
          .twe
            background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -527px
        .titleDesc
          float right
          width 427px
          height 31px
          font 400 12px/31px microsoft
          color #909090
          display none
      .content
        width 960px
        height 156px
        display none
        .item
          float left
          width 129px
          height 30px
          margin 7px 0 2px
          .item-logo
            float left
            height 26px
            width 24px
            padding-left 35px
            .logo-img
              display inline-block
              background url("https://static.bbs.miui.com/static/image/miui/base/fansStationRetract.png") no-repeat 0 -27px
            .logo-desc
              display inline-block
              color #909090
              font 400 12px/25px microsoft
</style>
