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
	<ul class="grid grid-cols-3 gap-4 place-items-center mx-5 mt-5">
		<Propuesta
			v-for="p in propuestas"
			:key="p"
			:propuesta="p"
			@cancel="$emit('cancel', $event)"
		/>
	</ul>
</template>
