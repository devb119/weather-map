import {} from "./baseUrl";
import axios from "axios";

const OWM_API_KEY = import.meta.env.VITE_OWM_API_KEY;

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
