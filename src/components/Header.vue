<script setup>
import anime from 'animejs'
import { reactive, computed } from 'vue';
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
		rotateZ: showing_burger ? [0, 10] : [10, 0],
		translateY: el => {
			let x = el.getBoundingClientRect().height + 10
			return showing_burger ? [0, x] : [x, 0]
		},
	})
	anime({
		targets: '#header .links',
		rotateZ: showing_burger ? [0, 0] : [0, 0],
		top: el => {
			let x = el.getBoundingClientRect().height
			x = -1* (5 + x)
			let y = document.getElementById('burger-menu').getBoundingClientRect().top
			return showing_burger ? [x, y] : [y, x]
		}
	})
}
</script>

<template>
	<div id="header" class="
			bg-transprent flex sm:items-center justify-between absolute z-10 w-screen
			opactiy-0 top-[-15vh]

			2xl:p-28 2xl:px-32
			lg:p-12 lg:px-24
			md:p-8
			sm:flex-row sm:p-6
			flex-col p-5
		">
		
		<div class="
			logo flex items-center justify-between w-full sm:w-auto overflow-hidden
		">
			<div id="logo-box" class="flex items-center">
				<div class="
					icon
					2xl:w-20 2xl:mx-10
					xl:w-12 xl:mr-8
					lg:w-10 lg:mr-6
					md:w-8 md:mr-4
					sm:w-6 sm:mr-2
					w-7 mr-2
				">
					<Icon />
				</div>
				<div class="
				hidden
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
			absolute -top-8 opactiy-0
		">
			<div class="
				link relative flex flex-col items-center justify-center mx-2
			" v-for="link in links" :key="link.text">
				<a class="
					text-dark font-bold
					2xl:text-3xl 2xl:mx-5
					lg:text-[16px] lg:mx-1
					md:text-[12px] md:mx-1
					sm:text-xs sm:mx-0.5
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