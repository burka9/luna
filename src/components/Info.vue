<script setup>
import { onMounted } from 'vue';
import anime from 'animejs'


const items = [
	{ number: 500, addon: '+', content: 'employees' },
	{ number: 7, content: 'companies' },
	{ number: 17, content: 'years in the market' },
]

</script>

<template>
	<div id="info" class="
		bg-light relative flex justify-around items-center
	">

		<div class="bg-lighter absolute z-0 w-full h-1/2 top-1/2"></div>

		<div class="
			bg-lighter shadow-2xl relative z-10 flex flex-wrap items-center justify-around
			2xl:max-w-[1400px]
			xl:p-8 xl:mx-32
			lg:p-5 lg:mx-24
			md:w-[80vw] md:p-5 md:mx-20
			w-full
		">
			<div class="
				item flex flex-col items-center
				md:w-64 md:m-0
				m-4
			" v-for="item in items" :key="item.number">
				<p class="
					title text-gray-200 font-bold
					xl:text-7xl
					lg:text-5xl
					md:text-3xl
					text-2xl
				"><span>{{ item.number }}</span>{{ item.addon }}</p>
				<p class="
					subtitle text-gray-300 font-[600] uppercase
					xl:mt-5
					lg:mt-1 lg:tracking-wider
					md:mt-1 md:tracking-wider md:text-sm
					txet-sm
				">{{ item.content }}</p>
			</div>
		</div>
	
	</div>
</template>