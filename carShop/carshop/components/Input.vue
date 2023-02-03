<script setup>
defineProps({
	type: {
		type: String,
		default: 'text',
	},
	text: {
		type: String,
		default: '',
	},
	action: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="flex flex-col items-center">
		<label class="underline">{{ text }}</label>
		<div class="flex justify-center">
			<input :type="type" />
			<button v-if="action" class="text-xs" @click="$emit('action')">
				<i class="material-icons"> visibility_off</i>
			</button>
		</div>
	</div>
</template>
