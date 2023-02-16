<script setup>
//import de usuarios desde data.js
import { usuarios } from '~/data'
// import { User } from '~/types'
//hacemos que no se muestre el layout en esta pagina.
definePageMeta({
	layout: 'login',
})

//VARIABLES
//Variable para mostrar u ocultar password.
const showPassword = ref(false)

const isCreated = ref(2)

const usuario = ref({
	email: '',
	password: '',
})

//FUNCIONES
//Verficacion de usuario y contraseña
function loginVer() {
	let findUser = false
	usuarios.forEach((item) => {
		if (
			usuario.value.email == item.email &&
			usuario.value.password == item.password
		) {
			findUser = true
			isCreated.value = 1
			setTimeout(() => {
				navigateTo('/catalogo')
			}, 2000)
		}
	})
	if (!findUser) {
		isCreated.value = 0
	}
}

// hacemos la funcion para mostrar o no la contraseña.
function showPass() {
	showPassword.value = !showPassword.value
}
</script>

<template>
	<div class="flex justify-center mt-16">
		<div class="p-4 border-2 border-red-700 flex flex-col items-center w-fit">
			<Input text="Email" type="text" v-model="usuario.email" />
			<div>
				<Input
					text="Contraseña"
					:type="showPassword ? 'text' : 'password'"
					v-model="usuario.password"
					:action="true"
					@action="showPass"
				/>
			</div>
			<p v-if="isCreated == 1" class="text-green-500">!Bienvenido¡</p>
			<p v-if="isCreated == 0" class="text-red-700">
				!Usuario y/o contraseña incorrectos¡
			</p>

			<Boton class="mt-4" @click="loginVer">Logear</Boton>
		</div>
	</div>
</template>
