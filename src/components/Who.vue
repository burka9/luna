<script setup>

const left_top = `Luna is a mother company for the collaboration of various business units engaged in the import-export process of numerous countries.`
const left_bottom = `The company was established in 2003, and the first one to introduce employee share ownership program (ESOP) which is a mechanism that enables and facilitates employee ownership in both the country and the company.`
const right_top = `We care about the environment is one of our positive impact approach to do well on behalf of mother earth. Due to the growing industrialized way of life we are leading, it’s mandatory to care about the other polarities of life.`
const right_bottom = `Keeping the natural state of our environment to the optimal level; by using biogas digestion technology, reducing and reusing the massive waste products, planting trees at a rate of 200 per hectare on each farmer’s land we use and introducing reusable shopping bags in each fresh corner shops are some of the instances.`

</script>

<template>
	<div id="who-are-we" class="
		bg-lighter flex flex-col text-slate-200
		lg:p-20 lg:px-24 lg:pb-24
		md:px-20
		sm:px-16
		p-16 px-10
	">
		<h3 class="
			font-bold
			2xl:text-7xl
			lg:text-5xl
			md:text-4xl
			text-2xl
		">Who we are</h3>

		<div class="
			spacer w-full h-[1px] bg-slate-200
			lg:my-14
			md:my-10
			my-12
		"></div>

		<div class="
			content grid
			lg:grid-cols-2 lg:gap-x-24
			md:grid-cols-2 md:gap-x-10
			grid-cols-1 gap-x-5
		">
			<div class="left grid grid-rows-2">
				<p class="text-base text-justify mb-6">
					{{ left_top }}
				</p>
				<p class="text-base text-justify mb-6">
					{{ left_bottom }}
				</p>
			</div>

			<div class="right grid grid-rows-2">
				<p class="text-base text-justify mb-6">
					{{ right_top }}
				</p>
				<p class="text-base text-justify mb-6">
					{{ right_bottom }}
				</p>
			</div>
		</div>
	</div>
</template>