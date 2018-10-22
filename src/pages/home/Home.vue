<template>
    <div class="home">
      <home-header></home-header>
      <home-banner></home-banner>
    </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeBanner from './components/Banner'
    export default {
        name: "Home",
        components:{
          HomeHeader,
          HomeBanner
        }
    }
</script>

<style scoped>

</style>
