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
	/**/{ icon: LunaFarms, title: 'Luna Farms', content: 'Feeding and serving the community a nutritious, affordable, sufficient and accessible meal each and every day is why we function as Luna farm.', route: '', color: 'luna-green', background: 'luna-farm.jpg' },
	/**/{ icon: SlaughterHouse, title: 'Slaughter House', content: 'Luna slaughterhouse is without any exclamation the leading slaughter supplier in Ethiopia. Boldly known for providing healthy, sufficient, satisfying and organic slaughter products.', route: '', color: 'luna-red', background: 'slaughter-house.jpg' },
	/**/{ icon: FreshCorner, title: 'Fresh Corner', content: 'Fresh corner is a business unit under the mother company (Luna import and export) actively serving the community and envisioning to conquer a sustainable and adequate food supply for the society.', route: '', color: 'luna-orange', background: 'fresh-corner.jpg' },
	/**/{ icon: Kitchen, title: 'Fresh Corner Kitchen', content: 'As an extensively community serving company, one of the other ways we reach out to the society is through our kitchen. Starting from the ingredient of every single meal we serve; quality, freshness and deliverability had been part of our identity.', route: '', color: 'luna-blue', background: 'kitchen.jpg' },
	/**/{ icon: EzanaWinery, title: 'Ezana Winery', content: 'We are situated around Quha, mekelle, a place with semi-arid climate and the utmost location to create that elegant taste of grape.', route: '', color: 'luna-pink', background: 'winery.jpg' },
	/**/{ icon: DebreBerhanHoney, title: 'Luna Honey', content: 'The inspiration of Luna honey came from the idea of “from hive to home”. We wanted to create a platform collectively characterized by originality, trustworthy, transparency and deliverability.', route: '', color: 'luna-yellow', background: 'honey.jpg' },
]

const items2 = [
	/**/{ icon: WaterWellDrilling, title: 'Water Well Drilling', content: 'Luna water will drilling, is one of the recent business unit under Luna import and export. Which had been fully functioning for the past two years, it’s one of the most prominent borehole drilling projects authorized under the Federal Democratic Republic of Ethiopia.', route: '', last: true, color: 'dark', background: 'waterwell.jpg' },
	/**/{ icon: AutoParts, title: 'LUNA CATERKOMAT', content: 'Luna CATERKOMAT machinery supply is the correspondent business unit of the Luna Export Slaughter House P.L.C. we had been serving the construction industry by supplying original spare parts for construction machineries including dozer, excavator, loader, grader, roller, forklift, generator and generator. Broadening the market freedom of our clients by importing; CATERPILLAR, KOMATSU, CUMMINS, and PERKINS engines approved by the “British quality products”, all the way from Italy.', route: '', last: true, color: 'dark', background: 'parts.jpg' },
]

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
