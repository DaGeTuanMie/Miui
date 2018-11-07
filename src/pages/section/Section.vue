<template>
    <div>
      <section-header></section-header>
      <section-banner></section-banner>
      <section-content></section-content>
      <section-model></section-model>
      <section-miui></section-miui>
      <section-final></section-final>
      <section-arrow></section-arrow>
      <section-footer></section-footer>
    </div>
</template>

<script>
  import SectionHeader from './components/Header'
  import SectionBanner from './components/Banner'
  import SectionContent from './components/Content'
  import SectionFooter from './components/Footer'
  import SectionModel from './components/Model'
  import SectionMiui from './components/Miui'
  import SectionFinal from './components/Final'
  import SectionArrow from './components/Arrow'
    export default {
        name: "Section",
        components:{
          SectionHeader,
          SectionBanner,
          SectionFooter,
          SectionContent,
          SectionModel,
          SectionMiui,
          SectionFinal,
          SectionArrow
        }
    }
</script>

<style scoped>

</style>
