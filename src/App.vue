<script setup>
import Header from './components/Header.vue'
import OurBrands from './components/OurBrands.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <Header />
  <OurBrands />
  <List />
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
