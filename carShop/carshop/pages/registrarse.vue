<script setup>
//Imports

import { usuarios } from '~/data'
//Variables creadas

const isCreated = ref(3)

const usersCopy = ref(usuarios)

const user = ref({})

let idNum = 1

//Layout que no es el default

definePageMeta({
	layout: 'login',
})
//Funciones
function handleSubmit() {
	if (
		!user.value.firstName ||
		!user.value.lastName ||
		!user.value.email ||
		!user.value.password ||
		!user.value.confPassword
	) {
		isCreated.value = 0
		return
	}
	if (user.value.password != user.value.confPassword) {
		isCreated.value = 1
		return
	}

	idNum = idNum + 1
	user.id = idNum
	usersCopy.value.push(user)

	isCreated.value = 2

	setTimeout(() => {
		navigateTo('/login')
	}, 3000)
}
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
			<p v-if="isCreated === 2" class="text-green-500">
				Usuario creado con exito!
			</p>
			<p v-if="isCreated === 0" class="text-red-500">
				Hay campos incompletos en el formulario.
			</p>
			<p v-if="isCreated === 1" class="text-red-500">
				Las contraseñas no coinciden
			</p>
			<p v-if="isCreated === 3" class="text-red-500"></p>
		</div>
	</div>
	{{ usersCopy }}
	<!-- {{ user }} -->
</template>
