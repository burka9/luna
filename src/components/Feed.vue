<script setup>

const see_more = () => location.assign('/about/#feed')

</script>


<template>
	<div id="feeding-program" class="
		relative hidden
		md:grid-cols-2 md:gap-x-24 md:h-96 md:p-0
		p-10
	">
		
		<div class="
			left flex flex-col text-lighter
			md:pr-6 md:ml-32 md:h-[58%] md:my-8 md:justify-between md:items-start
			items-center
		">
			<h3 class="
				font-bold uppercase tracking-wide
				2xl:text-5xl
				lg:text-3xl
				md:text-xl md:txt-start
				text-xl
			">Our school feeding program</h3>

			<p class="font-[100] opacity-0">
				We are passionate about the next generation of Ethiopians. We know that many across our great country go to school without the nourishment they need.
			</p>

			<button class="
				bg-lighter uppercase text-white text-xs p-1 px-3
			" @click="see_more">See more</button>
		</div>


		<div class="
			right flex-row-reverse
			md:flex
			hidden
		">
			<div class="image mr-32 my-8 h-[80%] self-end"></div>
		</div>

		<div class="absolute bg-light w-full h-[27%] bottom-0 z-[-1] hidden md:flex"></div>

	</div>
</template>

<style scoped>
h3 {
	background: linear-gradient(120deg, var(--dark) 0 50%, transparent 50% 100%);
	background-size: 225%;
	background-position-x: 100%;
	transform: translateX(25px);
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
button {
	background: linear-gradient(0deg, transparent 0 50%, var(--dark) 50% 100%);
	background-size: 100% 200%;
	background-position-y: -100%;
}
.image {
	background-image: url(../assets/imgs/feeding_2.jpeg);
	background-size: auto 100%;
	background-repeat: none;
}

@media screen and (max-width: 768px) {
	#feeding-program {
		/* background-image: url(../assets/imgs/feeding_2.jpeg); */
	}
}
</style>