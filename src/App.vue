<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Who from './components/Who.vue'
import Footer from './components/Footer.vue'
import Info from './components/Info.vue';
import Pic from './components/Pic.vue';
import Feed from './components/Feed.vue';


</script>

<template>
  <Header />
  <Hero />
  <Who />
  <Info />
  <Pic />
  <Feed />
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
