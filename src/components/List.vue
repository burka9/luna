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

const colored = true
const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt, accusantium unde labore ullam adipisci tempora nihil quibusdam perferendis reprehenderit. Cum ab sapiente minima, illum odit voluptatem quasi.'

const items = [
	/**/{ icon: LunaFarms, title: 'Luna Farms', content: 'Feeding and serving the community a nutritious, affordable, sufficient and accessible meal each and every day is why we function as Luna farm.', route: '', color: 'luna-green' },
	/**/{ icon: SlaughterHouse, title: 'Slaughter House', content: 'Luna slaughterhouse is without any exclamation the leading slaughter supplier in Ethiopia. Boldly known for providing healthy, sufficient, satisfying and organic slaughter products.', route: '', color: 'luna-red' },
	/**/{ icon: FreshCorner, title: 'Fresh Corner', content: 'Fresh corner is a business unit under the mother company (Luna import and export) actively serving the community and envisioning to conquer a sustainable and adequate food supply for the society.', route: '', color: 'luna-orange' },
	/**/{ icon: Kitchen, title: 'Fresh Corner Kitchen', content: 'As an extensively community serving company, one of the other ways we reach out to the society is through our kitchen. Starting from the ingredient of every single meal we serve; quality, freshness and deliverability had been part of our identity.', route: '', color: 'luna-blue' },
	/**/{ icon: EzanaWinery, title: 'Ezana Winery', content: 'We are situated around Quha, mekelle, a place with semi-arid climate and the utmost location to create that elegant taste of grape.', route: '', color: 'luna-pink' },
	/**/{ icon: DebreBerhanHoney, title: 'Luna Honey', content: 'The inspiration of Luna honey came from the idea of “from hive to home”. We wanted to create a platform collectively characterized by originality, trustworthy, transparency and deliverability.', route: '', color: 'luna-yellow' },
	/**/{ icon: WaterWellDrilling, title: 'Water Well Drilling', content: 'Luna water will drilling, is one of the recent business unit under Luna import and export. Which had been fully functioning for the past two years, it’s one of the most prominent borehole drilling projects authorized under the Federal Democratic Republic of Ethiopia.', route: '', last: true, color: 'dark' },
	/**/{ icon: AutoParts, title: 'LUNA CATERKOMAT MACHINERY', content: 'Luna CATERKOMAT machinery supply is the correspondent business unit of the Luna Export Slaughter House P.L.C. we had been serving the construction industry by supplying original spare parts for construction machineries including dozer, excavator, loader, grader, roller, forklift, generator and generator. Broadening the market freedom of our clients by importing; CATERPILLAR, KOMATSU, CUMMINS, and PERKINS engines approved by the “British quality products”, all the way from Italy.', route: '', last: true, color: 'dark' },
]

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
	drawPath()
})

</script>

<template>
	<div id="list-box" class="relative bg-light ">
		<div id="list" class="
			relative flex flex-col relative overflow-hidden
			mx-52 py-20
		">

			<div class="
				relative z-10 grid grid-cols-1 gap-y-10
			">
				<Item
					v-for="(item, i) in items" :key="item.title"
					:_id="`item-${i}`"
					:item="item"
					:left="i % 2 == 0"
					:color="colored ? item.color : 'dark'"
				/>
			</div>


		</div>
	</div>
</template>

<style scoped>
div {
	/* border: 1px solid #0007; */
}
</style>