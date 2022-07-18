<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Who from './components/Who.vue'
import Footer from './components/Footer.vue'
import Info from './components/Info.vue';
import Pic from './components/Pic.vue';
import Feed from './components/Feed.vue';
import You from './components/You.vue';


</script>

<template>
  <div class="
    bg-light
  ">
    <Header />
    <Hero />
  </div>
  <!-- <div class="h-[55vh] bg-light relative -z-20"></div> -->
  <Info />
  <Who />
  <!-- <Pic /> -->
  <Feed />
  <You />
  <Footer />
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
