// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss'],
	//aca lo que hacemos es configurar el head, a nuestra pagina, e importar algunas cosas, como por ejemplo mas abajo, importamos los iconos de google, para que podamos usarlos dentro de nuestro html.
	//Esto funciona globalmente, pero nosotros podemos modificar alguno de ellos, directamente desde sus respectivas paginas tambien.
	app: {
		head: {
			title: 'Nuxt Dojo',
			meta: [
				{
					name: 'description',
					content: 'Everything about Nuxt 3',
				},
			],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
			],
		},
	},
})
