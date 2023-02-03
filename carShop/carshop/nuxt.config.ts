// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		head: {
			title: 'Car Shop',
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
