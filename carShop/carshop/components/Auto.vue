<script setup>
import { autos } from '~/data'

defineProps({
	auto: {
		type: Object,
		required: true,
	},
})

const ofertado = ref({
	oferta: '',
	numero: '',
})
</script>

<template>
	<Contenedor>
		<NuxtLink :to="`/catalogo/${auto.id}`">
			<div>
				<img :src="auto.img1" />
			</div>
			<div>
				<div>
					<span class="font-bold">Marca:</span>
					<p>
						{{ auto.marca }}
					</p>
				</div>
				<div>
					<span class="font-bold">Modelo:</span>
					<p>
						{{ auto.modelo }}
					</p>
				</div>
				<div>
					<span class="font-bold">Año:</span>
					<p>
						{{ auto.año }}
					</p>
				</div>
			</div>
		</NuxtLink>
		<Boton @click="$emit('open', auto)">Ofertar</Boton>
	</Contenedor>
</template>
