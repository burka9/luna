<script setup>
const props = defineProps(['item', 'dark'])

const className = () => props.dark ? 'border-white text-white' : 'border-dark text-dark'
const svgClassName = () => props.dark ? 'fill-white' : 'fill-dark'

</script>

<template>
	<div :class="`
		my-list-item flex items-center pr-6 py-4
		${props.item.last ? '' : 'border-b border-dark/50'}
	`">

		<div class="
			flex items-center justify-center mr-5
		">
			<component class="
				w-32
			" :is="props.item.icon"></component>
		</div>


		<div class="
			text-dark
			content flex flex-col items-start
		">
			<h3 class="font-[800] uppercase tracking-wider text-lg mb-1">{{ props.item.title }}</h3>
			<p class="text-[14px] mb-2">{{ props.item.content }}</p>
			<button class="uppercase text-sm tracking-wide font-[700]">Visit</button>
		</div>
	
	</div>
</template>

<style scoped>
svg {
	fill: var(--dark);
}
</style>