import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-google-places-autocomplete";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

export default function SearchBar() {
  const map = useMap();
  const [, dispatch] = useStateValue();

  let searchInput;
  useEffect(() => {
    const { searchBox } = new L.Control.GPlaceAutocomplete({
      callback: function (place) {
        var loc = place.geometry.location;
        const latlng = L.latLng(loc.lat(), loc.lng());
        map.setView(latlng, 15, { animate: true });
        dispatch({ type: actionType.SET_LAT_LNG, latlng });
      },
      position: "topleft",
    }).addTo(map);
    searchInput = searchBox;
  }, []);

  useEffect(() => {
    const wrapper = document.querySelector(".leaflet-gac-wrapper");
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", () => (searchInput.value = ""));
    wrapper.appendChild(deleteBtn);
  }, []);
  return null;
}
