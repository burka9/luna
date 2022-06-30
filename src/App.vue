<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Brands from './components/OurBrands.vue'
import List from './components/List.vue'

</script>

<template>
  <Header />
  <Hero />
  <Brands />
  <List />
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
