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

	document.querySelectorAll('#feed').forEach(el => intersection.observe(el))
})

</script>

<template>
	<div id="feed" class="relative">

		<span class="absolute z-0 w-full h-full bg-black opacity-60"></span>
		
		<div class="
			relative z-10 grid
			xl:m-32
			lg:m-20
			md:grid-cols-2 md:m-12
			grid-cols-1 gap-3 m-10 my-16
		">
			<h3 class="
				text-transparent font-bold uppercase self-start
				lg:text-4xl lg:tracking-wide
				md:text-3xl md:tracking-wide md:text-start
				text-2xl text-center
			">
				Our School Feeding Program
			</h3>

			<p class="
				text-gray-300 font-[300] text-justify opacity-0
				lg:text-xl
				md:text-base
				text-sm
			">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis ipsum iste debitis. Doloribus a nisi ipsum voluptas laboriosam est beatae.  consectetur adipisicing elit. Fugiat omnis ipsum iste debitis. Doloribus a nisi ipsum voluptas laboriosam est beatae? Inventore esse labore nihil. Facere, numquam vero? Perferendis, recusandae.
			</p>
		</div>
	</div>
</template>

<style scoped>
#feed {
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