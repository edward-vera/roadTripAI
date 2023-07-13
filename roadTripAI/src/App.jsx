import { useState } from "react";
import 'leaflet/dist/leaflet.css'

import "./styles/App.css";

import MenuBar from './components/MenuBar'
import MainMenu from "./components/MainMenu";
import LeafletMap from "./components/LeafletMap";

function App() {
  return (
    <div className="App">
    <MenuBar />
    <LeafletMap/>
    <Results/>
    </div>
  )
}

export default App;
