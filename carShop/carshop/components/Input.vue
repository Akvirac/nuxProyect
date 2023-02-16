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
	modelValue: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="flex flex-col items-center">
		<label class="underline">{{ text }}</label>
		<div class="flex justify-center relative">
			<input
				:type="type"
				class="rounded border border-red-400"
				:modelValue="modelValue"
				@input="$emit('update:modelValue', $event.target.value)"
			/>
			<button
				v-if="action"
				class="absolute right-2 text-xs ml-1"
				@click="$emit('action')"
			>
				<i class="material-icons"> visibility_off</i>
			</button>
		</div>
	</div>
</template>
