<template>
	<div>
		<!-- Creamos un for, para recorrer los productos que almacenamos en nuestro products, que trajimos de la api externa. -->
		<div class="grid grid-cols-4 gap-5">
			<div v-for="p in products">
				<ProductCart :product="p" />
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'products',
})
//fetch the products, desde aca llamamos a una api, que en este caso seria una que contiene varios items de una tienda de ropa. Lo que hacemos es utiliar la informacion que tiene en nuestra propia pagina.

//De esta forma lo que hacemos es, en una variable, almacenar toda la informacion que contiene la pagina en cuestion. para nosotros poder utilizarla.
const { data: products } = await useFetch('https://fakestoreapi.com/products')

//De esta forma lo que hacemos, es modificar el head(el cual es lo que vemos en la pestaña superior de el navegador.), y su descripcion directamente desde la pagina, sobreescribiendo el header predefinido que creamos en nuxt.config.ts.
useHead({
	title: 'Nuxt Dojo | Merch',
	meta: [{ name: 'description', content: 'Nuxt 3 Merch' }],
})

console.log(products.value)
</script>
