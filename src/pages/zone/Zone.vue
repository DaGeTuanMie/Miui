<template>
  <div>
    <zone-header></zone-header>
    <zone-banner></zone-banner>
    <zone-content></zone-content>
    <zone-arrow></zone-arrow>
    <zone-footer></zone-footer>
  </div>
</template>

<script>
    import ZoneHeader from './components/Header'
    import ZoneBanner from './components/Banner'
    import ZoneFooter from './components/Footer'
    import ZoneContent from './components/Content'
    import ZoneArrow from './components/Arrow'
    export default {
        name: "Zone",
        components:{
          ZoneHeader,
          ZoneBanner,
          ZoneFooter,
          ZoneContent,
          ZoneArrow
        }
    }
</script>

<style scoped>

</style>
