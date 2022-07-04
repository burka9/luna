<script setup>
import { getCurrentInstance, onMounted } from 'vue';


const props = defineProps(['item', 'dark'])

const className = () => props.dark ? 'border-white text-white' : 'border-dark text-dark'
const svgClassName = () => props.dark ? 'fill-white' : 'fill-dark'

const showing = (isVisible, entry) => {
	console.log('showing')
	console.log(isVisible)
	console.log(entry)
}

</script>

<template>
	<div :class="`item grid grid-rows-2 items-start justify-items-center
		cursor-pointer overflow-hidden
			xl:rounded-3xl xl:border-[3px] xl:h-[380px] xl:w-64
			lg:rounded-2xl lg:border-[3px] lg:h-[350px] lg:w-60
			md:rounded-xl md:border-[2px] md:h-[270px] md:w-52
			rounded-xl border-[1px] h-[300px] w-60
		` + className()"
		v-observe-visibility="showing">
		<component :class="
			`
			xl:w-40
			lg:w-36
			md:w-28 md:mb-3
			m-6 mb-0 w-32
			 `
			+ svgClassName()"
		:is="props.item.icon"></component>

		<div class="
			content flex flex-col items-center justify-between h-full
		">
			<h3 class="
				uppercase font-bold text-center
				xl:text-lg xl:mb-2
				lg:text-base lg:mb-1
				md:text-sm md:mb-0
				text-base mb-1
			">{{ props.item.title }}</h3>
			<p class="
				text-center
				xl:mx-5
				lg:mx-4
				md:text-xs md:mx-4 md:px-0
				text-xs mx-2 px-3
			">{{ props.item.content.slice(0, 75) }}</p>
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

.content:hover svg {
	transform: rotateX(360deg);
}
</style>