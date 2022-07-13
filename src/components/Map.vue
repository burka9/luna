<script setup>

let zoom = 15

const center = () => {
	let pos = {
		lat: 9.033140,
		lng: 38.750080
	}

	// navigator.geolocation.getCurrentPosition(position => {
	// 	pos.lat = position.coords.latitude
	// 	pos.lng = position.coords.longitude
	// })

	return pos
}

const markers = [
	{
		id: 'marker-1',
		position: {
			lat: 9.033140,
			lng: 38.755080,
		},
	}
]


</script>

<template>
	<div id="map" class="
		bg-light h-[65vh] flex items-center justify-center
	">

		<GMapMap :center="center()" :zoom="zoom" map-type-id="terrain" class="h-full w-full">
		<GMapMarker v-for="marker in markers" :key="marker.id" :position="marker.position" />
		</GMapMap>

	</div>
</template>