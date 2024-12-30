import axios from "axios";

export const WeatherService = {
  async getcurrentWeather(coordinates){
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}`);
  }
}
