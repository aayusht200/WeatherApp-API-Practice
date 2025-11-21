import "./style.css"
import { CurrentWeather } from "./CurrentWeather.js"
import { buildApp } from "./homeUI.js"

const weather = new CurrentWeather()
const resetBtn = document.querySelector(".reset")

export async function init() {
	const weatherData = await weather.get()
	buildApp(weatherData)
}

resetBtn.addEventListener("click", resetData)

setInterval(resetData, 5 * 60 * 1000)

async function resetData() {
	localStorage.clear()
	const weatherData = await weather.get()
	buildApp(weatherData)
}

init()
