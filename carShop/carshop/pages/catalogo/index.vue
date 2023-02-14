<script setup>
import { autos } from '~~/data'

const propuestas = ref([])

const autoSelected = ref()

const isActiveTab = ref(true)

const isModalShow = ref(false)

function handleOpen(auto) {
	isModalShow.value = true
	autoSelected.value = auto
	console.log(auto)
}

function activeTab() {
	isActiveTab.value = !isActiveTab.value
}

function handleSubmit() {}

function closeModal() {
	isModalShow.value = false
}
</script>
<template>
	<Modal v-if="isModalShow" @submit="handleSubmit" @close="closeModal" />
	<ul
		class="flex flex-wrap text-sm font-medium text-center ml-2 m-4 gap-4 border-b border-red-700 pb-3"
	>
		<div class="hover:bg-gray-50">
			<li>
				<button @click="activeTab">Catalogo</button>
			</li>
		</div>
		<li>
			<button @click="activeTab">propuestas</button>
		</li>
	</ul>
	<ListaAutos v-if="isActiveTab" @open="handleOpen" />
	<Propuestas v-else />
</template>
