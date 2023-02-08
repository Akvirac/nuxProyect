<script setup>
import { autos } from '~/data'

const { id } = useRoute().params

const uri = '~/data/' + id

const auto = autos.find((auto) => {
	return auto.id == id
	console.log
})
</script>
<template>
	<div class="flex justify-center">
		<div class="grid grid-cols-3 max-w-5xl">
			<Contenedor>
				<img :src="auto.img1" />
				<img :src="auto.img2" />
				<img :src="auto.img3" />
			</Contenedor>
			<Contenedor>
				<div class="py-4 bg-slate-200">
					<h2 class="text-5xl">Marca:</h2>
				</div>
				<div class="py-4">
					<h2 class="text-5xl">Modelo:</h2>
				</div>
				<div class="py-4 bg-slate-200">
					<h2 class="text-5xl">Año:</h2>
				</div>
				<div class="py-4">
					<h2 class="text-5xl">Detalles:</h2>
				</div>
				<div class="py-4 bg-slate-200">
					<h2 class="text-2xl">Motor:</h2>
				</div>
				<div class="py-4">
					<h2 class="text-2xl">Puertas:</h2>
				</div>
				<div class="py-4 bg-slate-200">
					<h2 class="text-2xl">Version:</h2>
				</div>
				<div class="py-4">
					<h2 class="text-2xl">Combustible:</h2>
				</div>
				<div class="py-4 bg-slate-200">
					<h2 class="text-2xl">Transmision:</h2>
				</div>
			</Contenedor>
			<Contenedor>
				<div class="py-4">
					<p class="text-5xl">
						{{ auto.marca }}
					</p>
				</div>
				<div class="py-4 bg-slate-200">
					<p class="text-5xl">
						{{ auto.modelo }}
					</p>
				</div>
				<div class="py-4">
					<p class="text-5xl">
						{{ auto.año }}
					</p>
				</div>
				<div class="py-4 bg-slate-200">
					<p class="text-5xl">-</p>
				</div>
				<div class="py-4">
					<p class="text-2xl">{{ auto.caracteristicas.motor }}</p>
				</div>
				<div class="py-4 bg-slate-200">
					<p class="text-2xl">{{ auto.caracteristicas.puertas }}</p>
				</div>
				<div class="py-4">
					<p class="text-2xl">{{ auto.caracteristicas.version }}</p>
				</div>
				<div class="py-4 bg-slate-200">
					<p class="text-2xl">{{ auto.caracteristicas.combustible }}</p>
				</div>
				<div class="py-4">
					<p class="text-2xl">{{ auto.caracteristicas.transmision }}</p>
				</div>
			</Contenedor>
		</div>
	</div>
</template>
