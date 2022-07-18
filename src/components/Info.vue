<script setup>
import { onMounted } from 'vue';
import anime from 'animejs'


const items = [
	{ number: 500, plus: true, content: 'employees' },
	{ number: 7, content: 'companies' },
	{ number: 17, content: 'years in the market' },
]

</script>

<template>
	<div id="info" class="
		bg-light relative flex justify-around items-center
	">

		<div class="bg-lighter absolute z-0 w-full h-1/2 top-1/2"></div>

		<div class="bg-lighter shadow-2xl relative z-10 flex items-center justify-around w-full p-8 mx-32">
			<div class="item flex flex-col items-center w-60" v-for="item in items" :key="item.number">
				<p class="title text-gray-200 text-7xl font-bold"><span>{{ item.number }}</span>{{ item.plus ? '+' : '' }}</p>
				<p class="subtitle text-gray-300 font-[600] uppercase mt-5 tracking-wider">{{ item.content }}</p>
			</div>
		</div>
	
	</div>
</template>