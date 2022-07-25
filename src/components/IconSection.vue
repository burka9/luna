<script setup>
import Innovation from './Icons/Innovation.vue'
import Satisfaction from './Icons/Satisfaction.vue';
import Commitment from './Icons/Commitment.vue';

const items = [
	{
		icon: Innovation,
		text: 'Innovation',
	},
	{
		icon: Satisfaction,
		text: 'Satisfaction',
	},
	{
		icon: Commitment,
		text: 'Commitment',
	}
]

</script>

<template>
	<div id="icon-section" class="
		hidden bg-lighter justify-center relative overflow-hidden
		lg:py-12 lg:pb-6 lg:p-0 lg:h-60
		md:py-8 md:pb-4
		sm:flex-row sm:py-4 sm:pb-2 sm:pt-0
		flex-col py-4 pt-8
	">

		<div class="cover absolute top-0 left-0 bg-lighter h-full w-full z-10"></div>

		<div :class="`
			flex flex-col items-center relative z-0
			sm:mb-0
			mb-8
			${ i==1 ? '-mx-3.5' : ''}
		`" v-for="(item, i) in items" :key="i">
			<component class="
				lg:w-28
				md:w-24
				sm:w-16
				w-24 mb-2
			" :is="item.icon"/>
			<p class="text-white text-[13px] font-light">{{ item.text }}</p>
		</div>

	</div>
</template>