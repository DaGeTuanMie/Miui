<template>
    <div>
      <club-header></club-header>
      <club-banner></club-banner>
      <club-content></club-content>
      <club-footer></club-footer>
    </div>
</template>

<script>
    import ClubHeader from './components/Header'
    import ClubBanner from './components/Banner'
    import ClubFooter from './components/Footer'
    import ClubContent from './components/Content'
    export default {
        name: "Club",
        components:{
          ClubHeader,
          ClubBanner,
          ClubFooter,
          ClubContent
        }
    }
</script>

<style scoped>

</style>
