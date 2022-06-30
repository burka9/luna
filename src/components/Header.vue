<script setup>
import anime from 'animejs'
import Icon from './Icon.vue'
import Text from './Text.vue'

const links = [
	{ text: 'Home', href: '#' },
	{ text: 'About', href: '#' },
	{ text: 'Our Brands', href: '#' },
	{ text: 'Contact', href: '#' },
]

let showing_burger = false
const toggleBurger = () => {
	showing_burger = !showing_burger
	anime({
		targets: '#burger-menu div:nth-child(1)',
		rotateZ: showing_burger ? [0, 45] : [45, 0],
		translateY: showing_burger ? [0, 4] : [4, 0],
	})
	anime({
		targets: '#burger-menu div:nth-child(2)',
		rotateZ: showing_burger ? [0, -45] : [-45, 0],
		translateY: showing_burger ? [0, -4] : [-4, 0],
		width: showing_burger ? [16, 24] : [24, 16]
	})
	anime({
		targets: '#logo-box',
		translateY: el => {
			let x = el.getBoundingClientRect().height + 10
			return showing_burger ? [0, x] : [x, 0]
		},
	})
	anime({
		targets: '#header .links',
		top: el => {
			let x = document.getElementById('burger-menu').getBoundingClientRect().top
			return showing_burger ? [-16, x] : [x, -16]
		}
	})
}
</script>

<template>
	<div id="header" class="
			bg-transprent flex sm:items-center justify-between absolute z-10 w-full
			flex-col sm:flex-row
			opactiy-0 top-[-15vh]

			2xl:p-36 2xl:px-44
			lg:p-16 lg:px-24
			md:p-12
			sm:p-8
			p-5
		">
		<div class="logo flex items-center justify-between w-full sm:w-auto overflow-hidden">
			<div id="logo-box" class="flex items-center">
				<div class="
					icon
					2xl:w-24 2xl:mx-10
					xl:w-16 xl:mr-8
					lg:w-14 lg:mr-6
					md:w-10 md:mr-4
					sm:w-8 sm:mr-2
					w-7 mr-2
				">
					<Icon />
				</div>
				<div class="
					text
					2xl:w-56
					xl:w-44
					lg:w-32
					md:w-24
					sm:w-20
					w-16
				">
					<Text />
				</div>
			</div>
			<div id="burger-menu" class="flex flex-col sm:hidden items-end justify-center" @click="toggleBurger">
				<div class="bg-dark my-[2px] w-6 h-[2px]"></div>
				<div class="bg-dark my-[2px] w-4 h-[2px]"></div>
			</div>
		</div>

		<div class="
			links uppercase flex
			sm:relative sm:opacity-1 sm:top-0
			absolute -top-4 opactiy-0
		">
			<div class="
				link relative flex flex-col items-center justify-center mx-2
			" v-for="link in links" :key="link.text">
				<a class="
					font-bold text-dark
					2xl:text-4xl 2xl:mx-5
					lg:text-xl lg:mx-3
					md:text-base md:mx-2
					sm:text-sm sm:mx-1
					text-xs mx-0.5
				" :href="link.href">{{ link.text }}</a>
				<div class="hover-line hidden sm:flex transition-all w-0 absolute -bottom-1 left-0 h-[2px] bg-dark"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.text {
	fill: var(--dark);
}

.links .link:hover .hover-line {
	width: 100%;
}
</style>