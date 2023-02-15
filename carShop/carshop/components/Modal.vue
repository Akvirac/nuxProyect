<script setup>
const propuesta = ref({})
</script>

<template>
	<div
		class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster pt-8"
	>
		<div
			class="shadow border border-blue-500 shadow-lg modal-container bg-gray-100 w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
		>
			<div class="modal-content py-4 px-6">
				<div class="flex justify-end">
					<Boton @click="$emit('close')">X</Boton>
				</div>
				<div class="flex justify-center pb-4">
					<p class="font-bold">
						<!-- {{ auto.marca }}/{{ auto.modelo }}/{{ auto.año }} -->
					</p>
					<p></p>
				</div>
				<Input
					text="Valor de la oferta"
					type="text"
					v-model="propuesta.oferta"
				/>
				<Input
					text="Numero de Contacto"
					type="text"
					v-model="propuesta.telefono"
				/>
				<div class="flex justify-center mt-4">
					<Boton @click="$emit('submit', propuesta)">Confirmar Oferta</Boton>
				</div>
			</div>
		</div>
	</div>
</template>
