<script setup>

const see_more = () => location.assign('/about')

</script>

<template>
	<div id="who-are-we" class="
		hidden flex-col justify-center
		lg:p-16 lg:px-24 lg:p-0 h-[30rem] flex
		md:px-20
		sm:px-16
		p-12 px-10
	">
		<h3 class="
			font-bold
			2xl:text-6xl
			lg:text-4xl
			md:text-3xl
			text-4xl
		">Who we are</h3>

		<div class="
			spacer w-0 h-[2px] bg-dark
			lg:my-5
			md:my-3
			my-5
		"></div>

		<div class="
			content grid text-slate-500
			lg:grid-cols-2 lg:gap-x-24
			md:grid-cols-2 md:gap-x-10
			grid-cols-1 gap-x-5
		">
			<div class="left opacity-0">
				<p class="md:text-2xl text-xl mb-12 md:mb-0 font-[300]">
					Luna is a mother company for the collaboration of various business units engaged in the import-export process of numerous countries.
				</p>
			</div>

			<div class="right opacity-0 hidden md:block">
				<p class="text-base text-justify mb-6">
					The company was established in 2003, and the first one to introduce employee share ownership program (ESOP) which is a mechanism that enables and facilitates employee ownership in both the country and the company.
				</p>
				<p class="text-base text-justify mb-6">
					We care about the environment is one of our positive impact approach to do well on behalf of mother earth.
				</p>
				<button class="uppercase text-sm font-bold" @click="see_more">See More</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
h3 {
	align-self: flex-start;
	background: linear-gradient(120deg, var(--dark) 0 50%, transparent 50% 100%);
	background-size: 225%;
	background-position-x: 100%;
	transform: translateX(25px);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>