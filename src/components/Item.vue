<script setup>
import { getCurrentInstance, onMounted } from 'vue';


const props = defineProps(['item', 'dark'])

const className = () => props.dark ? 'border-white text-white' : 'border-dark text-dark'
const svgClassName = () => props.dark ? 'fill-white' : 'fill-dark'

console.log(getCurrentInstance())

const showing = (isVisible, entry) => {
	console.log('showing')
	console.log(isVisible)
	console.log(entry)
}

</script>

<template>
	<div :class="`item grid grid-rows-2 items-start justify-items-center
		rounded-3xl cursor-pointer overflow-hidden
			xl:border-[3px] xl:h-[470px] xl:w-64
			lg:border-[3px] lg:h-[440px] lg:w-60
			md:border-[2px] md:h-[360px] md:w-52
			border-[2px] h-[450px] w-60
		` + className()">
		<component :class="
			`
			xl:w-48
			lg:w-44
			md:w-40
			m-6 mb-0 w-48
			 `
			+ svgClassName()"
		:is="props.item.icon"></component>

		<div class="
			content flex flex-col items-center justify-between h-full
		">
			<h3 class="
				uppercase font-bold text-center
				xl:text-xl xl:mb-3
				lg:text-lg lg:mb-2
				md:mb-0
				text-base mb-1
			">{{ props.item.title }}</h3>
			<p class="
				text-center
				xl:mx-5
				lg:mx-4
				md:text-xs md:mx-4
				text-sm mx-2
			">{{ props.item.content.slice(0, 100) }}</p>
			<button class="
				uppercase
				xl:my-3
				lg:my-2
				md:text-[11px] md:my-1
				text-xs my-2
			">see more</button>
		</div>
	</div>
</template>

<style scoped>
/* .content {
	background-image: linear-gradient(to bottom, transparent 50%, var(--dark) 50%);
	background-size: 100% 200%;
	background-position: 0 0;
	transition: all 50ms ease-in-out;
}
.item:hover .content {
	background-position: 0 100%;
	color: white;
} */
/* .item:hover {
	background: var(--dark);
	color: white;
	box-shadow: 0 0 6px var(--dark);
	transition: all 50ms ease-in-out;
}
.item:hover svg {
	fill: white;
} */
</style>