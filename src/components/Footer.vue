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
		flex items-center justify-center
		lg:py-10 lg:px-32
		md:py-8 md:px-24
		py-6 px-12
	">
		
		<div class="left flex flex-col items-center justify-center">
			<div class="
				logo flex items-center
				lg:my-5
				md:my-4
				my-3
			">
				<Icon class="
					lg:w-14
					md:w-12
					sm:w-10
					w-8
				" :darker="true" :colorful="true" />
				<Text class="
					fill-[#33515b]
					lg:w-40 lg:ml-4
					md:w-32 md:ml-3
					sm:w-24 sm:ml-2
					w-20 ml-2
				" />
			</div>

			<p class="
				text-light tracking-[3px] font-bold uppercase
				md:text-[15px]
				sm:text-[13px]
				text-[11px] text-center
			">&copy; Luna group 2022</p>
		</div>


	<div class="right flex flex-col hidden">

		<div class="flex flex-col" v-for="(i, j) in info" :key="j">
			<p class="text-dark font-bold uppercase tracking-widest mb-1.5">{{ i.heading }}</p>
			<p class="font-light text-slate-200 mb-3">{{ i.content }}</p>
		</div>
		
	</div>

		
	</div>
</template>