<script setup>

const items = [
	{ number: 500, plus: true, content: 'employees' },
	{ number: 7, content: 'companies' },
	{ number: 17, content: 'years in the market' },
]

</script>

<template>
	<div id="info" class="
		bg-light flex justify-around items-center h-[75vh]
		px-32
	">

		<div class="flex flex-col items-center" v-for="item in items" :key="item.number">
			<p class="text-dark text-8xl font-bold">{{ item.number }}{{ item.plus ? '+' : '' }}</p>
			<p class="text-lighter uppercase mt-5 tracking-wider">{{ item.content }}</p>
		</div>
	
	</div>
</template>