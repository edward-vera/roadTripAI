import React, { useState } from "react";
import "./styles/App.css"
import MenuBar from './components/MenuBar'
import MainMenu from "./components/MainMenu";
import LeafletMap from "./components/LeafletMap";
import GetItinerary from "./components/GetItinerary";

function App() {
  return (
    <>
      <MenuBar />
      <LeafletMap />
      <MainMenu />
    </>
  );
}

export default App;
