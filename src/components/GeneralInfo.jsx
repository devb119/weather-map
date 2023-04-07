import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { getAddress, getCurrentWeather, getForecastWeather } from "../apis";

const GeneralInfo = () => {
  const [{ latlng }, dispatch] = useStateValue();

  useMapEvents({
    click(e) {
      dispatch({ type: actionType.SET_LAT_LNG, latlng: e.latlng });
    },
  });

  useEffect(() => {
    dispatch({ type: actionType.SET_IS_LOADING_INFO, isLoadingInfo: true });
    Promise.all([
      getAddress(latlng),
      getCurrentWeather(latlng.wrap().lat, latlng.wrap().lng),
      getForecastWeather(latlng.wrap().lat, latlng.wrap().lng),
    ])
      .then((data) => {
        dispatch({ type: actionType.SET_ADDRESS, address: data[0] });
        dispatch({
          type: actionType.SET_CURRENT_WEATHER,
          currentWeather: data[1],
        });
        console.log(data[1]);
        dispatch({
          type: actionType.SET_FORECAST_DATA,
          forecastData: data[2].list,
        });
      })
      .finally(() =>
        dispatch({ type: actionType.SET_IS_LOADING_INFO, isLoadingInfo: false })
      );
  }, [latlng]);

  return null;
};

export default GeneralInfo;
