import { TileLayer } from "react-leaflet";
import { useStateValue } from "../context/StateProvider";
import { OWM_API_KEY } from "../apis";

const OWMTileLayer = () => {
  const [{ mapMode }] = useStateValue();

  return mapMode.layer ? (
    <TileLayer
      url={`https://tile.openweathermap.org/map/${mapMode.layer}/{z}/{x}/{y}.png?appid=${OWM_API_KEY}`}
    />
  ) : null;
};

export default OWMTileLayer;
