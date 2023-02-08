<script setup>
defineProps({
	type: {
		type: String,
		default: 'button',
	},
})
</script>
<template>
	<button
		:type="type"
		class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 text-center"
	>
		<slot />
	</button>
</template>
