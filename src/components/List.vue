<script setup>
import Item from './Item.vue'
import Kitchen from './Brands/Kitchen.vue'
import FreshCorner from './Brands/FreshCorner.vue';
import SlaughterHouse from './Brands/SlaughterHouse.vue';
import DebreBerhanHoney from './Brands/DebreBerhanHoney.vue';
import EzanaWinery from './Brands/EzanaWinery.vue';
import LunaFarms from './Brands/LunaFarms.vue';
import WaterWellDrilling from './Brands/WaterWellDrilling.vue';
import AutoParts from './Brands/AutoParts.vue';
import Icon from './Icon.vue';
import items from '../assets/content/home-brands-1.json'
import items2 from '../assets/content/home-brands-2.json'

const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt, accusantium unde labore ullam adipisci tempora nihil quibusdam perferendis reprehenderit. Cum ab sapiente minima, illum odit voluptatem quasi.'

// const items = [
// 	{
// 		icon: LunaFarms,
// 		title: 'Luna Farms',
// 		content: `Feeding and serving the community a nutritious, affordable, sufficient, and accessible meal daily is our brand's objective.`,
// 		route: '#luna-farm',
// 		color: 'luna-green',
// 		background: 'luna-farm.jpg' },
// 	{
// 		icon: SlaughterHouse,
// 		title: 'Slaughter House',
// 		content: `Leading exporter of Halal meat and meat products to the Middle East and Western Africa.`,
// 		route: '#slaughter-house',
// 		color: 'luna-red',
// 		background: 'slaughter-house.jpg' },
// 	{
// 		icon: FreshCorner,
// 		title: 'Fresh Corner',
// 		content: `pioneer brand in the fresh produce industry where you get all fresh products in one place in the capital city of Ethiopia.`,
// 		route: '#fresh-corner',
// 		color: 'luna-orange',
// 		background: 'fresh-corner.jpg' },
// 	{
// 		icon: Kitchen,
// 		title: 'Fresh Corner Kitchen',
// 		content: `serves great taste from its top-rated restaurant – “The Exclusive” all the way to its fast food section.`,
// 		route: '#kitchen',
// 		color: 'luna-blue',
// 		background: 'kitchen.jpg' },
// 	{
// 		icon: EzanaWinery,
// 		title: 'Ezana Winery',
// 		content: `We give much priority to our production thus the organic soil, harmless fertilizer and pesticide free daily care give our grapes give that mouthwatering taste.`,
// 		route: '#winery',
// 		color: 'luna-pink',
// 		background: 'winery.jpg' },
// 	{
// 		icon: DebreBerhanHoney,
// 		title: 'Luna Honey',
// 		content: `Everything from land selection, beekeeping, bee hiving, production, packing, and distribution is kept under the qualification of high export standards.`,
// 		route: '#honey',
// 		color: 'luna-yellow',
// 		background: 'honey.jpg' },
// ]

// const items2 = [
// 	{
// 		icon: WaterWellDrilling,
// 		title: 'Water Well Drilling',
// 		content: `Luna water will drill, is one of the recent business units under Luna import and export.`,
// 		route: '#waterwell',
// 		last: true,
// 		color: 'dark',
// 		background: 'waterwell.jpg'
// 	},
// 	{
// 		icon: AutoParts,
// 		title: 'LUNA CATERKOMAT',
// 		content: `Luna CATERKOMAT machinery supply is a correspondent business unit of Luna Export Slaughter House PLC serving by supplying original spare parts for construction.`,
// 		route: '#parts',
// 		last: true,
// 		color: 'dark',
// 		background: 'parts.jpg'
// 	},
// ]

</script>

<template>
	<div class="bg-light flex flex-col relative overflow-hidden">


		<div id="watermark" class="hidden absolute z-[-1] -top-32 left-16 scroll" data-rate=".4">
			<div class="w-[60vw] relative z-0">
				<Icon :blurry="true" />
			</div>
		</div>
		
		
		<div id="brands" class="scroll
		relative z-10
			hidden grid place-items-center
			2xl:px-[12vw]
			xl:gap-6 xl:gap-y-12 xl:p-20 xl:pt-12 xl:px-60
			lg:-gap-2 lg:gap-y-8 lg:p-12 lg:pt-8 lg:px-52
			md:grid-cols-3 md:gap-12 md:gap-y-16 md:p-24 md:pt-6
			grid-cols-1 gap-16 p-20
		">
			<Item v-for="(item, i) in items" :key="item.title" :item="item" :_id="`item-${i}`" />
		</div>
		<div id="brands-2" class="relative z-10
			hidden bg-lighter place-items-center
			xl:gap-1 xl:px-64
			lg:px-56
			md:grid-cols-2 md:gap-32 md:p-24 md:px-60
			grid-cols-1 gap-16 p-20
		">
			<Item v-for="(item, i) in items2" :key="item.title" :item="item" :_id="`item-2-${i}`" :dark="true" data-dark="true" />
		</div>
	</div>
</template>
