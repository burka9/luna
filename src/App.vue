<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Brands from './components/Brands.vue'

</script>

<template>
  <Header />
  <Hero />
  <Brands />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;
}
</style>
