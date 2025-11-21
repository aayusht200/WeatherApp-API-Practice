export class Giphy {
	async get(value = "weather") {
		const cacheKey = `giphy-${value}`
		const cached = localStorage.getItem(cacheKey)
		if (cached) return JSON.parse(cached)

		const res = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=NbMEdX5Y7aTd0MwSUMN3oXxzl28oLvFb&s=${value}`,
		)

		const data = await res.json()
		localStorage.setItem(cacheKey, JSON.stringify(data))
		return data
	}
}
