<template>
    <div class="home">
      <home-header></home-header>
      <home-banner></home-banner>
      <home-swiper></home-swiper>
      <home-detail></home-detail>
      <home-footer></home-footer>
    </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeBanner from './components/Banner'
  import HomeSwiper from './components/Swiper'
  import HomeFooter from './components/Footer'
  import HomeDetail from './components/Detail'
    export default {
        name: "Home",
        components:{
          HomeHeader,
          HomeBanner,
          HomeSwiper,
          HomeFooter,
          HomeDetail
        }
    }
</script>

<style scoped>

</style>
