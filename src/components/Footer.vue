<script setup>
import Icon from './Icon.vue'
import Text from './Text.vue'

</script>

<template>
	<div id="footer" class="
		bg-dark
		hidden flex-col items-center justify-center
		py-16
	">
		<div class="logo flex items-center my-5">
			<Icon class="w-12" :darker="true" :colorful="true" />
			<Text class="w-32 ml-2 fill-[#33515b]" />
		</div>

		<p class="text-light tracking-wider font-bold uppercase">&copy; Luna group 2022</p>
	</div>
</template>