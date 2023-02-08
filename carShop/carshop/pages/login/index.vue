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

const usuario = ref({
	user: '',
	password: '',
})

//FUNCIONES
//Verficacion de usuario y contraseña
function loginVer() {
	let findUser = false
	usuarios.forEach((item) => {
		if (
			usuario.value.user == item.user &&
			usuario.value.password == item.password
		) {
			findUser = true
			return navigateTo('/catalogo')
		}
		console.log(usuario.user)
	})
	if (!findUser) {
		alert('El usuario o contraseña es incorrecto.')
	}
}

// hacemos la funcion para mostrar o no la contraseña.
function showPass() {
	showPassword.value = !showPassword.value
}
</script>

<template>
	<div class="flex justify-center mt-16">
		<div class="p-4 border-2 flex flex-col items-center w-fit">
			<Input text="Usuario" type="text" v-model="usuario.user" class="mr-7" />
			<div>
				<Input
					text="Contraseña"
					:type="showPassword ? 'text' : 'password'"
					v-model="usuario.password"
					:action="true"
					@action="showPass"
				/>
			</div>

			<Boton class="mt-4" @click="loginVer">Logear</Boton>
		</div>
	</div>
</template>
