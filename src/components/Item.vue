<script setup>
import { onMounted } from 'vue';
import anime from 'animejs'

const color = {
	dark: '#52717b',
}

const props = defineProps(['_id', 'item', 'left'])

const className = () => defaultClassName.concat(props.left ? leftClassName : rightClassName)

const defaultClassName = 'flex justify-between items-center '
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

	const paths = `${tmp} path, ${tmp} rect`
	
	tl
	.add({
		targets: paths,
		strokeDashoffset: el => ([el.getTotalLength(), 0]),
		duration: 1700
	})
	.add({
		targets: `${tmp} svg`,
		translateX: [25 * props.left ? -1 : 1, 0],
	}, 0)
	.add({
		targets: paths,
		fill: ['none', color.dark],
		strokeWidth: [1, 0],
	}, '-=350')
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
	rootMargin: '0px 0px -150px 0px',
})

onMounted(() => {
	root = document.getElementById(props._id)

	document.querySelectorAll(`#${props._id} path, #${props._id} rect`).forEach(path => {
		path.style.fill = 'none'
		path.style.strokeWidth = 1
		path.style.stroke = color.dark
		path.style.strokeDasharray = path.getTotalLength()
		path.style.strokeDashoffset = path.getTotalLength()
	})

	intersection.observe(root)
})

</script>

<template>
	<div class="flex flex-col items-center my-24" :id="props._id">
		<div :class="className()">

			<div class="
				flex items-center justify-center mr-5
			">
				<component class="
					w-96
				" :is="props.item.icon"></component>
			</div>


			<div :class="`
				content flex flex-col items-start max-w-[45%]
			`">
				<h3 class="font-[800] uppercase tracking-wider text-lg mb-1">{{ props.item.title }}</h3>
				<p class="opacity-0 text-[14px] my-3.5">{{ props.item.content }}</p>
				<div class="overflow-hidden">
					<button class="text-dark uppercase text-sm mt-2 tracking-wider font-[700]">Visit</button>
				</div>
			</div>
		
		</div>
		<div class="hidden bg-dark/50 h-[2px] w-[10%]"></div>
	</div>
</template>

<style scoped>
svg {
	fill: var(--dark);
}
h3 {
	background: linear-gradient(135deg, var(--dark) 0 50%, transparent 50% 100%);
	background-size: 210% 100%;
	background-position-x: 100%;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
p {
	background: linear-gradient(180deg, var(--dark) 0 50%, transparent 50% 100%);
	background-size: 100% 200%;
	/* background-position-y: 100%; */
	background-position-y: 0;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>