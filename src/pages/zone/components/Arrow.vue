<template>
  <div class="content">
    <div class="arrow1" v-if="isShow"></div>
    <div class="arrow2" v-if="isShow"></div>
  </div>
</template>

<script>
  export default {
    name: "ZoneArrow",
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      handleScroll(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>200){
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
  .content
    position fixed
    width 37px
    height 85px
    right 100px
    bottom 100px
  .arrow1
    width 37px
    height 40px
    margin-bottom 5px
    background url("http://static.bbs.miui.com/static/image/miui/base/scrolltop.png") no-repeat 0 0
  .arrow1:hover
    background url("http://static.bbs.miui.com/static/image/miui/base/scrolltop.png") no-repeat -43px 0
  .arrow2
    width 37px
    height 40px
    background url("http://static.bbs.miui.com/static/image/miui/base/scrolltop.png") no-repeat 0 -80px
  .arrow2:hover
    background url("http://static.bbs.miui.com/static/image/miui/base/scrolltop.png") no-repeat -43px -80px
</style>

