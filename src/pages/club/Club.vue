<template>
    <div>
      <club-header></club-header>
      <club-banner></club-banner>
      <club-content></club-content>
      <club-arrow></club-arrow>
      <club-footer></club-footer>
    </div>
</template>

<script>
    import ClubHeader from './components/Header'
    import ClubBanner from './components/Banner'
    import ClubFooter from './components/Footer'
    import ClubContent from './components/Content'
    import ClubArrow from './components/Arrow'
    export default {
        name: "Club",
        components:{
          ClubHeader,
          ClubBanner,
          ClubFooter,
          ClubContent,
          ClubArrow
        }
    }
</script>

<style scoped>

</style>
