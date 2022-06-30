<script setup>
import Icon from './Icon.vue'
import Text from './Text.vue'

const links = [
	{ text: 'Home', href: '#' },
	{ text: 'About', href: '#' },
	{ text: 'Our Brands', href: '#' },
	{ text: 'Contact', href: '#' },
]
</script>

<template>
	<div id="header" class="bg-transprent flex items-center justify-between p-12 px-24 absolute z-10 w-full">
		<div class="logo flex items-center">
			<div class="icon w-12 mx-4">
				<Icon />
			</div>
			<div class="text w-28">
				<Text />
			</div>
		</div>

		<div class="links uppercase flex">
			<div class="link relative flex flex-col items-center justify-center mx-2" v-for="link in links" :key="link.text">
				<a class="font-bold text-theme-dark mx-2" :href="link.href">{{ link.text }}</a>
				<div class="hover-line transition-all w-0 absolute -bottom-1 left-0 h-[2px] bg-theme-dark"></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
#header {
	top: -15vh;
}
.text {
	fill: var(--theme-dark);
}
.links .link:hover .hover-line {
	width: 100%;
}
</style>