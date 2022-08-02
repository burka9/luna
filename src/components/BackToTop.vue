<script setup>
import { reactive } from 'vue'

let state = reactive({
	showButton: false
})

let percentage = 0
let totalHeight = document.body.clientHeight || document.body.scrollHeight || document.body.offsetHeight
totalHeight -= window.innerHeight

window.addEventListener('scroll', e => {
	percentage = (window.scrollY || window.pageYOffset) / totalHeight

	state.showButton = percentage >= ((window.innerHeight + (window.innerHeight * .15)) / totalHeight)
})

const goToTop = () => window.scrollTo({ top: 0 })

</script>

<template>
	<Transition name="top">
		<div id="back-to-top" class="
			fixed z-[999]
			md:right-8 md:bottom-6
			right-4 bottom-6
			bg-light cursor-pointer rounded-full drop-shadow-2xl shadow-xl
			flex items-center justify-center p-[4px]
		" v-show="state.showButton" @click="goToTop">
			<svg viewBox="0 0 24 24" fill="none" stroke="#4a5568" stroke-width="2" stroke-linecap="square"
				stroke-linejoin="arcs"
				class="
					md:w-[36px] md:h-[36px]
					w-[28px] h-[28px]
				">
				<path d="M18 15l-6-6-6 6" />
			</svg>
		</div>
	</Transition>
</template>


<style scoped>
#back-to-top svg {
	position: relative;
	top: 0;
	transition: all 300ms ease;
	fill: none;
	stroke: #4a5568;
	stroke-width: 2;
}

#back-to-top:hover svg {
	top: -3px;
}

.top-enter-active,
.top-leave-active {
	transition: all 500ms ease;
}

.top-enter-from,
.top-leave-to {
	transform: translateY(25px);
	opacity: 0;
}
</style>