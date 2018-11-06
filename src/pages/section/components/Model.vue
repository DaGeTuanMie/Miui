<template>
    <div class="model">
      <div class="title">
        <a href="#" class="title-left">机型专区</a>
        <ul class="title-right">
          <li class="item" :class="{'one':isShow1}"><a href="javascript:void(0)" class="item-desc" @click="handleClick1">推荐机型</a></li>
          <li class="item two" :class="{'one':isShow2}"><a href="javascript:void(0)" class="item-desc" @click="handleClick2">小米机型</a></li>
          <li class="item" :class="{'one':isShow3}"><a href="javascript:void(0)" class="item-desc" @click="handleClick3">红米机型</a></li>
        </ul>
      </div>
      <ul class="content1" ref="content1">
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/19/common_801_icon.png?OTtyA3" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
      </ul>
      <ul class="content2" ref="content2">
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/ee/common_763_icon.png?um8ImS" class="item-img">
          <a href="#" class="item-link">小米MIX3</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
      </ul>
      <ul class="content3" ref="content3">
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
        <li class="content-item">
          <img src="https://attach.bbs.miui.com/common/a5/common_737_icon.jpg?rCh187" class="item-img">
          <a href="#" class="item-link">小米MIX2</a>
          <div class="item-desc">
            今日：<span class="orange">435</span>&nbsp;|&nbsp;帖数：9408
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "SectionModel",
        data(){
          return{
            isShow1:true,
            isShow2:false,
            isShow3:false
          }
        },
        methods:{
          handleClick1(){
            this.isShow1=true
            this.isShow2=false
            this.isShow3=false
            this.$refs.content1.style.display="block"
            this.$refs.content2.style.display="none"
            this.$refs.content3.style.display="none"
          },
          handleClick2(){
            this.isShow1=false
            this.isShow2=true
            this.isShow3=false
            this.$refs.content1.style.display="none"
            this.$refs.content2.style.display="block"
            this.$refs.content3.style.display="none"
          },
          handleClick3(){
            this.isShow1=false
            this.isShow2=false
            this.isShow3=true
            this.$refs.content1.style.display="none"
            this.$refs.content2.style.display="none"
            this.$refs.content3.style.display="block"
          }
        }
    }
</script>

<style scoped lang="stylus">
  .model
    width 958px
    height 498px
    margin 10px auto 0
    border 1px solid #ccc
    border-radius 5px
    .title
      width 100%
      height 48px
      padding-left 15px
      .title-left
        font 700 14px/48px microsoft
        color #4c4c4c
      .title-right
        float right
        width 249px
        height 31px
        margin 9px 10px 0
        .item
          float left
          height 29px
          border-radius 5px
          border 1px solid #ccc
          .item-desc
            display block
            height 29px
            color #4c4c4c
            font 12px/29px microsoft
            padding 0 14px
          .item-desc:hover
            color #ffffff
            background #FF5F19
        .one
          .item-desc
            color #ffffff
            background #FF5F19
        .two
          margin 0 5px
    .content1
      width 100%
      height 450px
      border-top 1px solid #ccc
      .content-item
        float left
        padding 24px 0 24px 0
        margin 5px
        width 180px
        height 167px
        text-align center
        .item-img
          cursor pointer
        .item-link
          display block
          margin 10px auto
          width 58px
          height 18px
          padding 2px 10px
          border-radius 5px
          font 400 12px/18px microsoft
          color #8f8f8f
        .item-link:hover
          color #ffffff
          background #FF5F19
        .item-desc
          color #8f8f8f
          font 12px/18px microsoft
          .orange
            color #FF5F19
    .content2
      width 100%
      height 450px
      border-top 1px solid #ccc
      display none
      .content-item
        float left
        padding 24px 0 24px 0
        margin 5px
        width 180px
        height 167px
        text-align center
        .item-img
          cursor pointer
        .item-link
          display block
          margin 10px auto
          width 58px
          height 18px
          padding 2px 10px
          border-radius 5px
          font 400 12px/18px microsoft
          color #8f8f8f
        .item-link:hover
          color #ffffff
          background #FF5F19
        .item-desc
          color #8f8f8f
          font 12px/18px microsoft
          .orange
            color #FF5F19
    .content3
      width 100%
      height 450px
      border-top 1px solid #ccc
      display none
      .content-item
        float left
        padding 24px 0 24px 0
        margin 5px
        width 180px
        height 167px
        text-align center
        .item-img
          cursor pointer
        .item-link
          display block
          margin 10px auto
          width 58px
          height 18px
          padding 2px 10px
          border-radius 5px
          font 400 12px/18px microsoft
          color #8f8f8f
        .item-link:hover
          color #ffffff
          background #FF5F19
        .item-desc
          color #8f8f8f
          font 12px/18px microsoft
          .orange
            color #FF5F19
</style>
