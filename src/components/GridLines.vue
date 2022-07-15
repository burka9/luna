<script setup>
import { onMounted, computed } from 'vue';


const _id = `grid-lines-${Math.random()}`
let svg = null
let box = null


const draw_horizontal = () => {
	for (let i=100; i<parseInt(box.height); i += 100) {
		let text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
		text.innerHTML = `${i}`
		text.setAttribute('x', 10)
		text.setAttribute('y', i)

		let path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
		path.setAttribute('d', `M 0 ${i} L ${500} ${i}`)
		
		svg.appendChild(text)
		svg.appendChild(path)
	}
}

let loaded = false

onMounted(() => {
	loaded = true
	svg = document.getElementById(_id)
	box = svg.getBoundingClientRect()
	// draw_horizontal()
})

const scale = 100

const h_lines = computed(() => {
	return box==null ? 0 :  box.height/scale
})

</script>

<template>
	<svg :id="_id" class="grid-lines" v-if="loaded">
		<text v-for="i in h_lines" :key="i" :x="10" :y="i*scale">{{ i*scale }}</text>
	</svg>
</template>

<style scoped>
.grid-lines {
	border: 10px solid blue;
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 999;
}
path {
	fill: none;
	stroke-width: 5;
	stroke: #101820;
}
</style>