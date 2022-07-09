<script setup>

const see_more = () => location.assign('/brands')

</script>

<template>
	<div id="who-are-we" class="
		hidden flex-col justify-center
		lg:p-16 lg:px-24 lg:p-0 h-[30rem]
		md:px-20
		sm:px-16
		p-12 px-10
	">
		<h3 class="
			font-bold
			2xl:text-6xl
			lg:text-4xl
			md:text-3xl
			text-1xl
		
			text-dark
		">Who we are</h3>

		<div class="
			spacer w-full h-[2px] bg-dark
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
			<div class="left">
				<p class="text-2xl mb-12 md:mb-0 font-[300]">
					Luna, established in 2003, is a parent company for a group of business units engaged in production, processing, and import-export activities
				</p>
			</div>

			<div class="right">
				<p class="text-base text-justify mb-6">
					Meat Processing, farm, food retail grocery chains, food catering service, winery, honey, and wax processing, heavy machinery spare parts supply, and deep-well drilling. The company employs over 1000 employees.
				</p>
				<p class="text-base text-justify mb-6">
					We use cutting-edge technology to grow and prepare your fruits, vegetables, meat, and wine throughout our facilities. Our farms, feedlots, and export abattoir align with international standards, to ensure that we supply the highest quality, and traceable foods to our clients in Ethiopia and the rest of the world.
				</p>
				<button class="uppercase text-sm font-bold" @click="see_more">See More</button>
			</div>
		</div>
	</div>
</template>