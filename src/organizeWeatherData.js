export function organizeWeatherData(weatherData) {
	const data = {
		location: weatherData.location,
		currentTemp: toCelsius(weatherData.currentConditions.temp),
		date: new Date().toLocaleDateString("en-IN"),
		average: toCelsius(weatherData.today.temp),
		min: toCelsius(weatherData.today.tempmin),
		max: toCelsius(weatherData.today.tempmax),
		feels: toCelsius(weatherData.currentConditions.feelslike),
		rain: toPercentage(weatherData.currentConditions.precipprob),
		sunrise: weatherData.today.sunrise,
		sunset: weatherData.today.sunset,
		value: currentCondition(toCelsius(weatherData.currentConditions.feelslike)),
	}
	return data
}

function toCelsius(currentTemp) {
	return ((currentTemp - 32) / 1.8).toFixed(1)
}
function toPercentage(value) {
	return (value / 100).toLocaleString("en-US", { style: "percent" })
}

function currentCondition(temp) {
	if (temp >= 37) return "scorching"
	if (temp >= 34) return "hot"
	if (temp >= 30) return "sunny"
	if (temp >= 24) return "perfect"
	if (temp >= 18) return "cool"
	if (temp <= 17) return "cold"
}
