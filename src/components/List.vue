<script setup>
import Item from './Item.vue'
import Kitchen from './Kitchen.vue'

const lorem = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis sunt, accusantium unde labore ullam adipisci tempora nihil quibusdam perferendis reprehenderit. Cum ab sapiente minima, illum odit voluptatem quasi dolore exercitationem.'

const items = [
	{ icon: Kitchen, title: 'Kitchen', content: lorem, route: '' },
	{ icon: Kitchen, title: 'Fresh Corner', content: lorem, route: '' },
	{ icon: Kitchen, title: 'Slaughter House', content: lorem, route: '' },
	{ icon: Kitchen, title: 'Debre Berhan Honey', content: lorem, route: '' },
	{ icon: Kitchen, title: 'Ezana Winery', content: lorem, route: '' },
	{ icon: Kitchen, title: 'Luna Farms', content: lorem, route: '' },
]

const items2 = [
	{ icon: Kitchen, title: 'Auto Parts', content: lorem, route: '' },
	{ icon: Kitchen, title: 'Auto Parts', content: lorem, route: '' },
]
</script>

<template>
	<div id="brands" class="
		hidden bg-light place-items-center
		md:grid-cols-3 md:gap-24 md:gap-y-16 md:p-24
		grid-cols-1 gap-16 p-20
	">
		<Item v-for="item in items" :key="item.title" :item="item" />
	</div>
	<div id="brands-2" class="
		hidden bg-dark place-items-center
		md:grid-cols-2 md:gap-32 md:p-24 md:px-60
		grid-cols-1 gap-16 p-20
	">
		<Item v-for="item in items2" :key="item.title" :item="item" :dark="true" />
	</div>
</template>