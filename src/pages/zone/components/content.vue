<template>
    <div class="content">
      <div class="top">
        <div class="top-img1 one two"></div>
        <div class="top-img2 two"></div>
        <div class="top-img3 one"></div>
        <div class="top-img4"></div>
      </div>
      <div class="bottom">
        <ul class="content1">
          <li class="item">
            <img src="https://attach.bbs.miui.com/common/fa/common_423_icon.png" class="item-img">
            <div class="item-info">
              <div class="info-title">
                <span class="title-desc">开发者交流</span>
                <span class="title-index">69</span>
              </div>
              <div class="info-desc1">零距离与各路大神交流</div>
              <div class="info-desc2">主题：1358 | 帖数：328万</div>
            </div>
          </li>
          <li class="item">
            <img src="https://attach.bbs.miui.com/common/04/common_180_icon.png" class="item-img">
            <div class="item-info">
              <div class="info-title">
                <span class="title-desc">小米云服务</span>
                <span class="title-index">69</span>
              </div>
              <div class="info-desc1">橙色星期五，不见不散</div>
              <div class="info-desc2">主题：1358 | 帖数：328万</div>
            </div>
          </li>
          <li class="item">
            <img src="https://attach.bbs.miui.com/common/c7/common_547_icon.png" class="item-img">
            <div class="item-info">
              <div class="info-title">
                <span class="title-desc">小米金融</span>
                <span class="title-index">69</span>
              </div>
              <div class="info-desc1">橙色星期五，不见不散</div>
              <div class="info-desc2">主题：1358 | 帖数：328万</div>
            </div>
          </li>
          <li class="item">
            <img src="https://attach.bbs.miui.com/common/c4/common_490_icon.png" class="item-img">
            <div class="item-info">
              <div class="info-title">
                <span class="title-desc">多看阅读</span>
                <span class="title-index">69</span>
              </div>
              <div class="info-desc1">橙色星期五，不见不散</div>
              <div class="info-desc2">主题：1358 | 帖数：328万</div>
            </div>
          </li>
          <li class="item">
            <img src="https://attach.bbs.miui.com/common/23/common_625_icon.png" class="item-img">
            <div class="item-info">
              <div class="info-title">
                <span class="title-desc">小米钱包</span>
                <span class="title-index">69</span>
              </div>
              <div class="info-desc1">橙色星期五，不见不散</div>
              <div class="info-desc2">主题：1358 | 帖数：328万</div>
            </div>
          </li>
          <li class="item">
            <img src="https://attach.bbs.miui.com/common/ff/common_575_icon.png" class="item-img">
            <div class="item-info">
              <div class="info-title">
                <span class="title-desc">小米移动</span>
                <span class="title-index">69</span>
              </div>
              <div class="info-desc1">橙色星期五，不见不散</div>
              <div class="info-desc2">主题：1358 | 帖数：328万</div>
            </div>
          </li>
          <li class="item">
            <img src="https://attach.bbs.miui.com/common/33/common_685_icon.png" class="item-img">
            <div class="item-info">
              <div class="info-title">
                <span class="title-desc">小米商城</span>
                <span class="title-index">69</span>
              </div>
              <div class="info-desc1">橙色星期五，不见不散</div>
              <div class="info-desc2">主题：1358 | 帖数：328万</div>
            </div>
          </li>
          <li class="item">
            <img src="https://attach.bbs.miui.com/common/37/common_304_icon.png" class="item-img">
            <div class="item-info">
              <div class="info-title">
                <span class="title-desc">小米助手</span>
                <span class="title-index">69</span>
              </div>
              <div class="info-desc1">橙色星期五，不见不散</div>
              <div class="info-desc2">主题：1358 | 帖数：328万</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ZoneContent"
    }
</script>

<style scoped lang="stylus">
  .content
    width 958px
    height 862px
    border 1px solid #ccc
    border-radius 5px
    padding-bottom 30px
    margin 10px auto 30px
    .top
      width 918px
      height 430px
      padding 0 30px
      .top-img1
        float left
        width 445px
        height 210px
        background url("http://www.miui.com/data/attachment/common/a5/common_37_banner.png?aaa") no-repeat
      .top-img2
        float left
        width 445px
        height 210px
        background url("http://www.miui.com/data/attachment/common/c7/common_16_banner.png") no-repeat
      .top-img3
        float left
        width 445px
        height 210px
        background url("http://www.miui.com/data/attachment/common/a5/common_38_banner.png") no-repeat
      .top-img4
        float left
        width 445px
        height 210px
        background url("http://www.miui.com/data/attachment/common/35/common_399_banner.png") no-repeat
      .one
        margin-right 10px
      .two
        margin-top 30px
        margin-bottom 10px
    .bottom
      width 958px
      /*height 427px*/
      margin-top 50px
      .content1
        display block
        width 918px
        height 333px
        padding 30px 20px 0
        color #444
        margin-bottom 15px
        border-radius 0 0 5px 5px
        .item
          float left
          width 271px
          height 75px
          padding 27px 0 0 32px;
          border-radius 5px
          border 1px solid #fff
          .item-img
            float left
          .item-info
            float right
            width 206px
            height 67px
            .info-title
              width 206px
              height 24px
              .title-desc
                font 400 22px/22px microsoft
                cursor pointer
              .title-index
                display inline-block
                height 13px
                font 9px/13px Arial
                padding 1px 5px
                color #fff
                border-radius 3px
                background #ff5f19

            .info-desc1
              margin-top 7px
              height 15px
              font 400 12px/15px microsoft
              color #999
            .info-desc2
              margin-top 3px
              font 400 12px/18px microsoft
              color #999
        .item:hover
          background #efefef
</style>
