<script setup>
import { onMounted } from 'vue'
import anime from 'animejs'

onMounted(() => {
	let intersection = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry, i) => {
			if (entry.isIntersecting) {
				anime({
					targets: entry.target.children[1].children[0],
					backgroundPositionX: ['0%', '100%'],
					opacity: [0, 1],
					duration: 1000,
					easing: 'easeOutCirc'
				})
				anime({
					targets: entry.target.children[1].children[1],
					opacity: [0, 1],
					translateY: [80, 0],
					duration: 1250,
					easing: 'easeOutCirc',
					delay: 500,
				})
				intersection.unobserve(entry.target)
			}
		})
	}, {
		rootMargin: '0px 0px -200px 0px',
	})

	document.querySelectorAll('#feeding-program').forEach(el => intersection.observe(el))
})

</script>

<template>
	<div id="feeding-program" class="relative">

		<span class="absolute z-0 w-full h-full bg-black opacity-50"></span>
		
		<div class="relative z-10 grid grid-cols-2 gap-x-2 m-32">
			<h3 class="text-4xl text-transparent font-bold uppercase tracking-wide self-start">
				Our School Feeding Program
			</h3>

			<p class="text-gray-300 font-[300] text-xl txt-justify opacity-0">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis ipsum iste debitis. Doloribus a nisi ipsum voluptas laboriosam est beatae.  consectetur adipisicing elit. Fugiat omnis ipsum iste debitis. Doloribus a nisi ipsum voluptas laboriosam est beatae? Inventore esse labore nihil. Facere, numquam vero? Perferendis, recusandae.
			</p>
		</div>
	</div>
</template>

<style scoped>
#feeding-program {
	background-image: url('../assets/imgs/feeding_2.jpeg');
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	/* background-position: top left; */
}
h3 {
	background: linear-gradient(120deg, transparent 0 50%, rgb(209 213 219) 50% 100%);
	background-size: 225% 100%;
	background-clip: text;
}
</style>