<script setup>
import { onMounted } from 'vue';


const props = defineProps(['item', 'dark'])

const className = () => props.dark ? 'border-white text-white' : 'border-dark text-dark'
const svgClassName = () => props.dark ? 'fill-white' : 'fill-dark'

const see_more = () => location.assign('/brands')

</script>

<template>
	<div :class="`my-list-item grid grid-rows-2 items-start justify-items-center
			cursor-pointer overflow-hidden relative
			opacity-0
			xl:rounded-3xl xl:border-[3px] xl:h-[300px] xl:w-64
			lg:rounded-2xl lg:border-[3px] lg:h-[240px] lg:w-60
			md:rounded-xl md:border-[2px] md:h-[200px] md:w-52
			rounded-xl border-[1px] h-[300px] w-60
		` + className()"
		>
		
		<component :class="
			`
			xl:w-32
			lg:w-28
			md:w-20 md:mb-3
			m-6 mb-0 w-32
			`
			"
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
				font-[600]
				text-center
				xl:mx-5
				lg:mx-4
				md:text-xs md:mx-4 md:px-0
				text-xs mx-2 px-3
			">{{ props.item.content }}</p>
			<button class="
				uppercase
				xl:my-3
				lg:my-2
				md:text-[11px] md:my-1
				text-xs my-2
			" @click="see_more">see more</button>
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
.my-list-item {
	border: none;
	border-radius: 11px;
}
</style>