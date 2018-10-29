<template>
  <div>
    <newtip-header></newtip-header>
    <newtip-banner></newtip-banner>
    <newtip-detail></newtip-detail>
    <newtip-footer></newtip-footer>
  </div>
</template>

<script>
  import NewtipHeader from './components/Header'
  import NewtipBanner from './components/Banner'
  import NewtipDetail from './components/Detail'
  import NewtipFooter from './components/Footer'
    export default {
        name: "Newtip",
        components:{
          NewtipHeader,
          NewtipBanner,
          NewtipDetail,
          NewtipFooter
        }
    }
</script>

<style scoped>

</style>
