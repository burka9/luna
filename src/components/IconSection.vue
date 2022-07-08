<script setup>
import Innovation from './Icons/Innovation.vue'
import Satisfaction from './Icons/Satisfaction.vue';
import Commitment from './Icons/Commitment.vue';

</script>

<template>
	<div id="icon-section" class="
		hidden bg-lighter justify-center relative
		lg:py-12 lg:pb-6 lg:p-0 lg:h-60
		md:py-8 md:pb-4
		sm:flex-row sm:py-4 sm:pb-2
		flex-col py-4 pb-2
	">
		<div class="
			flex flex-col items-center
			sm:mb-0
			mb-8
		">
			<innovation class="
				lg:w-28
				md:w-24
				sm:w-16
				w-36 mb-2
			" />
			<p class="text-white text-[13px] font-light">Innovation</p>
		</div>
		<div class="
			flex flex-col items-center
			mb-8
			-mx-3
		">
			<Satisfaction class="
				lg:w-28
				md:w-24
				sm:w-16
				w-36 mb-2
			" />
			<p class="text-white text-[13px] font-light">Satisfaction</p>
		</div>
		<div class="
			flex flex-col items-center
		">
			<Commitment class="
				lg:w-28
				md:w-24
				sm:w-16
				w-36 mb-2
			" />
			<p class="text-white text-[13px] font-light">Commitment</p>
		</div>
	</div>
</template>