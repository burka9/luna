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

const color = () => '#e0e0e0' //tailwind_colors[props.color]

const props = defineProps(['_id', 'item', 'left', 'color', 'nth'])

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

	const paths = `${tmp} path, ${tmp} rect, ${tmp} polygon`
	
	tl
	.add({
		targets: paths,
		strokeDashoffset: el => ([el.getTotalLength(), 0]),
		duration: 1700
	})
	.add({
		targets: `${tmp} svg`,
		translateY: [35 * (props.left ? 1 : 1), 0],
	}, 0)
	.add({
		targets: paths,
		fill: ['none', color()],
	}, '-=1250')
	.add({
		targets: paths,
		strokeWidth: [1, 0],
	}, '-=800')
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

	if (props.item.background && false) {
		fetch(`/assets/imgs/${props.item.background}`)
		.then(res => {
			console.log(res)
		})
		.catch(err => console.error(err))
	}

	// dev code
	const img = new URL(`../assets/imgs/${props.item.background}`, import.meta.url)
	document.getElementById(props._id).style.backgroundImage = `url(${img})`

	document.querySelectorAll(`#${props._id} path, #${props._id} rect, ${props._id} polygon`).forEach(path => {
		path.style.fill = 'none'
		path.style.strokeWidth = 1
		path.style.stroke = color()
		path.style.strokeDasharray = path.getTotalLength()
		path.style.strokeDashoffset = path.getTotalLength()
	})

	intersection.observe(root)
})

</script>

<template>
	<div :class="`
		brand-item
		flex flex-col items-center py-24 px-52 my-16
		${props.nth%3==2 && false ? 'bg-dark shadow-2xl' : '' }
	`" :id="props._id" :style="`

	`">
		<div :class="className()">

		<component class="
			watermark absolute w-[70%] left-0 opacity-20
		" :is="props.item.icon" v-if="false"></component>

			<div class="
				flex items-center justify-center
			">
				<component class="
					w-80
				" :is="props.item.icon"></component>
			</div>


			<div :class="`
				content flex flex-col items-start max-w-[50%]
			`" :style="`--color: ${color()}`">
				<h3 class="font-[800] uppercase tracking-wider text-lg mb-1">{{ props.item.title }}</h3>
				<p class="opacity-0 text-[14px] my-3.5">{{ props.item.content }}</p>
				<div class="overflow-hidden">
					<button :class="`
						uppercase text-sm mt-2 tracking-wider font-[700]
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
	filter: grayscale(.45);
}
div {
	/* border: 1px solid #0007; */
}
</style>