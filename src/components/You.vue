<script setup>
import { onMounted } from 'vue'
import anime from 'animejs'

onMounted(() => {
	if (window.innerWidth <= 768) return
	
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
		md:p-20
		sm:p-12
		p-7
	">
		<h2 class="
			font-bold
			md:text-[4rem]  md:-mb-3
			text-[2.15rem] -mb-1.5
		">it's all about <span class="md:text-[3rem] text-[2.15rem]">YOU!</span></h2>

		<p class="font-[300]">We serve quality on your door</p>

		<a href="/contact" class="
			uppercase bg-dark text-gray-200
			md:mt-12 md:p-1.5 md:px-3.5 md:text-base
			mt-6 p-1 px-2 text-sm
		">Contact Us</a>
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
	background-position-x: 100%;
	/* transition: all ease 500ms; */
	border: 2px solid;
}
a:hover {
	background-position-x: 50%;
	background: transparent;
	color: var(--dark);
}
@media screen and (max-width: 768px) {
	a {
		background-position-x: 100%;
	}
}
</style>