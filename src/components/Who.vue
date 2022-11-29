<script setup>
</script>

<template>
	<div id="who-are-we" class="
		hidden
		flex-col justify-center
		2xl:max-w-[1700px] 2xl:mx-auto
		lg:p-16 lg:px-24 lg:p-0 flex
		md:px-20 md:h-[30rem]
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
			2xl:my-8
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
					Luna’s story begins in 2003 – with a step taken for an establishment of a state-of-the-art fresh meat production led to the development of a new unparalleled portfolio of powerful and Iconic brands. 
				</p>
			</div>

			<div class="right opacity-0">
				<p class="text-base text-justify mb-6">
					Luna’s mission is to provide our customers both in Ethiopia and the world with 
quality fresh produces including but not limited to meat, vegetable, and fruits, as 
well-prepared and semi-prepared healthy dishes along with our unique wine and 
organic honey.
				</p>
				<p class="text-base text-justify mb-6">
					At Luna, we provide more than fresh produce to the market. We are unique 
in what we provide.
				</p>
				<a href="/about" class="uppercase text-sm font-bold">See More</a>
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
a {
	background: transparent;
	background: linear-gradient(120deg, var(--dark) 0 50%, transparent 50% 100%);
	background-size: 225%;
	background-position-x: 100%;
	transition: all 250ms ease;
	padding: 3px 0;
}
a:hover {
	background-position-x: 0%;
	padding: 3px 7px;
	color: white;
}
</style>