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

import { reactive } from 'vue'

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
