<script setup>
import { onMounted } from 'vue'
import anime from 'animejs'

onMounted(() => {
	anime({
		targets: '#shade',
		backgroundPositionY: ['75%', '-200%'],
		easing: 'easeInOutSine',
		duration: 2500,
	})
})
</script>

<template>
	<div id="our-brands" class="
		bg-light relative flex items-center justify-stretch z-10
	">

			<div class="
				the-div
				absolute w-full left-0 -bottom-[30%] h-[70%]
				z-0
			"></div>

		<div id="brands" class="
			flex flex-col items-center grow relative
			lg:mt-16 lg:mx-32
			md:mt-8 md:mx-24
		">

			<div class="
				flex flex-col items-center h-[50%] overflow-hidden relative z-10
				lg:m-24 lg:mx-40
				md:m-16 md:mx-32
			">

				<div id="shade" class="hidden absolute w-full h-full"></div>
			
				<h3 class="
					text-slate-200 font-bold
					2xl:text-6xl
					lg:text-4xl
					md:text-3xl
					text-xl
				">Our Brands</h3>

				<div class="bg-slate-200 my-12 w-full h-[2px]"></div>

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
#brands {
	background: linear-gradient(180deg, var(--lighter) 75%, transparent);
}
.the-div {
	background: linear-gradient(180deg, var(--dark), var(--light));
}
p {
	text-align: justify;
	text-align-last: center;
}
#shade {
	background: linear-gradient(0deg, var(--lighter) 75%, transparent);
	background-size: 100% 200%;
	background-position-y: 50%;
	background-repeat: no-repeat;
}
</style>