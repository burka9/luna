<script setup>
import { onMounted } from 'vue'
import anime from 'animejs'

onMounted(() => {
	const _tl = anime.timeline({
		easing: 'easeInOutSine',
		duration: 500,
	})

	_tl
		.add({
			targets: '#our-brands h3',
			backgroundPositionY: ['0%', '100%'],
			delay: 500
		})
		.add({
			targets: '#our-brands .spacer',
			width: [0, '100%']
		}, 700)
		.add({
			targets: '#our-brands p',
			delay: (el, i) => 250 * i,
			opacity: [0, 1],
			translateY: [25, 0],
		})
})
</script>

<template>
	<div id="our-brands" class="
		bg-transparent relative flex items-center justify-stretch
	">

			<div class="
				the-div
				bg-light absolute w-full left-0 bottom-0 h-1/4
				z-0
			"></div>

		<div id="brands" class="
			bg-lighter flex flex-col items-center grow relative z-10
			lg:mt-20 lg:mx-32
			md:mt-12 md:mx-24
		">

			<div class="
				flex flex-col items-center h-[50%] overflow-hidden relative z-10
				lg:m-24 lg:mx-40
				md:m-16 md:mx-32
			">

			
				<h3 class="
					text-slate-200 font-bold
					2xl:text-6xl
					lg:text-4xl
					md:text-3xl
					text-xl
					text-transparent
				">Our Brands</h3>

				<div class="spacer bg-slate-200 my-12 w-full h-[2px]"></div>

				<p class="text-slate-200 mb-5">
					Our service is more than a business. From the very beginning of our initiation we had been very clear about where we wanted to stand in the community. “It’s all about you” our motto to guide us through the long journey which made us who we are.
				</p>
				<p class="text-slate-200">
					Luna is a mother company collaboratively including various business units with an identical aim from the very start. Our brand expresses excellence and strength led by powerful women starting from top management, covering up 46% of our entire employee rate.
				</p>
			</div>
		</div>
	</div>
</template>


<style scoped>
h3 {
	background: linear-gradient(180deg, transparent 0% 50%, #efefef 50% 100%);
	background-size: 100% 200%;
	background-position-y: 0%;
	background-repeat: no-repeat;
	background-clip: text;
}
p {
	text-align: justify;
	text-align-last: center;
}
</style>