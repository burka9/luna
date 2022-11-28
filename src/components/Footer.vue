<script setup>
import Icon from './Icon.vue'
import Text from './Text.vue'

</script>

<template>
	<div id="footer" class="
		bg-lighter
		hidden flex-col items-center justify-center
		lg:py-8
		md:py-6
		py-4
	">
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
			text-light tracking-wider font-bold uppercase
			md:text-lg
			text-base
		">&copy; Luna group 2022</p>
	</div>
</template>