import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SongCardContainer from "./containers/SongCardContainer";
import NewSongForm from "./Forms/NewSongForm";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((resp) => resp.json())
      .then((s) => setSongs(s));
  }, []);

  const submitSong = (song) => {
    fetch("http://localhost:3000/songs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: song.title,
        album: song.album,
      }),
    })
      .then((resp) => resp.json())
      .then((song) => setSongs([...songs, song]));
  };

  return (
    <div className="App">
      <Navbar />
      <SongCardContainer songs={songs} />
      <NewSongForm submitSong={submitSong} />
    </div>
  );
}

export default App;
