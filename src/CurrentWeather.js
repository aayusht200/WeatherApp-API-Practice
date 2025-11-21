export class CurrentWeather {
    async get() {
        // 1. Check cache
        const cached = localStorage.getItem('weatherData');
        if (cached) {
            return JSON.parse(cached);
        }

        // 2. Make API call once
        const res = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=us&include=current&key=DN7B5PPTW2GKZRF7E8T6Y3UFF&contentType=json`
        );
        const data = await res.json();

        // 3. Save to cache
        localStorage.setItem('weatherData', JSON.stringify(data));

        return data;
    }
}
