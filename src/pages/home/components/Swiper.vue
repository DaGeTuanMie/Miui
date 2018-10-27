<template>
    <div class="swiper">
      <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" class="content">
          <!-- slides -->
          <swiper-slide class="item"><img src="https://attach.bbs.miui.com/album/201810/22/182915drf5350akd05ufk6.jpg" class="item-img"></swiper-slide>
          <swiper-slide class="item"><img src="https://attach.bbs.miui.com/upload/201810/22/180406amezprqdxbcz8cj8.jpg" class="item-img"></swiper-slide>
          <swiper-slide class="item"><img src="https://attach.bbs.miui.com/album/201810/22/100048wn0n0iniwwsnup19.jpg" class="item-img"></swiper-slide>
          <swiper-slide class="item"><img src="https://attach.bbs.miui.com/album/201810/22/095727k3eqwall3nt3yb9g.jpg" class="item-img"></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
      data(){
        return{
          swiperOption: {
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              hideOnClick:true,
            },
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
  .swiper
    margin-top 50px
    height 350px
    .wrapper
      width 960px
      height 350px
      margin 0 auto
      .content
        width 100%
        height 100%
</style>
