# WeatherApp – API Practice

A simple front-end **weather app** built as a portfolio project to demonstrate working with APIs, caching, geolocation, and dynamic UI updates.

**GitHub Repository:** [WeatherApp‑API‑Practice](https://github.com/aayusht200/WeatherApp-API-Practice)  
**Live Demo:** [WeatherApp on GitHub Pages](https://aayusht200.github.io/WeatherApp-API-Practice/)

---

## Features

- Detects the user's **current city** using the browser Geolocation API.  
- Converts coordinates into a city name via the **OpenCage Geocoding API**.  
- Fetches weather data from the **Visual Crossing Weather API** for the detected city.  
- Displays:
  - Current temperature  
  - Average / Min / Max temperature  
  - Feels like temperature  
  - Chance of rain  
  - Sunrise and sunset times  
- Dynamically sets the background image based on current weather using the **Giphy API**.  
- Uses `localStorage` to cache API responses and reduce network requests.  
- Provides a "Fetch Current Data" button to manually refresh data.  
- Auto-refreshes weather data every 5 minutes.

---

## How It Works

1. **Get City**  
   - `getCurrentCity()` gets the user’s location (`latitude`, `longitude`) using Geolocation API.  
   - It then calls the OpenCage API to resolve those coordinates to a city name.

2. **Fetch Weather**  
   - `CurrentWeather.get()` checks `localStorage` for cached weather data.  
   - If not present, it fetches fresh weather data for the city from Visual Crossing.  
   - The fetched JSON is then stored in `localStorage` for future use.

3. **Process Weather Data**  
   - `organizeWeatherData()` formats the raw API response.  
   - Converts temperature from Fahrenheit to Celsius.  
   - Calculates rain probability as a percentage.  
   - Determines a “weather value” for fetching a relevant Giphy image (e.g. `"hot"`, `"cold"`, `"perfect"`).

4. **Render UI**  
   - `buildApp()` takes the processed data and updates the DOM.  
   - The background image of the page is set using a Giphy GIF based on the weather value.  
   - Weather details are displayed (location, temperature, etc.)

5. **Cache & Refresh**  
   - Weather data is stored in `localStorage`.  
   - Clicking **“Fetch Current Data”** clears the cache and fetches new data.  
   - The app also auto-fetches updated data every 5 minutes.

---

## Installation / Running Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/aayusht200/WeatherApp-API-Practice.git
   ```

2. **Open** `index.html` in your browser.  
   - Make sure to run from `localhost` or use a simple static server to avoid geolocation issues.  
   - Allow location access when prompted.

3. **API Keys**  
   The project uses:
   - Visual Crossing Weather API  
   - OpenCage Geocoding API  
   - Giphy API  

   *(If you fork this project, replace the API keys in the code with your own.)*

---

## Skills Used / Demonstrated

- JavaScript: async/await, Promises, modules  
- Working with external APIs (weather, geocoding, Giphy)  
- Browser APIs: Geolocation, `localStorage`  
- DOM manipulation / updating UI dynamically  
- Data transformation and processing  
- Responsive design with CSS Grid & Flexbox  
- Basic caching strategy in browser

---

## License

MIT License – feel free to reuse or modify as you like.

---

## Author

**Aayush T.**  
Front‑end Developer in Training — building portfolio apps with API integrations