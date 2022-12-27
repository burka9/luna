<script setup>
import { onMounted } from 'vue';

import Item from './Item.vue'
import Kitchen from './Brands/Kitchen.vue'
import FreshCorner from './Brands/FreshCorner.vue';
import SlaughterHouse from './Brands/SlaughterHouse.vue';
import DebreBerhanHoney from './Brands/DebreBerhanHoney.vue';
import EzanaWinery from './Brands/EzanaWinery.vue';
import LunaFarms from './Brands/LunaFarms.vue';
import WaterWellDrilling from './Brands/WaterWellDrilling.vue';
import AutoParts from './Brands/AutoParts.vue';
import items from '../assets/content/brands.json'


const colored = true
const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt, accusantium unde labore ullam adipisci tempora nihil quibusdam perferendis reprehenderit. Cum ab sapiente minima, illum odit voluptatem quasi.'

// const items = [
// 	/**/{ id: 'luna-farm', icon: LunaFarms, title: 'Luna Farms', content: 'Feeding and serving the community a nutritious, affordable, sufficient and accessible meal each and every day is why we function as Luna farm.', route: '#', color: 'luna-green', background: 'luna-farm.jpg' },
// 	/**/{ id: 'slaughter-house', icon: SlaughterHouse, title: 'Slaughter House', content: 'Luna slaughterhouse is without any exclamation the leading slaughter supplier in Ethiopia. Boldly known for providing healthy, sufficient, satisfying and organic slaughter products.', route: '#', color: 'luna-red', background: 'slaughter-house.jpg' },
// 	/**/{ id: 'fresh-corner', icon: FreshCorner, title: 'Fresh Corner', content: 'Fresh corner is a business unit under the mother company (Luna import and export) actively serving the community and envisioning to conquer a sustainable and adequate food supply for the society.', route: '#', color: 'luna-orange', background: 'fresh-corner.jpg' },
// 	/**/{ id: 'kitchen', icon: Kitchen, title: 'Fresh Corner Kitchen', content: 'As an extensively community serving company, one of the other ways we reach out to the society is through our kitchen. Starting from the ingredient of every single meal we serve; quality, freshness and deliverability had been part of our identity.', route: '#', color: 'luna-blue', background: 'kitchen.jpg' },
// 	/**/{ id: 'winery', icon: EzanaWinery, title: 'Ezana Winery', content: 'We are situated around Quha, mekelle, a place with semi-arid climate and the utmost location to create that elegant taste of grape.', route: '#', color: 'luna-pink', background: 'winery.jpg' },
// 	/**/{ id: 'honey', icon: DebreBerhanHoney, title: 'Luna Honey', content: 'The inspiration of Luna honey came from the idea of “from hive to home”. We wanted to create a platform collectively characterized by originality, trustworthy, transparency and deliverability.', route: '#', color: 'luna-yellow', background: 'honey.jpg' },
// 	/**/{ id: 'waterwell', icon: WaterWellDrilling, title: 'Water Well Drilling', content: 'Luna water will drilling, is one of the recent business unit under Luna import and export. Which had been fully functioning for the past two years, it’s one of the most prominent borehole drilling projects authorized under the Federal Democratic Republic of Ethiopia.', route: '#', last: true, color: 'dark', background: 'waterwell.jpg' },
// 	/**/{ id: 'parts', icon: AutoParts, title: 'LUNA CATERKOMAT MACHINERY', content: 'Luna CATERKOMAT machinery supply is the correspondent business unit of the Luna Export Slaughter House P.L.C. we had been serving the construction industry by supplying original spare parts for construction machineries including dozer, excavator, loader, grader, roller, forklift, generator and generator. Broadening the market freedom of our clients by importing; CATERPILLAR, KOMATSU, CUMMINS, and PERKINS engines approved by the “British quality products”, all the way from Italy.', route: '#', last: true, color: 'dark', background: 'parts.jpg' },
// ]


var aBox = function (element) {
	let box = element.getBoundingClientRect()
	return box
	var top = 0, left = 0;
	do {
		top += element.offsetTop || 0;
		left += element.offsetLeft || 0;
		element = element.offsetParent;
	} while (element);

	return {
		x: top,
		y: left,
		width: box.width,
		height: box.height,
	};
};

const item = (index, child) => aBox(document.querySelector(`#item-${index} ${child}`))
const content = index => item(index, '.content')


const drawPath = () => {
	const listBox = document.getElementById('list-box')
	const list = document.getElementById('list')
	const path = document.querySelector('#list-path path')

	let l = list.getBoundingClientRect()
	let lb = listBox.getBoundingClientRect()
}

onMounted(() => {
	// draw_hexagon()
	drawPath()
})

const draw_hexagon = () => {
	// const svg = document.querySelector(`#my-svg`)
	// const path = document.querySelector(`#my-path`)


	const angle = Math.PI * 60 / 180
	const radius = 0.5
	const offset = radius * 0.2

	const rc = radius * Math.cos(angle)
	const oc = offset * Math.cos(angle)

	const rs = radius * Math.sin(angle)
	const os = offset * Math.sin(angle)

	let r = radius
	let off = offset

	let a = `${rc} 0`
	let a0 = `${rc + off} 0`
	let a1 = `${rc + r - off} 0`

	let b = `${r + rc} 0`
	let b0 = `${r + rc + oc} ${os}`
	let b1 = `${r + 2*rc - oc} ${rs - os}`

	let c = `${r + 2*rc} ${rs}`
	let c0 = `${r + 2*rc - oc} ${rs + os}`
	let c1 = `${r + rc + oc} ${2*rs - os}`

	let d = `${r + rc} ${2*rs}`
	let d0 = `${r + rc - off} ${2*rs}`
	let d1 = `${rc + off} ${2*rs}`

	let e = `${rc} ${2*rs}`
	let e0 = `${rc - oc} ${2*rs - os}`
	let e1 = `${oc} ${rs + os}`

	let f = `0 ${rs}`
	let f0 = `${oc} ${rs - os}`
	let f1 = `${rc - oc} ${os}`


	let _path = `
	M ${a0} L ${a1}
	Q ${b} ${b0}

	M ${b0} L ${b1}
	Q ${c} ${c0}

	M ${c0} L ${c1}
	Q ${d} ${d0}

	M ${d0} L ${d1}
	Q ${e} ${e0}

	M ${e0} L ${e1}
	Q ${f} ${f0}

	M ${f0} L ${f1}
	Q ${a} ${a0}
	`

	off = radius * 0.1

	let width = r + 2*rc
	let height = 2*off + 2*rs

	// path.setAttribute('d', _path)
	// svg.setAttribute('viewBox', `${0} ${-off} ${width} ${height}`)
}

</script>

<template>
	<div id="list-box" class="relative bg-transparent z-0 top-0">
		<div id="list" class="
			relative flex flex-col overflow-hidden
		">

			<svg width="0" height="0">
				<filter id="round">
					<feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="goo" />
					<feComposite in="SourceGraphic" in2="goo" operator="atop"/>
				</filter>
			</svg>

			<div class="
				relative z-10 grid grid-cols-1
			">
				<Item
					v-for="(item, i) in items" :key="item.title"
					:_id="item.id"
					:item="item"
					:left="i % 2 == 0"
					:color="colored ? item.color : 'dark'"
					:nth="i"
				/>
			</div>


		</div>
	</div>
</template>

<style scoped>
.brand-item {
	/* background-color: #00000075; */
	background-attachment: fixed;
	background-blend-mode: darken;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
#my-svg {
	width: 100px;
	height: 100px;
	fill: none;
	stroke: var(--dark);
	stroke-width: 1;
}
</style>