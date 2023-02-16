<script setup>
defineProps({
	propuesta: {
		type: Object,
		required: true,
	},
})
</script>
<template>
	<div
		class="card max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow p-3 text-center md:text-base text-sm"
	>
		<div class="flex justify-center"><img :src="propuesta.auto.img1" /></div>
		<div>
			<p>Valor ofrecido: {{ propuesta.oferta }}</p>
		</div>
		<div>
			<p>Contacto ofrecido: {{ propuesta.telefono }}</p>
		</div>
		<div>
			<p>Esperando respuesta.</p>
		</div>
		<div>
			<Boton @click="$emit('cancel', propuesta)" class="mt-2"
				>Cancelar oferta</Boton
			>
		</div>
	</div>
</template>
