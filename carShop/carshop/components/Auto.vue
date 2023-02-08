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
			<img :src="auto.img1" />
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
		<Boton class="mt-2">Ofertar</Boton>
	</Contenedor>
</template>
