<template>
    <div>
      <section-header></section-header>
      <section-banner></section-banner>
      <section-content></section-content>
      <section-model></section-model>
      <section-footer></section-footer>
    </div>
</template>

<script>
  import SectionHeader from './components/Header'
  import SectionBanner from './components/Banner'
  import SectionContent from './components/Content'
  import SectionFooter from './components/Footer'
  import SectionModel from './components/Model'
    export default {
        name: "Section",
        components:{
          SectionHeader,
          SectionBanner,
          SectionFooter,
          SectionContent,
          SectionModel
        }
    }
</script>

<style scoped>

</style>
