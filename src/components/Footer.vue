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
	<div class="bg-lighter">
		<div id="footer" class="
			2xl:max-w-[1700px] 2xl:mx-auto
			lg:py-10 lg:px-24
			md:grid-cols-2 md:p-8 md:px-12
			sm:p-6
			grid-cols-1 p-5 py-8
		">
			
			<div class="
				left flex flex-col justify-center items-start
				md:order-1 md:py-0
				order-2 py-5
			">
				<div class="
					logo flex items-center
					lg:my-5
					md:my-4
					my-3
				">
					<Icon class="
						md:w-14
						w-8
					" :darker="true" :colorful="true" />
					<Text class="
						fill-[#33515b]
						md:w-40 md:ml-4
						w-24 ml-2
					" />
				</div>

				<p class="
					text-light tracking-[3px] font-bold uppercase
					md:text-[15px]
					text-sm
				">&copy; Luna group 2022</p>
			</div>


		<div class="right flex flex-col md:order-2 order-1">

			<div class="flex flex-col" v-for="(i, j) in info" :key="j">
				<p class="text-dark font-bold uppercase tracking-widest mb-1.5">{{ i.heading }}</p>
				<p class="font-light text-slate-200 mb-3">{{ i.content }}</p>
			</div>
			
		</div>

			
		</div>
	</div>
</template>