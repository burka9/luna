<script setup>
import Header from './components/Header.vue'
import OurBrands from './components/OurBrands.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
import GridLines from './components/GridLines.vue';
import { onMounted, reactive } from 'vue'
import anime from 'animejs'
import BackToTop from './components/BackToTop.vue';
import Hexagon from './components/Hexagon.vue';

onMounted(() => {
  if (window.innerWidth >= 768)
    animate()
})

const animate = () => {
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
}

const size = {
  '2xl': 1536,
  'xl': 1280,
  'lg': 1024,
  'md': 768,
  'sm': 640,
}
const getSize = () => {
  let type = null
  Object.entries(size).every(size => {
    type = size[1] <= window.innerWidth ? size[0] : null
    return type == null
  })
  return type
}
const screen = reactive({
  size: getSize()
})
window.onresize = () => screen.size = getSize()

</script>

<template>
  <div class="
    fixed z-[99999999] right-5 top-5 px-2 text-white
    2xl:bg-blue-900
    xl:bg-blue-500
    lg:bg-green-900
    md:bg-green-500
    sm:bg-red-900
    bg-red-500
  ">
    {{ screen.size }}
  </div>
  <Hexagon />
  <Header />
  <OurBrands />
  <List />
  <Footer />
  <svg id="list-path" class="w-full h-full absolute top-0 left-0 z-0" v-if="false">
    <path style="fill: none; stroke: blue; stroke-width: 5" d="" />
  </svg>
  <!-- <GridLines /> -->
  <BackToTop />
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
