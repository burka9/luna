<script setup>
import Header from './components/Header.vue'
import OurBrands from './components/OurBrands.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
import GridLines from './components/GridLines.vue';

</script>

<template>
  <Header />
  <OurBrands />
  <List />
  <Footer />
  <svg id="list-path" class="w-full h-full absolute top-0 left-0 z-0" v-if="false">
    <path style="fill: none; stroke: blue; stroke-width: 5" d="" />
  </svg>
  <!-- <GridLines /> -->
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
