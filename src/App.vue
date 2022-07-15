<script setup>
import anime from 'animejs'
import Header from './components/Header.vue'
import OurBrands from './components/OurBrands.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
import GridLines from './components/GridLines.vue';
import { onMounted } from 'vue';


onMounted(() => { })

const loadParallax = () => {
  document.querySelectorAll('.scroll').forEach(item => {
    let pos = window.scrollY * item.dataset.rate
    item.style.transform = `translateY(${pos}px)`
  })
}

window.addEventListener('scroll', () => {
  loadParallax()
})

</script>

<template>
  <Header />
  <OurBrands />
  <List class="relative z-0" />
  <Footer />
  <svg id="list-path" class="hidden w-full h-full absolute top-0 left-0 z-10">
    <path d="" />
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

#list-path {
  fill: none;
  stroke: var(--lighter);
  stroke-width: 5;
}
</style>
