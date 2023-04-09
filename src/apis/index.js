import { CURRENT_WEATHER_API, WEATHER_FORECAST_API } from "./baseUrl";
import axios from "axios";

export const OWM_API_KEY = import.meta.env.VITE_OWM_API_KEY;

const geocoder = new google.maps.Geocoder();

export const getAddress = async (latlng) => {
  try {
    const { results } = await geocoder.geocode({ location: latlng.wrap() });
    if (results[0]) {
      return results.length >= 2
        ? results[1].formatted_address
        : results[0].formatted_address;
    } else {
      return "Cannot locate address.";
    }
  } catch (err) {
    window.alert("Geocoder failed due to: " + err);
  }
};

export const getCurrentWeather = async (lat, lon) => {
  try {
    const url = `${CURRENT_WEATHER_API}?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`;
    const res = await axios(url);

    if (res.status !== 200) return null;
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getForecastWeather = async (lat, lon, limit = 10) => {
  try {
    const url = `${WEATHER_FORECAST_API}?lat=${lat}&lon=${lon}&cnt=${limit}&appid=${OWM_API_KEY}`;
    const res = await axios(url);
    if (res.status !== 200) return null;
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
