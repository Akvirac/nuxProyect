<script setup>
import imagNav from '~/statics/images/ImagenNavBar.png'
</script>
<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="p-4 flex justify-between">
				<ul class="flex gap-4">
					<li><NuxtLink to="./nosotros">Nosotros</NuxtLink></li>
				</ul>
				<ul>
					<li><NuxtLink>Registrarse</NuxtLink></li>
				</ul>
			</nav>
		</header>
		<div>
			<img class="h-auto max-w-full w-full md:max-h-screen" :src="imagNav" />
		</div>
		<div>
			<slot />
		</div>
	</div>
</template>
