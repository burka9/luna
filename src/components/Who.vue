<script setup>
import { onMounted } from 'vue';
import anime from 'animejs'


const items = [
	{
		header: 'Our Mission',
		text: `Luna’s mission is to provide our customers both in Ethiopia and the world.
Luna culture stands in three pillars.`,
		children: [
			`Food Safety and Quality: Luna is known for its leading position in Food Safety 
Management and Quality Assurance systems, producing a safe and 
consistent product. Production in our units is conducted in accordance with 
strict quality procedures in place. 
`,
			`Consistency has been our backbone in developing firm relations with our 
partners for a very long time.`
		]
	},
	{
		header: 'Our Vision',
		children: [
			`We value the lasting reputation we have built, more than the short-term financial success we could get`,
			`We value the dedication of our employees, their energy, and the growing intention to improve`,
			`We value the rewarding performance and the long-term relationship with our customers`,
		]
	},
	{
		header: 'Our Values',
		children: [
			'We value the lasting reputation we have built, more than the short term financial success we could get',
			'We value the irreplaceable human relation we have with everyone',
			'We value the dedication of our employees, their energy and the growing intention to improve',
			'We value the rewarding performance and the long-term relationship with our customers',
		]
	},
	{
		header: 'Why Us?',
		children: [
			'Our food and safety management system fits with the requirements of the global food safety initiatives (GFSI) ',
			'We have granted the award of FSSC 22000 certification in 2019',
			'Our work execution method is always consideration of the law, society and the natural environment ',
		]
	},
]

onMounted(() => {
	let intersection = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry, i) => {
			if (entry.isIntersecting) {
				anime({
					targets: entry.target,
					opacity: [0, 1],
					translateY: [75, 0],
					duration: 1100,
					delay: 350 * i,
					easing: 'easeInOutSine',
				})
				intersection.unobserve(entry.target)
			}
		})
	}, {
		rootMargin: '0px 0px -70px 0px',
	})

	document.querySelectorAll('#who-are-we .card').forEach(el => intersection.observe(el))
})

</script>

<template>
	<div id="who-are-we" class="
		bg-lighter flex flex-col text-slate-200
		lg:p-16 lg:px-20 lg:py-28
		md:px-10 md:py-20
		sm:px-16
		p-16 px-10
	">

		<div class="
			flex flex-col items-center justify-center text-center my-10 hidden
		">

		<p class="">
			We care about the environment is one of our positive impact approach to do well on behalf of mother earth. Due to the growing industrialized way of life we are leading, it’s mandatory to care about the other polarities of life.
		</p>
		
		<p class="">
			Keeping the natural state of our environment to the optimal level; by using biogas digestion technology, reducing and reusing the massive waste products, planting trees at a rate of 200 per hectare on each farmer’s land we use and introducing reusable shopping bags in each fresh corner shops are some of the instances.
		</p>
		
		</div>
		
		<div class="
			grid text-gray-200
			xl:gap-40 xl:px-20
			lg:gap-28 lg:px-12
			md:gap-20 md:px-8 md:grid-cols-2
			grid-cols-1
			max-w-[1200px]
			mx-auto
		">

			<div class="
				card
				flex flex-col items-center opacity-0
				md:my-0
				my-6
			" v-for="(item, i) in items.slice(0)" :key="i">
				<h2 class="
					text-4xl font-[500] mb-8
				">{{ item.header }}</h2>
				<p v-if="item.text" class="mb-4">{{ item.text }}</p>
				<ul class="list-outside list-disc lg:px-4 md:px-3 sm:px-2 px-1">
					<li v-for="(child, i) in item.children" :key="i"
					class="
						font-[400]
						lg:text-base lg:my-4
						md:text-sm md:my-3
						text-xs my-2
					">
						{{ child }}
					</li>
				</ul>
			</div>
			
		</div>
		
	</div>
</template>

<style scoped>
h2 {
	text-shadow: 6px 7px 12px #0004;
}
</style>