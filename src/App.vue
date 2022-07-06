<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Brands from './components/OurBrands.vue'
import List from './components/List.vue'
import Who from './components/Who.vue'
import Values from './components/Values.vue'
import Icons from './components/IconSection.vue'
import Footer from './components/Footer.vue'
import Feed from './components/Feed.vue'
import BackToTop from './components/BackToTop.vue'

</script>

<template>
  <Header />
  <Hero />
  <Brands />
  <List />
  <Who />
  <Values />
  <Icons />
  <Feed />
  <Footer></Footer>
  <BackToTop />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
