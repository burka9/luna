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
	<div id="feed" class="relative flex justify-center">

		<span class="absolute z-0 w-full h-full bg-black opacity-60"></span>
		
		<div class="
			max-w-[1200px] grow
			relative z-10 grid
			xl:m-36
			lg:m-24 lg:gap-x-32
			md:grid-cols-2 md:m-16
			grid-cols-1 gap-3 m-10 my-20
		">
			<h3 class="
				text-transparent font-bold uppercase self-start
				lg:text-5xl lg:tracking-wide lg:leading-snug
				md:text-4xl md:tracking-wide md:text-start md:leading-tight
				text-2xl text-center leading-none
			">
				Our School Feeding Program
			</h3>

			<p class="
				text-gray-300 font-[300] text-justify opacity-0
				lg:text-xl lg:px-12
				md:text-base md:px-8
				text-sm px-4
			">
			We are committed to giving back. Luna leads and positively impacts the community through its sustainable environmental practices and its charitable services supporting disabled children and its school feeding program supports more than 360 needy students.
			</p>
		</div>
	</div>
</template>

<style scoped>
#feed {
	background-image: url('../assets/imgs/feeding.png');
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