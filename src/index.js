import './style.css';
import { CurrentWeather } from './CurrentWeather.js';

const weather = new CurrentWeather();
const data = await weather.get();

console.log(data);
