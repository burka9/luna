<script setup>
import { onMounted } from 'vue';
import anime from 'animejs'
import Hexagon from './Hexagon.vue';

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

const defaultClassName = 'max-w-[1350px] flex md:justify-between justify-center items-center h-full w-full relative '
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
		.add({
			targets: `${tmp} .image`,
			translateX: el => ([el.getBoundingClientRect().width * (props.left ? -1 : 1), 0]),
			opacity: [0, 1],
			duration: 900
		}, 200)
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

	if (window.innerWidth >= 768) {
		const image = document.querySelector(`#${props._id} .image`)
		image.style.backgroundImage = `url(${img})`
		intersection.observe(root)
	}
})



</script>

<template>
	<div :class="`
		brand-item bg-light
		flex flex-col items-center justify-center my-0
		xl:h-[480px] xl:px-32
		lg:h-[440px] lg:px-24
		md:h-[400px] md:px-12
		min-h-[400px]
		${props.nth%3==2 ? 'bg-dark shadow-2xl' : '' }
	`" :id="props._id">
		<!-- <div class="flex items-center justify-center"> -->
		<div :class="className()">

			<div class="
				relative w-full h-full items-center justify-center
				md:flex
				hidden
			">
				<div class="image-box flex items-center justify-center relative overflow-x-hidden">
					<div class="image opacity-0 relative z-10"></div>
				</div>
			</div>


			<div :class="`
				content flex flex-col items-center
				lg:mx-12
				md:max-w-[50%] md:mx-6
				max-w-[70vw]
			`" :style="`--color: ${color()}`">
				<h3 class="font-[800] uppercase tracking-wider text-xl mb-1">{{ props.item.title }}</h3>
				<p class="
					opacity-1 text-[14px] font-[400] text-center my-5
					md:opacity-0
				">{{ props.item.content }}</p>
				<!-- <div class="flex items-center"> -->
					<a :class="`
						uppercase text-sm m-0 tracking-wider font-[700] rounded-sm
						p-0.5 px-2.5
						${props.left ? 'left' : ''}
					`">Visit</a>
				<!-- </div> -->
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
a {
	background-image: linear-gradient(60deg, var(--color) 0% 50%, transparent 50% 100%);
	background-size: 225% 100%;
	background-position-x: 115%;
	background-repeat: no-repeat;
	color: var(--color);
	cursor: pointer;
	filter: grayscale(.45);
	transition: all 200ms ease;
}
a:hover {
	background-position-x: 0%;
	color: var(--light);
}
a.left {
	background-image: linear-gradient(120deg, transparent 0% 50%, var(--color) 50% 100%);
	background-position-x: 0%;
}
a.left:hover {
	background-position-x: 100%;
}
@media screen and (max-width: 768px) {
	h3 {
		background-position-x: 0%;
	}
}
.image-box {
	@apply cursor-pointer transition
		xl:w-[420px] xl:h-[380px]
		lg:w-[380px] lg:h-[340px]
		md:w-[340px] md:h-[300px]
		w-[200px] h-[200px]
		;
		/* xl:w-[400px] xl:h-[400px]
		lg:w-[340px] lg:h-[340px]
		md:w-[270px] md:h-[270px]; */
	filter: drop-shadow(0 0 15px rgba(50, 50, 0, 0.65));
}
.image-box:hover {
	transform: scale(1.025);
}
.image {
	background-position: center;
	background-size: cover;
	/* clip-path: url(#myClip); */
	filter: url(#round);
	box-shadow: 0 0 25px rgba(25, 25, 25, 0.5);
	@apply h-full w-full;
}
.image::before {
	/* clip-path: polygon(45% 0%, 75% 0%, 100% 50%,); */
	/* content: ''; */
}
</style>