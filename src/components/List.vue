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

const colored = false
const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt, accusantium unde labore ullam adipisci tempora nihil quibusdam perferendis reprehenderit. Cum ab sapiente minima, illum odit voluptatem quasi.'

const items = [
	{ icon: Kitchen, title: 'Kitchen', content: 'We offer our customers a variety of unique meals and juices at affordable prices. We work hard to continuously provide our customers with ready to eat food', route: '', color: 'luna-pink' },
	{ icon: DebreBerhanHoney, title: 'Luna Honey', content: 'For our state-of-the-art LUNA processing plant bases in Debre Birhan, we are able to receive Fresh Honey direct from the source for our local/global markets.', route: '', color: 'luna-blue' },
	{ icon: FreshCorner, title: 'Fresh Corner', content: 'We have 12 Fresh Corner retail stores in different locations of Addis Ababa that offer a wide range of fresh grocery products at a reasonableprice', route: '', color: 'luna-green' },
	{ icon: EzanaWinery, title: 'Ezana Winery', content: 'The semi-arid ago ecologies of our farm give our wine its elegant taste. Our grapes are grown with the utmost care to be healthy and environment friendly', route: '', color: 'luna-yellow' },
	{ icon: SlaughterHouse, title: 'Slaughter House', content: 'Luna livestock has been a leading supplier of chilled and frozen sheep, goat, beef,and veal from Ethiopia. since 2003', route: '', color: 'luna-orange' },
	{ icon: LunaFarms, title: 'Luna Farms', content: 'On a total of 500 hectares of land in Ethiopia\'s Oromia, Tigray, and south regions,the company grows vegetables and fruits.', route: '', color: 'luna-red' },
	{ icon: WaterWellDrilling, title: 'Water Well Drilling', content: 'LUNA Drilling for water wells drilling is one of the borehole drilling contractors in the Federal Democratic Republic of Ethiopia', route: '', last: true, color: 'luna-blue' },
	{ icon: AutoParts, title: 'Auto Parts', content: lorem.slice(0, lorem.length - 68) + '.', route: '', last: true, color: 'luna-green' },
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