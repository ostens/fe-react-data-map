import { useEffect, useState } from "react";
import { fetchTideById } from "../utils/api";

function SideBar({ activeStation }) {
  const [tidalHeight, setTidalHeight] = useState(null);
  const [tidalReadingTime, setTidalReadingTime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (activeStation) {
      fetchTideById(activeStation.stationReference).then((tide) => {
        setTidalHeight(tide.value);
        setTidalReadingTime(tide.dateTime);
        setIsLoading(false);
      });
    }
  }, [activeStation]);

  if (isLoading) {
    return (
      <main className="sidebar">
        <h1>Select a station</h1>
      </main>
    );
  }

  return (
    <main className="sidebar">
      <h1>Tidal station</h1>
      <h2>{activeStation.label}</h2>
      <h3>{activeStation.stationReference}</h3>
      <p className="water-level">Water Level: {tidalHeight}m</p>
      <p>{tidalReadingTime}</p>
    </main>
  );
}

export default SideBar;
