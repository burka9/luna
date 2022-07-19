<script setup>
import anime from 'animejs'
import { reactive, computed, onMounted } from 'vue';
import Icon from './Icon.vue'
import Text from './Text.vue'


const links = [
	{ text: 'Home', href: '/' },
	{ text: 'About', href: '/about' },
	{ text: 'Our Brands', href: '/brands', active: true },
	{ text: 'Contact', href: '/contact' },
]

const goToHome = () => document.location.assign('/')

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

onMounted(() => {
	// anime({
	// 	targets: '#header',
	// 	top: el => ([el.getBoundingClientRect().height * -1, 0]),
	// 	duration: 1000,
	// 	easing: 'easeOutSine'
	// })
})

</script>

<template>
	<div id="header" class="
			bg-light flex sm:items-center justify-between relative z-10 w-screen
			opactiy-0

			2xl:p-28 2xl:px-32
			lg:p-12 lg:px-24
			md:p-8
			sm:flex-row sm:p-6
			flex-col p-5
		">
		
		<div class="
			logo flex items-center justify-between w-full sm:w-auto overflow-hidden cursor-pointer
		" title="Luna Group" @click="goToHome">
			<div id="logo-box" class="flex items-center">
				<div class="
					icon
					2xl:w-20 2xl:mr-7
					xl:w-12 xl:mr-3
					lg:w-10 lg:mr-2
					md:w-8 md:mr-1
					sm:w-6 sm:mr-1
					w-7 mr-1
				">
					<Icon colorful />
				</div>
				<div class="
					text
					2xl:w-32
					xl:w-24
					lg:w-16
					md:w-8
					sm:w-6
					w-12
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
			<div :class="`
				link relative flex flex-col items-center justify-center mx-2
				${link.active ? 'text-dark' : ''}
			`" v-for="link in links" :key="link.text">
				<a :class="`
					text-dark font-bold
					2xl:text-3xl 2xl:mx-5
					lg:text-[16px] lg:mx-1
					md:text-[12px] md:mx-1
					sm:text-xs sm:mx-0.5
					text-xs mx-0.5
				`" :href="link.href">{{ link.text }}</a>
				<div :class="`
					hover-line hidden sm:flex transition-all absolute -bottom-1 left-0 h-[2px] bg-dark
					${link.active ? 'w-full' : 'w-0'}
				`"></div>
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