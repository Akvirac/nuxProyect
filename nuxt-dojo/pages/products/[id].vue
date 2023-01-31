<template>
	<Head>
		<Title>Nuxt Dojo | {{ product.title }}</Title>
		<Meta name="description" :content="product.description" />
	</Head>
	<div>
		<ProductDetails :product="product" />
	</div>
</template>
<script setup>
//con esta constante lo que hacemos es darle un id a nuestra pagina, para que al entrar nosotros podamos individualiazarla.
const { id } = useRoute().params
//Aca llamamos a la api nuevamente, para luego agregar el producto sumado a su id.
const uri = 'https://fakestoreapi.com/products/' + id

//fetch the product

//Aca volvemos a individualizar el producto, para llamarlo.
const { data: product } = await useFetch(uri)
//de esta forma le decimos que en caso de que product, no tenga ningun valor, lo que procede a hacer es tirar un error. en lugar de ir a algun id que este vacio o que no contenga nada.
if (!product.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Product not found',
		fatal: true,
	})
}

definePageMeta({
	layout: 'products',
})
</script>
