export class CurrentWeather {
    async get() {
        // 1. Check cache
        const cached = localStorage.getItem('weatherData');
        if (cached) {
            return JSON.parse(cached);
        }
        let value = 'mumbai';
        // 2. Make API call once
        const res = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?unitGroup=us&include=current&key=DN7B5PPTW2GKZRF7E8T6Y3UFF&contentType=json`
        );
        let data = await res.json();
        console.log(data);
        data = { location: data.address, currentConditions: data.currentConditions, today: data.days[0] };
        // 3. Save to cache
        localStorage.setItem('weatherData', JSON.stringify(data));

        return data;
    }
}
