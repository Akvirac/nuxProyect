<script setup>
defineProps({
	propuesta: {
		type: Object,
		required: true,
	},
})
</script>
<template>
	<h2>{{ propuesta }}</h2>
</template>
