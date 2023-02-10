<script setup>
//imports
// import { usuarios } from '~/data'
//Variables
const usuario = {
	firstName: 'Ariel',
	lastName: 'Vivian',
	email: 'juanarielvivian@gmail.com',
	password: '1234',
	id: 1,
}
</script>
<template>
	<div class="flex justify-center">
		<div
			class="flex flex-col items-center border-2 border-red-700 p-8 space-y-2 mt-8 rounded-lg shadow-md"
		>
			<h3 class="font-bold underline">Nombre</h3>
			<p>{{ usuario.firstName }}</p>
			<h3 class="font-bold underline">Apellido</h3>
			<p>{{ usuario.lastName }}</p>
			<h3 class="font-bold underline">Email</h3>
			<p>{{ usuario.email }}</p>
		</div>
	</div>
</template>
