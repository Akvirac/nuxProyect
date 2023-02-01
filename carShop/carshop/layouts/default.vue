<script setup></script>
<template>
	<div>
		<header class="shadow-sm bg-white">
			<nav class="container mx-auto p-4 flex justify-center">
				<ul class="flex gap-4">
					<NuxtLink>
						<li>Principal</li>
					</NuxtLink>
					<NuxtLink>
						<li>Cargar nuevo vehiculo</li>
					</NuxtLink>
					<NuxtLink>
						<li>Autos en venta</li>
					</NuxtLink>
					<NuxtLink>
						<li>Utilitarios en venta</li>
					</NuxtLink>
				</ul>
			</nav>
		</header>
		<div>
			<slot />
		</div>
	</div>
</template>
