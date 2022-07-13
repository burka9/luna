<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import Map from './components/Map.vue'
import Form from './components/Form.vue'
import Footer from './components/Footer.vue'

</script>

<template>
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
