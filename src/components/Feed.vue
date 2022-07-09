<script setup>

const see_more = () => location.assign('/about')

</script>


<template>
	<div id="feeding-program" class="
		relative hidden grid-cols-2 gap-x-24 h-96
	">

		<div class="absolute bg-light w-full h-[27%] bottom-0 z-[-1]"></div>
		
		<div class="left flex flex-col justify-between items-start text-lighter pr-6 ml-32 h-[60%] my-8">
			<h3 class="
				font-bold uppercase tracking-wide
				2xl:text-5xl
				lg:text-3xl
				md:text-xl
				text-xl
			">Our school feeding program</h3>

			<p class="font-[100]">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ullam consequuntur dignissimos impedit eum, harum sapiente cumque ex culpa dolore non quibusdam alias vero nostrum? Quas at tenetur odio sequi.
			</p>

			<button class="
				bg-lighter uppercase text-white text-xs p-1 px-3
			" @click="see_more">See more</button>
		</div>


		<div class="right mr-32 my-8">
			<img src="../assets/imgs/feeding.png" alt="">
		</div>


	</div>
</template>