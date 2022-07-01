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
	{ icon: Kitchen, title: 'Kitchen', content: lorem, route: '' },
	{ icon: FreshCorner, title: 'Fresh Corner', content: lorem, route: '' },
	{ icon: SlaughterHouse, title: 'Slaughter House', content: lorem, route: '' },
	{ icon: DebreBerhanHoney, title: 'Debre Berhan Honey', content: lorem, route: '' },
	{ icon: EzanaWinery, title: 'Ezana Winery', content: lorem, route: '' },
	{ icon: LunaFarms, title: 'Luna Farms', content: lorem, route: '' },
]

const items2 = [
	{ icon: WaterWellDrilling, title: 'Water Well Drilling', content: lorem, route: '' },
	{ icon: AutoParts, title: 'Auto Parts', content: lorem, route: '' },
]

const showing = () => console.log('showing')
</script>

<template>
	<div id="brands" class="
		hidden bg-light place-items-center
		xl:gap-20 xl:gap-y-16
		lg:gap-16 lg:gap-y-12 lg:p-24
		md:grid-cols-3 md:gap-24 md:gap-y-16 md:p-24
		sm:grid-cols-2 sm:gap-16 sm:gap-y-8 sm:p-16
		grid-cols-1 gap-16 p-20
	" v-observe-visibility="showing">
		<Item v-for="item in items" :key="item.title" :item="item" />
	</div>
	<div id="brands-2" class="
		hidden bg-dark place-items-center
		xl:gap-24 xl:px-64
		lg:px-56
		md:grid-cols-2 md:gap-32 md:p-24 md:px-60
		grid-cols-1 gap-16 p-20
	">
		<Item v-for="item in items2" :key="item.title" :item="item" :dark="true" />
	</div>
</template>