<script setup>

const contact = [
	{
		title: 'Our address',
		children: ['Bole, Addis Ababa Ethiopia.'],
	},
	{
		title: 'Phone',
		children: [
			'+251 911 34 56 78 90',
			'+251 911 34 56 78 90',
			'+251 911 34 56 78 90',
		]
	},
	{
		title: 'Email',
		children: [
			'info@lunagroup.com'
		]
	}
]

</script>

<template>
	<div id="form" class="
		bg-light grid
		lg:gap-x-32 lg:p-14 lg:px-32 lg:pt-20
		md:grid-cols-2 md:gap-x-20 md:p-10 md:px-20 md:pt-12
		gap-x-24 p-7 px-12 pt-8
	">
	
			<div class="form flex flex-col uppercase order-1 md:order-0">

				<input type="text" placeholder="Your Name">
				<input type="email" placeholder="Email">
				<textarea placeholder="Your message"></textarea>
				<button>Send</button>
				
			</div>

			<div class="
				contact flex flex-col text-dark text-sm
				lg:pr-10 lg:mt-1.5
				md:pr-7 md:mt-1 md:order-1 md:mb-0
				order-0 mb-12
			">
				<div class="flex flex-col mb-5" v-for="item in contact" :key="item.title">
					<p class="font-bold md:mb-3 mb-1.5 uppercase">{{ item.title }}</p>
					<p class="font-[300]" v-for="child in item.children" :key="child">{{ child }}</p>
				</div>
			</div>
	
	</div>
</template>


<style scoped>
input, textarea {
	@apply bg-lighter/30 uppercase text-dark/80 placeholder-dark font-[600]
				my-2 p-2.5 px-3 text-[13px];
}
textarea {
	@apply h-32 mb-8;
}
button {
	@apply self-start uppercase text-sm text-dark font-[700] transition hover:bg-lighter/40 p-1.5 px-3;
}
</style>