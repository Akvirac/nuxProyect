<script setup>
//import de autos desde data.
import { autos } from '~/data'
</script>
<template>
	<!-- Acomodamos el template en grillas de 3 columnas. -->
	<ul class="grid grid-cols-3 gap-4 place-items-center mx-5 mt-5">
		<!-- Creamos el v-for que recorre a autos. -->
		<Auto v-for="a in autos" :key="a" :auto="a" />
	</ul>
</template>
