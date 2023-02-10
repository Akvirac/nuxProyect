<script setup>
import imagNav from '~/statics/images/ImagenNavBar.png'
</script>
<template>
	<div>
		<div class="border-b-2 border-red-700">
			<header class="shadow-sm bg-white">
				<nav class="p-4 flex justify-between">
					<ul class="flex gap-4">
						<li><NuxtLink to="/catalogo">Catalogo</NuxtLink></li>

						<li><NuxtLink>Propuestas</NuxtLink></li>

						<li><NuxtLink to="/profile">Perfil</NuxtLink></li>

						<li><NuxtLink to="/about">Nosotros</NuxtLink></li>
					</ul>
					<ul>
						<li><NuxtLink to="/login">Cerrar Sesion</NuxtLink></li>
					</ul>
				</nav>
			</header>
		</div>
		<div>
			<img class="h-auto max-w-full w-full md:max-h-screen" :src="imagNav" />
		</div>
		<div>
			<slot />
		</div>
	</div>
</template>
