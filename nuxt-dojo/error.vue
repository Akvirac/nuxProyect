<!-- Al crear esta pagina, lo que hacemos, es que la pagina donde salta el error, sea una pagina custom, mas abajo la podemos estilar y darle el mensaje que nosotros querramos a cada error, siempre recordar que ahcemos el define props para recibir el error. -->
<template>
	<div class="card mt-7 max-w-sm mx-auto text-center">
		<p class="mt-7 text-7x1 font-bold">{{ error.statusCode }}</p>
		<p class="mt-7 text-6x1">Ooops.</p>
		<p class="mt-7">{{ error.message }}</p>
		<button class="btn my-7" @click="handleClearError">Go Home....</button>
	</div>
</template>

<script setup>
//Como llamamos el error para poder utilizarlo en nuestro template.
defineProps(['error'])
//Creamos una funcion que lo que hace es volver a la pagina anterior.
const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>
