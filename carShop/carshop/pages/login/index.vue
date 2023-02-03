<script setup>
//import de usuarios desde data.js
import { usuarios } from '~/data'
//hacemos que no se muestre el layout en esta pagina.
definePageMeta({
	layout: false,
})

//VARIABLES
//Variable para mostrar u ocultar password.
const showPassword = ref(false)
//Variable de comprobacion usuario.
const usuario = ref('')
//variable de comprobacion password.
const password = ref('')

//FUNCIONES
//Verficacion de usuario y contraseña
function loginVer() {}
//hacemos la funcion para mostrar o no la contraseña.
function showPass() {
	showPassword.value = !showPassword.value
}
</script>

<template>
	<div class="flex justify-center h-screen items-center">
		<div class="p-4 border-2 flex flex-col items-center w-fit">
			<Input text="Usuario" type="text" v-model="usuario" />
			<div>
				<Input
					text="Contraseña"
					:type="showPassword ? 'text' : 'password'"
					v-model="password"
					:action="true"
					@action="showPass"
				/>
			</div>

			<Boton @click="loginVer">Logear</Boton>
		</div>
	</div>
</template>
