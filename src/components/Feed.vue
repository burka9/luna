<script setup>
</script>


<template>
	<div class="
		relative
	">
			<div id="feeding-program" class="
			relative hidden
			2xl:max-w-[1700px] 2xl:mx-auto
			lg:gap-x-24
			md:grid-cols-2 md:gap-x-6 md:h-96 md:p-0
			p-10
		">
			
			<div class="
				left flex flex-col text-lighter
				lg:pr-6 lg:ml-32 lg:h-[58%]
				md:pr-3 md:ml-20 md:h-[55%] md:my-8 md:justify-between md:items-start
				items-center
			">
				<h3 class="
					font-bold uppercase tracking-wide
					2xl:text-5xl
					lg:text-3xl
					md:text-xl md:text-start
					text-xl text-center
				">Our school feeding program</h3>

				<p class="font-[100] opacity-0 md:my-0 my-4 md:text-start text-center">
					We are passionate about the next generation of Ethiopians. We know that many across our great country go to school without the nourishment they need.
				</p>

				<!-- <p class="font-[100] opacity-0 md:my-0 my-4 md:text-start text-center">
					We are committed to giving back. Luna leads and positively impacts the community 
through its sustainable environmental practices and its charitable services supporting 
disabled children and its school feeding program supports more than 360 needy students. 
				</p> -->


				<a href="/about#feed" class="
					bg-lighter uppercase text-white text-xs p-1 px-3 transition-all hover:shadow-2xl hover:bg-dark
				">See more</a>
			</div>


			<div class="
				right flex-row-reverse
				md:flex
				hidden
			">
				<div class="image
					lg:mr-32 lg:h-[80%] lg:self-end
					md:mr-20 md:my-8
				"></div>
			</div>

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
	background-repeat: no-repeat;
	background-position: center center;
}

@media screen and (max-width: 768px) {
	#feeding-program {
		/* background-image: url(../assets/imgs/feeding_2.jpeg); */
	}
}
</style>