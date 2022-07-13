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


const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt, accusantium unde labore ullam adipisci tempora nihil quibusdam perferendis reprehenderit. Cum ab sapiente minima, illum odit voluptatem quasi.'

const items = [
	{ icon: Kitchen, title: 'Kitchen', content: 'We offer our customers a variety of unique meals and juices at affordable prices. We work hard to continuously provide our customers with ready to eat food', route: '' },
	{ icon: DebreBerhanHoney, title: 'Debre Berhan Honey', content: 'For our state-of-the-art LUNA processing plant bases in Debre Birhan, we are able to receive Fresh Honey direct from the source for our local/global markets.', route: '' },
	{ icon: FreshCorner, title: 'Fresh Corner', content: 'We have 12 Fresh Corner retail stores in different locations of Addis Ababa that offer a wide range of fresh grocery products at a reasonableprice', route: '' },
	{ icon: EzanaWinery, title: 'Ezana Winery', content: 'The semi-arid ago ecologies of our farm give our wine its elegant taste. Our grapes are grown with the utmost care to be healthy and environment friendly', route: '' },
	{ icon: SlaughterHouse, title: 'Slaughter House', content: 'Luna livestock has been a leading supplier of chilled and frozen sheep, goat, beef,and veal from Ethiopia. since 2003', route: '' },
	{ icon: LunaFarms, title: 'Luna Farms', content: 'On a total of 500 hectares of land in Ethiopia\'s Oromia, Tigray, and south regions,the company grows vegetables and fruits.', route: '' },
	{ icon: WaterWellDrilling, title: 'Water Well Drilling', content: 'LUNA Drilling for water wells drilling is one of the borehole drilling contractors in the Federal Democratic Republic of Ethiopia', route: '', last: true },
	{ icon: AutoParts, title: 'Auto Parts', content: lorem.slice(0, lorem.length-68)+'.', route: '', last: true },
]

</script>

<template>
	<div class="
		bg-light flex flex-col relative overflow-hidden
		px-32 py-20
	">

		

		<div class="list grid grid-cols-1 gap-y-10 px-16">
			<Item v-for="(item, i) in items" :key="item.title" :_id="`item-${i}`" :item="item" :left="i%2==0" />
		</div>
		
		
	</div>
</template>