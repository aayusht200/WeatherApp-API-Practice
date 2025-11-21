export async function getCurrentCity() {
	const locationData = await getCity()
	return locationData.city
}

async function getCity() {
	const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	}
	const pos = await new Promise((success, err) => {
		navigator.geolocation.getCurrentPosition(success, err, options)
	})
	const locationData = await getLocation(
		pos.coords.latitude,
		pos.coords.longitude,
	)
	return { city: locationData.results[0].components.city }
}
async function getLocation(latitude, longitude) {
	const res = await fetch(
		`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=cfe0703b6e6d4c46911fea3990efaa6c&pretty=1`,
	)
	return await res.json()
}
