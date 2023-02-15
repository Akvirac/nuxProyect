<script setup>
defineProps({
	propuestas: {
		type: Object,
		required: true,
	},
	autosSelected: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<ul>
		<Propuesta v-for="p in propuestas" :key="p" :propuesta="p" />
	</ul>
</template>
