<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Map from './components/Map.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'
import { onMounted, reactive } from 'vue'
import anime from 'animejs'


onMounted(() => {
  if (window.innerWidth >= 768)
    animate()
})

const animate = () => {
  anime({
    targets: '.logo, .link',
		delay: (el, i) => 150 * (i+2),
		scale: [0, 1],
  })
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
    hidden
  ">
    {{ screen.size }}
  </div>
  <Header />
  <Hero />
  <Map />
  <Form />
  <Footer />
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}
</style>
