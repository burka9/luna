<script setup>

const contact = [
	{
		title: 'Our address',
		children: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat dolores voluptatibus tempore, animi suscipit repudiandae.'],
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
		bg-light grid grid-cols-2 gap-x-32 p-14 px-32 pt-20
	">
	
			<div class="form flex flex-col uppercase">

				<input type="text" placeholder="Your Name">
				<input type="email" placeholder="Email">
				<textarea placeholder="Your message"></textarea>
				<button>Send</button>
				
			</div>

			<div class="contact flex flex-col text-dark text-sm pr-10 mt-1.5">
				<div class="flex flex-col mb-5" v-for="item in contact" :key="item.title">
					<p class="font-bold mb-3 uppercase">{{ item.title }}</p>
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