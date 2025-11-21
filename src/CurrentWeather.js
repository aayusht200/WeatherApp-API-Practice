import { getCurrentCity } from "./getLocation.js"

export class CurrentWeather {
	async get() {
		let city = await getCurrentCity()
		city = city ? city.replaceAll(" ", "").toLowerCase() : "mumbai"

		const cached = localStorage.getItem("weatherData")
		if (cached) {
			return JSON.parse(cached)
		}

		const res = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=current&key=DN7B5PPTW2GKZRF7E8T6Y3UFF&contentType=json`,
		)

		let data = await res.json()

		data = {
			location: data.address,
			currentConditions: data.currentConditions,
			today: data.days[0],
		}

		localStorage.setItem("weatherData", JSON.stringify(data))

		return data
	}
}
