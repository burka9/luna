<script setup>

const center = () => {
	let pos = {
		lat: 51.093048,
		lng: 6.84212
	}

	// navigator.geolocation.getCurrentPosition(position => {
	// 	pos.lat = position.coords.latitude
	// 	pos.lng = position.coords.longitude
	// })

	return pos
}

const markers = [
	{
		position: {
			lat: 51.093048,
			lng: 6.84212,
		},
	}
]


</script>

<template>
	<div id="map" class="
		bg-light h-[65vh] flex items-center justify-center
	">

		<GMapMap :center="center()" :zoom="10" map-type-id="terrain">
		</GMapMap>

	</div>
</template>