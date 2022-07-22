<script setup>
import { onMounted } from 'vue';
import anime from 'animejs'

const tailwind_colors = {
	'dark': '#52717b',
	'luna-pink': '#E95DB8',
	'luna-blue': '#017EC3',
	'luna-green': '#00A874',
	'luna-yellow': '#FBC80A',
	'luna-orange': '#F5811F',
	'luna-red': '#EF5A43',
}

const color = () => tailwind_colors[props.color]

const props = defineProps(['_id', 'item', 'left', 'color', 'nth'])

const className = () => defaultClassName.concat(props.left ? leftClassName : rightClassName)

const defaultClassName = 'flex justify-between items-center h-full w-full relative '
const leftClassName = 'flex-row '
const rightClassName = 'flex-row-reverse '

let root = null

const appear = el => {
	const tl = anime.timeline({
		easing: 'easeInOutSine',
		direction: 'normal',
		duration: 1350
	})

	const tmp = `#${el.id}`
	
	tl
		.add({
			targets: `${tmp} p`,
			// backgroundPositionY: ['100%', '0%'],
			opacity: [0, 1],
			scaleX: [1.2, 1],
		}, 0)
		.add({
			targets: `${tmp} h3`,
			backgroundPositionX: ['100%', '0%'],
			translateX: [50, 0],
		}, 0)
		.add({
			targets: `${tmp} button`,
			translateY: el => ([el.getBoundingClientRect().height + 10, 0]),
			duration: 1000
		}, 1100)
}

const callback = (entries, observer) => {
	entries.forEach((entry, i) => {
		if (entry.isIntersecting) {
			intersection.unobserve(entry.target)
			appear(entry.target)
		}
	})
}

const intersection = new IntersectionObserver(callback, {
	rootMargin: '0px 0px -225px 0px',
})

onMounted(() => {
	root = document.getElementById(props._id)

	const img = new URL(`../assets/imgs/${props.item.background}`, import.meta.url)
	document.querySelector(`#${props._id} .image`).src = `${img}`

	intersection.observe(root)
})

</script>

<template>
	<div :class="`
		brand-item bg-light
		flex flex-col items-center justify-center py-0 h-[65vh] px-24 my-16
		${props.nth%3==2 ? 'bg-dark shadow-2xl' : '' }
	`" :id="props._id" :style="`

	`">
		<!-- <div class="flex items-center justify-center"> -->
		<div :class="className()">

			<component class="
				watermark absolute w-[70%] left-0 opacity-20
			" :is="props.item.icon" v-if="false"></component>

			<div class="relative w-full h-full flex items-center">
				<div class="image-box w-full h-full flex items-center">
					<img class="image" />
				</div>
				<svg class="clip absolute">
				</svg>
			</div>


			<div :class="`
				content flex flex-col items-center max-w-[50%]
				mx-12
			`" :style="`--color: ${color()}`">
				<h3 class="font-[800] uppercase tracking-wider text-xl mb-1">{{ props.item.title }}</h3>
				<p class="opacity-0 text-[14px] font-[400] text-center my-5">{{ props.item.content }}</p>
				<div class="overflow-hidden">
					<button :class="`
						uppercase text-sm mt-2 tracking-wider font-[700]
						p-1 px-2.5
					`">Visit</button>
				</div>
			</div>
		
		</div>
		<div class="hidden bg-dark/50 h-[2px] w-[10%]"></div>
	</div>
</template>

<style scoped>
svg {
	/* fill: var(--color); */
}
h3 {
	background: linear-gradient(135deg, var(--color) 0 50%, transparent 50% 100%);
	background-size: 210% 100%;
	background-position-x: 100%;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
p {
	background: linear-gradient(180deg, var(--color) 0 50%, transparent 50% 100%);
	background-size: 100% 200%;
	/* background-position-y: 100%; */
	background-position-y: 0;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	filter: grayscale(.25);
}
button {
	color: var(--color);
	/* background: var(--color);
	color: transparent;
	mix-blend-mode: multiply; */
	filter: grayscale(.45);
}
div {
	/* border: 1px solid #0007; */
}
.image-box {
	/* clip-path: polygon(50% 0%, 100% 23%, 100% 77%, 50% 100%, 0% 77%, 0% 23%); */
	/* clip-path: path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z'); */
}
.image, .image-shadow {
	/* clip-path: polygon(50% 0%, 100% 23%, 100% 77%, 50% 100%, 0% 77%, 0% 23%); */
}
</style>