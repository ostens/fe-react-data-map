import "./App.css";
import Map from "./Components/Map";
import SideBar from "./Components/SideBar";
import { useState } from "react";

function App() {
  const [activeStation, setActiveStation] = useState(null);

  return (
    <div className="app">
      <SideBar activeStation={activeStation} />
      <Map setActiveStation={setActiveStation} />
    </div>
  );
}

export default App;
