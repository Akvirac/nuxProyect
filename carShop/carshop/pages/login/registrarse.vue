<script setup>
import { usuarios } from '~/data'

definePageMeta({
	layout: 'login',
})

function handleSubmit() {}

const usersCopy = ref(usuarios)

const user = ref({})
</script>

<template>
	<div class="flex justify-center">
		<div
			class="flex flex-col items-center border-2 border-red-700 p-8 space-y-2 mt-16 rounded-lg shadow-md"
		>
			<Input text="Nombre" type="text" v-model="user.firstName" />
			<Input text="Apellido" type="text" v-model="user.lastName" />
			<Input text="Email" type="email" v-model="user.email" />
			<Input text="Contraseña" type="password" v-model="user.password" />
			<Input
				text="Confirmar Contraseña"
				type="password"
				v-model="user.confPassword"
			/>
			<div>
				<Boton class="mt-4" @click="handleSubmit">Enviar</Boton>
			</div>
		</div>
	</div>
	<!-- {{ usersCopy }}
	{{ user }} -->
</template>
