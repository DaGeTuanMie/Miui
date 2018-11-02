<template>
  <div>
    <newtip-header></newtip-header>
    <newtip-banner></newtip-banner>
    <newtip-detail></newtip-detail>
    <newtip-fans></newtip-fans>
    <newtip-footer></newtip-footer>
  </div>
</template>

<script>
  import NewtipHeader from './components/Header'
  import NewtipBanner from './components/Banner'
  import NewtipDetail from './components/Detail'
  import NewtipFooter from './components/Footer'
  import NewtipFans from './components/Fans'
    export default {
        name: "Newtip",
        components:{
          NewtipHeader,
          NewtipBanner,
          NewtipDetail,
          NewtipFooter,
          NewtipFans
        }
    }
</script>

<style scoped>

</style>
