<script setup>
import { onMounted } from 'vue';
import anime from 'animejs'


const items = [
	{
		header: 'Our Mission',
		children: [
			'Serving with passion, care, honesty and fairness',
			'Outshining the potential and inner strength of female leaders ',
			'Creating community leveled product and services, raising the satisfaction and reachability scope of our impact ',
			'Ensuring traceability, safety and efficiency in our product and services',
			'Eradicating the rate of malnutrition and supply shortage in Ethiopia',
		]
	},
	{
		header: 'Our Vision',
		children: [
			'To proof the capacity, dedication and consistency of every single stakeholders in our company ',
			'To encourage women both in top management and lower level employee to create a self-sufficient and stable life ',
			'To create an authentic and measurable positive impact in the daily life of our customers ',
			'To build a nation with sufficient food supply and accessibility',
			'To exponentially decrease the number children who goes to school without the prior proper diet',
			// 'Raise awareness about the importance of a versatile food nutrition in daily life',
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
		lg:p-20 lg:px-24 lg:py-32
		md:px-20 md:py-32
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
		
		<div class="grid grid-cols-2 gap-40 px-20 text-gray-200">

			<div class="
				card
				flex flex-col items-center opacity-0
			" v-for="(item, i) in items.slice(0)" :key="i">
				<h2 class="
					text-4xl font-[500] mb-8
				">{{ item.header }}</h2>
				<ul class="list-outside list-disc">
					<li v-for="(child, i) in item.children" :key="i"
					class="
						text-base font-[400] my-2
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