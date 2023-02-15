<script setup>
import { autos } from '~~/data'

const propuestas = ref([])

const autosSelected = ref([])

const autoSelected = ref({})

const isActiveTab = ref(true)

const isModalShow = ref(false)

function handleOpen(auto) {
	isModalShow.value = true
	autoSelected.value = auto

	console.log(auto)
}

function activeTab() {
	isActiveTab.value = true
}
function activeTabProp() {
	isActiveTab.value = false
}

function handleSubmit(propuesta) {
	propuesta.auto = autoSelected.value
	propuestas.value.push(propuesta)

	console.log(propuesta)
	isModalShow.value = false
}

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
			<button @click="activeTabProp">Propuestas</button>
		</li>
	</ul>
	<ListaAutos v-if="isActiveTab" @open="handleOpen" />
	<Propuestas v-else :propuestas="propuestas" />
</template>
