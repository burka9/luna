<script setup>
import Header from './components/Header.vue'
import OurBrands from './components/OurBrands.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
import GridLines from './components/GridLines.vue';
import { onMounted } from 'vue'
import anime from 'animejs'

onMounted(() => {
  const _tl = anime.timeline({
    duration: 1000,
    easing: 'easeInOutSine',
    direction: 'normal',
  })

  anime({
    targets: '.logo, .link',
		delay: (el, i) => 150 * (i+2),
		scale: [0, 1],
  })

  _tl
    .add({
      targets: '#brands',
      opacity: [0, 1],
      top: ['35vh', 0],
      delay: 200 * 3,
    })
    .add({
      targets: '.the-div',
      bottom: el => ([(el.getBoundingClientRect().height + 25) * -1, '-30%']),
      opacity: [0, 1],
      duration: 1750
    }, 0)
    .add({
      targets: '#list-box',
      opacity: [0, 1],
    }, 1500)

})

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
  background: var(--light);
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
