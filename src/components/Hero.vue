<script setup>
import anime from 'animejs'
import { onMounted } from 'vue';

const scrollToBrand = () => {
	document.getElementById('our-brands').scrollIntoView(true)
}

const getScrollButtonPosition = () => {
	if (window.innerWidth < 640) return '13vh'
	else return '5vh'
}

const animateScrollButton = () => {
	anime({
		targets: '#hero .scroll-down img',
		loop: true,
		duration: 600,
		easing: (el, i, total) => t => Math.pow(Math.sin(t * (i + 1)), total/1.25),
		direction: 'alternate',
		translateY: [0, 15]
	})
}

const loadObserver = () => {

	const callback = (entries, observer) => {
		entries.forEach((entry, i) => {
			if (entry.isIntersecting) {
				intersection.unobserve(entry.target)
				let temp = `id-${new Date().getTime().toString()}`
				entry.target.id = temp
				let svgs = document.querySelectorAll(`#${temp} path, #${temp} rect`)
				svgs.forEach(svg => {
					svg.style.fill = 'transparent'
					svg.temp__fill = entry.target.dataset.dark ? 'white' : 'var(--dark)'
					svg.style.stroke = entry.target.dataset.dark ? 'white' : 'var(--dark)'
					svg.style.strokeDasharray = svg.getTotalLength()
					svg.style.strokeDashoffset = svg.getTotalLength()
				})

				const tl = anime.timeline({
					duration: 2000,
					easing: 'easeInOutSine',
					delay: 250 * (i%3)
				})

				tl
					.add({
						targets: entry.target,
						opacity: [0, 1],
						translateY: [35, 0],
						duration: 750
					})
					.add({
						targets: svgs,
						strokeDashoffset: (el, i) => ([el.getTotalLength(), 0]),
					}, 250)
					.add({
						targets: svgs,
						fill: ['transparent', 'red'],
					})
			}
		})
	}
	
	const intersection = new IntersectionObserver(callback, {
		rootMargin: '0px 0px -65px 0px',
	})

	document.querySelectorAll('.my-list-item').forEach(el => {
		intersection.observe(el)
	})
}

onMounted(() => {
	const paths = document.querySelectorAll('#hero path')

	paths.forEach(path => {
		path.style.strokeDasharray = path.getTotalLength()
		path.style.strokeDashoffset = path.getTotalLength()
	})

	const animation = anime.timeline({
		duration: 2000/50,
		direction: 'normal',
		easing: 'easeInOutSine',
		loop: false,
	})

	const hidden_views = [
		{ id: 'our-brands', display: 'flex' },
		{ id: 'brands', display: 'grid' },
		{ id: 'brands-2', display: 'grid' },
		{ id: 'who-are-we', display: 'flex' },
		{ id: 'our-values', display: 'flex' },
		{ id: 'icon-section', display: 'flex' },
		{ id: 'feeding-program', display: 'flex' },
		{ id: 'footer', display: 'grid' },
	]

	const loadParallax = () => {
		document.querySelectorAll('.scroll').forEach(item => {
			let pos = window.scrollY * item.dataset.rate
			item.style.transform = `translateY(${pos}px)`
		})
	}

	const show_stuff = () => {
		animateScrollButton()
		setTimeout(() => {
			document.body.style.overflowY = 'auto'
			for (const view in hidden_views)
				document.getElementById(hidden_views[view]['id']).style.display = hidden_views[view]['display']
				loadObserver()

				window.addEventListener('scroll', () => {
					loadParallax()
				})
		}, 800)
		anime({
			targets: '#hero img',
			opacity: 1,
			easing: 'easeInSine',
			duration: 1000,
		})
	}

	animation
		.add({
			targets: paths,
			strokeDashoffset: (el, i) => ([el.getTotalLength(), 0]),
			delay: (el, i) => (250 * i) + 50,
		})
		.add({
			targets: '#text',
			scale: [1.2, 1],
			easing: 'cubicBezier(.6, .15, .2, .4)'
		}, 0)
		.add({
			targets: paths,
			fill: ['transparent', '#53717b'],
			svgStroke: ['#53717b', 'transparent'],
			delay: (el, i) => 70 * i,
			duration: 1250
		})
		.add({
			targets: '#header',
			top: 0,
			opacity: [0, 1],
			duration: 1000,
			complete: () => {
				document.getElementById('header').style.maxWidth = `${window.innerWidth}px`
			},
		}, '-=1000')
		.add({
			targets: '#hero .scroll-down',
			bottom: () => getScrollButtonPosition(),
			duration: 800,
			easing: 'cubicBezier(.5, .05, .1, .3)',
			begin: () => {
				anime({
					targets: '#hero button',
					opacity: 1,
					duration: 1000
				})
			},
			complete: () => {
				show_stuff()
			}
		}, '-=1000')
})
</script>


<template>
	<div id="hero" class="
		relative flex bg-light items-center justify-center h-[100vh]
	">
		<svg viewBox="0 0 9629.1094 2123.3979" id="text" class="relative -top-[8vh] sm:top-0">
			<path
				d="M 513.67445,138.83827 V 1354.9274 c 0,0 -26.19526,271.0445 216.18513,271.0445 H 1921.9284 l -276.7655,358.5866 -881.96491,-6.0309 c 0,0 -658.2748,53.8081 -659.74976,-512.3826 L 100,142.32879 Z" />
			<path
				d="m 2132.6296,134.8184 h 417.0721 v 1265.1389 c 0,0 -2.1477,223.0057 179.7439,223.0057 226.1492,0 860.2133,0 860.2133,0 0,0 244.8644,24.014 244.8644,-219.7104 V 133.31936 h 396.4411 V 1469.6605 c 0,0 -13.9155,503.704 -486.286,503.704 H 2636.0875 c 0,0 -497.3578,-28.5187 -497.3578,-488.348 0,-383.1429 -6.1003,-1350.1981 -6.1003,-1350.1981 z" />
			<path
				d="M 4540.1378,1982.4336 V 296.47515 c 0,0 -27.0445,-149.90739 177.6029,-188.54296 162.4506,-30.669599 238.3801,77.62041 273.5608,112.39557 76.833,75.94564 1308.5645,1256.65334 1308.5645,1256.65334 V 131.51769 H 6690.12 V 1890.6958 c 0,0 -12.3991,108.1729 -172.2032,131.3506 -76.3882,11.079 -179.5465,-48.1038 -234.5859,-98.9313 -89.04,-82.2987 -1350.6373,-1243.71946 -1350.6373,-1243.71946 v 997.72806 z" />
			<path
				d="m 6805.633,1981.9281 c 0,0 915.7114,-1511.82122 1073.9741,-1715.80799 176.1461,-227.03535 427.3212,-222.68574 569.7854,21.24582 97.364,166.71031 1079.7165,1692.18777 1079.7165,1692.18777 H 9063.8639 L 8784.8708,1556.9086 H 7515.4269 l 198.1956,-318.6851 H 8608.932 L 8154.0901,519.71083 7255.2261,1983.3545 Z" />
		</svg>

		<h1 class="hidden">Luna</h1>
		<h1 class="hidden">Luna Group</h1>

		<div class="scroll-down flex flex-col justify-center absolute bottom-0 cursor-pointer" @click="scrollToBrand">
			<button class="
				font-bold text-dark opacity-0
				2xl:text-3xl
				xl:text-2xl
				lg:text-xl
				md:text-lg
				sm:mb-2
				mb-1
				hidden
			">See More</button>
			<img src="../assets/icons/down-arrow-2.svg" class="
				opacity-0
				2xl:h-[2.85rem]
				md:h-[2.245rem]
				h-[1.2rem]
			" />
		</div>
	</div>
</template>

<style scoped>
path {
	fill: transparent;
	stroke: var(--dark);
	stroke-width: 35;
}

@media screen and (max-width: 1280px) {
	svg {
		width: 77%;
	}
}
@media screen and (min-width: 1280px) {
	svg {
		width: 65%;
	}
}
</style>