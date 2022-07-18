<script setup>
import { onMounted } from 'vue'
import anime from 'animejs'

onMounted(() => {
	let title = new IntersectionObserver(([entry], observer) => {
		if (entry.isIntersecting) {
			anime({
				targets: entry.target,
				fontSize: ['3rem', '4rem'],
			})
			title.unobserve(entry.target)
		}
	}, {
		rootMargin: '0px 0px -125px 0px'
	})

	let anchor = new IntersectionObserver(([entry], observer) => {
		if (entry.isIntersecting) {
			anime({
				targets: entry.target,
				backgroundPositionX: ['0%', '100%'],
				easing: 'spring(1, 80, 10, 0)',
				duration: 1000,
			})
			anchor.unobserve(entry.target)
		}
	}, {
		rootMargin: '0px 0px -125px 0px'
	})

	title.observe(document.querySelector('#you span'))
	anchor.observe(document.querySelector('#you a'))
})

</script>

<template>
	<div id="you" class="
		flex flex-col items-center justify-center
		text-dark
		p-20
	">
		<h2 class="
			text-[4rem] font-bold -mb-3
		">it's all about <span class="text-[3rem]">YOU!</span></h2>

		<p class="font-[300]">Our service is more than a business.</p>

		<a href="/contact" class="mt-12 uppercase bg-dark text-gray-200 p-1.5 px-3.5">Contact Us</a>
	</div>
</template>

<style scoped>
#you {
	background-image: url(https://n.foxdsgn.com/custo/wp-content/uploads/2020/02/contact_bg.png);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: auto;
}
h2 {
	font-variant: small-caps;
}
a {
	background: linear-gradient(120deg, transparent 0% 50%, var(--dark) 50% 100%);
	background-size: 225% 100%;
	background-position-x: 0%;
}
</style>