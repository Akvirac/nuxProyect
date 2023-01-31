const name = ''

export default defineEventHandler((event) => {
	//handler query params
	const { name } = useQuery(event)

	return {
		message: `Hello, ${name}`,
	}
})
