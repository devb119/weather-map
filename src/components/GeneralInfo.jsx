import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { getAddress } from "../apis";

const GeneralInfo = () => {
  const [{ latlng }, dispatch] = useStateValue();

  useMapEvents({
    click(e) {
      dispatch({ type: actionType.SET_LAT_LNG, latlng: e.latlng });
    },
  });

  useEffect(() => {
    getAddress(latlng).then((data) =>
      dispatch({ type: actionType.SET_ADDRESS, address: data })
    );
  }, [latlng]);

  return null;
};

export default GeneralInfo;
