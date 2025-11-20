export class CurrentWeather {
    async get() {
        const currentWeather = await fetch(
            'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=us&include=current&key=DN7B5PPTW2GKZRF7E8T6Y3UFF&contentType=json'
        );
        return await currentWeather.json();
    }
}
