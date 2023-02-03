<script setup>
defineProps({
	auto: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<Contenedor>
		<div>
			<img :src="auto.img" />
		</div>
		<div>
			<div>
				<span class="font-bold">Marca:</span>
				<p>
					{{ auto.marca }}
				</p>
			</div>
			<div>
				<span class="font-bold">Modelo:</span>
				<p>
					{{ auto.modelo }}
				</p>
			</div>
			<div>
				<span class="font-bold">Año:</span>
				<p>
					{{ auto.año }}
				</p>
			</div>
		</div>

		<div>
			<p class="font-bold">Caracteristicas:</p>
			<p>
				<span class="text-xs font-bold">Motor: </span>
				{{ auto.caracteristicas.motor }}
			</p>
			<p>
				<span class="text-xs font-bold">Puertas: </span>
				{{ auto.caracteristicas.puertas }}
			</p>
			<p>
				<span class="text-xs font-bold">Version: </span>
				{{ auto.caracteristicas.version }}
			</p>
			<p>
				<span class="text-xs font-bold">Combustible: </span>
				{{ auto.caracteristicas.combustible }}
			</p>
			<p>
				<span class="text-xs font-bold">Transmision: </span>
				{{ auto.caracteristicas.transmision }}
			</p>
		</div>

		<Boton class="mt-2">Ofertar</Boton>
	</Contenedor>
</template>
