import React from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MyPopup, OWMTileLayer, SearchBar } from "../components";
import GeneralInfo from "../components/GeneralInfo";

const LeafletMap = () => {
  return (
    <MapContainer
      center={[21.0038, 105.839]}
      zoom={13}
      zoomControl={false}
      className="h-full w-full relative"
      style={{ zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="topright" />
      <SearchBar />
      <MyPopup />
      <OWMTileLayer />
      <GeneralInfo />
    </MapContainer>
  );
};

export default LeafletMap;
