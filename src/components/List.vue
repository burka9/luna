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

const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt, accusantium unde labore ullam adipisci tempora nihil quibusdam perferendis reprehenderit. Cum ab sapiente minima, illum odit voluptatem quasi.'

const items = [
	{ icon: Kitchen, title: 'Kitchen', content: 'We offer our customers a variety of unique meals and juices at affordable prices. We work hard to continuously provide our customers with ready to eat food', route: '/brands' },
	{ icon: FreshCorner, title: 'Fresh Corner', content: 'We have 12 Fresh Corner retail stores in different locations of Addis Ababa that offer a wide range of fresh grocery products at a reasonableprice', route: '/brands' },
	{ icon: SlaughterHouse, title: 'Slaughter House', content: 'Luna livestock has been a leading supplier of chilled and frozen sheep, goat, beef,and veal from Ethiopia. since 2003', route: '/brands' },
	{ icon: DebreBerhanHoney, title: 'Debre Berhan Honey', content: 'For our state-of-the-art LUNA processing plant bases in Debre Birhan, we are able to receive Fresh Honey direct from the source for our local/global markets.', route: '/brands' },
	{ icon: EzanaWinery, title: 'Ezana Winery', content: 'The semi-arid ago ecologies of our farm give our wine its elegant taste. Our grapes are grown with the utmost care to be healthy and environment friendly', route: '/brands' },
	{ icon: LunaFarms, title: 'Luna Farms', content: 'On a total of 500 hectares of land in Ethiopia\'s Oromia, Tigray, and south regions,the company grows vegetables and fruits.', route: '/brands' },
]

const items2 = [
	{ icon: WaterWellDrilling, title: 'Water Well Drilling', content: 'LUNA Drilling for water wells drilling is one of the borehole drilling contractors in the Federal Democratic Republic of Ethiopia', route: '/brands' },
	{ icon: AutoParts, title: 'Auto Parts', content: lorem.slice(0, lorem.length-68)+'.', route: '/brands' },
]

</script>

<template>
	<div class="bg-light flex flex-col relative overflow-hidden">


		<div id="watermark" class="hidden absolute z-[-1	] -top-32 left-16 scroll" data-rate=".4">
			<div class="w-[60vw] relative z-0">
				<Icon :blurry="true" />
			</div>
		</div>
		
		
		<div id="brands" class="scroll
		relative z-10
			hidden grid place-items-center
			xl:gap-6 xl:gap-y-12 xl:p-20 xl:pt-12 xl:px-60
			lg:-gap-2 lg:gap-y-8 lg:p-12 lg:pt-8 lg:px-52
			md:grid-cols-3 md:gap-12 md:gap-y-16 md:p-24 md:pt-6
			sm:grid-cols-2 sm:gap-16 sm:gap-y-8 sm:p-16
			grid-cols-1 gap-16 p-20
		">
			<Item v-for="item in items" :key="item.title" :item="item" />
		</div>
		<div id="brands-2" class="relative z-10
			hidden bg-lighter place-items-center
			xl:gap-1 xl:px-64
			lg:px-56
			md:grid-cols-2 md:gap-32 md:p-24 md:px-60
			grid-cols-1 gap-16 p-20
		">
			<Item v-for="item in items2" :key="item.title" :item="item" :dark="true" data-dark="true" />
		</div>
	</div>
</template>