import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SongCardContainer from "./containers/SongCardContainer";
import NewSongForm from "./Forms/NewSongForm";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <SongCardContainer  />
      <NewSongForm  />
    </div>
  );
}

export default App;
