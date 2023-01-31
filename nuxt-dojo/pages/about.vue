<template>
	<div>
		<p>product details for</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
			quibusdam nostrum amet ex? Explicabo hic quam labore dolor, eius officiis
			facere dolorum autem voluptas voluptatibus odio, tempore consequuntur
			eveniet ex.
		</p>
		<div>{{ data }}</div>
	</div>
</template>

<script setup>
const { data } = await useFetch('/api/ninja?name=mario')
</script>

<style scoped>
h2 {
	margin-bottom: 20px;
	font-size: 36px;
}
p {
	margin: 20px 0;
}
</style>
