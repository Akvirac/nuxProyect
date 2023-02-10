<script setup>
const oferta = {
	total: '',
	contacto: '',
}
</script>
<template>
	<Input text="Oferta" v-model="oferta.total"></Input>
	<Input text="Telefono de contacto" v-model="oferta.contacto"></Input>
	<Boton>Enviar oferta</Boton>
</template>
