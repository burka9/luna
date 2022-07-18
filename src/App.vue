<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Who from './components/Who.vue'
import Footer from './components/Footer.vue'
import Info from './components/Info.vue';
import Pic from './components/Pic.vue';
import Feed from './components/Feed.vue';
import You from './components/You.vue';
import { onMounted } from 'vue';
import anime from 'animejs'

onMounted(() => {
  const _timeline = anime.timeline({
    duration: 1000,
    easing: 'easeInOutSine',
  })

  anime({
		targets: '.logo, .link',
		delay: (el, i) => 150 * (i+2),
		scale: [0, 1],
	})

  _timeline.
		add({
			targets: '#hero h1',
			backgroundPositionX: ['0%', '100%'],
			translateX: [-30, 0],
      delay: 200 * 5,
		})
    .add({
      targets: '#hero',
      marginBottom: ['50vh', 0],
      complete: () => {
        document.body.style.overflowY = 'auto'
      },
    })
		.add({
			targets: '#hero p',
			opacity: [0, 1],
			translateY: [35, 0],
		}, 1200)
    .add({
			targets: '#info',
			translateY: el => ([el.getBoundingClientRect().height + 50, 0]),
      easing: 'easeOutCirc'
		}, 1600)
    .add({
      targets: '#info .item:nth-child(1) .title span',
      innerText: [0, 500],
      // easing: 'linear',
      duration: 850,
      round: true,
    }, 2500)
    .add({
      targets: '#info .item:nth-child(2) .title span',
      innerText: [0, 7],
      // easing: 'linear',
      duration: 850,
      round: true
    }, 2700)
    .add({
      targets: '#info .item:nth-child(3) .title span',
      innerText: [0, 17],
      // easing: 'linear',
      duration: 850,
      round: true
    }, 2900)
})

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
body {
  overflow-y: hidden;
}
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
