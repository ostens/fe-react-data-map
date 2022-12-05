import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { fetchStations } from "../utils/api";
import { useEffect, useState } from "react";

import React from "react";

function Map({ setActiveStation }) {
  const [stations, setStations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStations().then((stations) => {
      setStations(stations);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <MapContainer center={[55, -1.5]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} />
      {stations.map((station) => {
        return (
          <Marker
            key={station.stationReference}
            position={[station.lat, station.long]}
            eventHandlers={{
              click: () => {
                setActiveStation(station);
              },
            }}
          ></Marker>
        );
      })}
    </MapContainer>
  );
}

export default Map;
