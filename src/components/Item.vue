<script setup>

const props = defineProps(['item', 'dark'])

const className = () => props.dark ? 'border-white text-white' : 'border-dark text-dark'
const svgClassName = () => props.dark ? 'fill-white' : 'fill-dark'

</script>

<template>
	<div :class="`item grid grid-rows-2 items-start justify-items-center
		rounded-3xl
			md:border-[3px] md:p-6 md:pb-3.5 md:h-[425px] md:w-64
			border-[2px] p-6 pb-3.5 h-[425px] w-60
		` + className()"
	>
		<component :class="`w-40 `+ svgClassName()" :is="props.item.icon"></component>
		<div class="flex flex-col items-center justify-between pt-4 h-full">
			<h3 class="uppercase font-bold">{{ props.item.title }}</h3>
			<p class="
				text-center
				md:text-sm
				text-xs
			">{{ props.item.content.slice(0, 100) }}</p>
			<button class="
				uppercase md:text-sm
				text-xs
			">see more</button>
		</div>
	</div>
</template>