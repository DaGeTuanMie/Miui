<template>
    <div class="arrow" v-if="isShow"></div>
</template>

<script>
    export default {
        name: "ClubArrow",
        data(){
          return{
            isShow:false
          }
        },
      methods:{
        handleScroll(){
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if(scrollTop>1000){
            this.isShow=true
          }else {
            this.isShow=false
          }
        }
      },
      mounted () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style scoped lang="stylus">
  .arrow
    position fixed
    right 100px
    bottom 100px
    width 37px
    height 40px
    background url("http://static.bbs.miui.com/static/image/miui/base/scrolltop.png") no-repeat 0 0
  .arrow:hover
    background url("http://static.bbs.miui.com/static/image/miui/base/scrolltop.png") no-repeat -43px 0
</style>
