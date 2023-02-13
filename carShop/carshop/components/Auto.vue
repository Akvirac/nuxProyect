<script setup>
import { autos } from '~/data'

defineProps({
	auto: {
		type: Object,
		required: true,
	},
})

const isModalShow = ref(false)

function openModal() {
	isModalShow.value = true
}

function closeModal() {
	isModalShow.value = false
}
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
		<Boton @click="openModal">Ofertar</Boton>
	</Contenedor>
	<div
		v-if="isModalShow"
		class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
	>
		<div
			class="shadow border border-blue-500 shadow-lg modal-container bg-gray-100 w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
		>
			<div class="modal-content py-4 px-6">
				<div class="flex justify-end">
					<Boton class="" @click="closeModal">X</Boton>
				</div>
				<div class="flex justify-center pb-4">
					<p class="font-bold">
						{{ auto.marca }}/{{ auto.modelo }}/{{ auto.año }}
					</p>
					<p></p>
				</div>
				<Input text="Valor de la oferta" type="text" />
				<Input text="Numero de Contacto" type="text" />
				<div class="flex justify-center mt-4">
					<Boton @click="$emit('submit', auto)">Confirmar Oferta</Boton>
				</div>
			</div>
		</div>
	</div>
</template>
