<script setup>

const see_more = () => location.assign('/about/#feed')

</script>


<template>
	<div id="feeding-program" class="
		relative hidden grid-cols-2 gap-x-24 h-96
	">
		
		<div class="left flex flex-col justify-between items-start text-lighter pr-6 ml-32 h-[58%] my-8">
			<h3 class="
				font-bold uppercase tracking-wide
				2xl:text-5xl
				lg:text-3xl
				md:text-xl
				text-xl
			">Our school feeding program</h3>

			<p class="font-[100]">
				We are passionate about the next generation of Ethiopians. We know that many across our great country go to school without the nourishment they need.
			</p>

			<button class="
				bg-lighter uppercase text-white text-xs p-1 px-3
			" @click="see_more">See more</button>
		</div>


		<div class="right flex flex-row-reverse">
			<div class="image mr-32 my-8 h-[80%] self-end"></div>
		</div>

		<div class="absolute bg-light w-full h-[27%] bottom-0 z-[-1]"></div>

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
</style>