<script setup>
import Icon from './Icon.vue'
import Text from './Text.vue'

const info = [
	{ heading: 'address', content: 'HEAD OFFICE Addis Ababa, Ethiopia Bole Kifleketema, Wereda 04, House number 048' },
	{ heading: 'phone', content: '+251 116 627 894/97 | +251 116 627 893' },
	{ heading: 'email', content: 'info@lunafarmexport.com' },
]

</script>

<template>
	<div id="footer" class="
		bg-lighter
		hidden grid-cols-2
		px-32
		lg:py-10
		md:py-8
		py-6
	">
		
		<div class="left flex flex-col items-start justify-center">
			<div class="
				logo flex items-center
				lg:my-5
				md:my-4
				my-3
			">
				<Icon class="
					lg:w-14
					w-12
				" :darker="true" :colorful="true" />
				<Text class="
					fill-[#33515b]
					lg:w-40 lg:ml-4
					w-32 ml-2
				" />
			</div>

			<p class="
				text-light tracking-[3px] font-bold uppercase
				md:text-[15px]
				text-sm
			">&copy; Luna group 2022</p>
		</div>


	<div class="right flex flex-col">

		<div class="flex flex-col" v-for="(i, j) in info" :key="j">
			<p class="text-dark font-bold uppercase tracking-widest mb-1.5">{{ i.heading }}</p>
			<p class="font-light text-slate-200 mb-3">{{ i.content }}</p>
		</div>
		
	</div>

		
	</div>
</template>