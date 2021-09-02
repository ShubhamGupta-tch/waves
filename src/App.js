// Import Functionality
import {useState, useRef} from 'react';

// Import Components
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

// Import Data
import chillHop from "./data";

function App() {
  // States
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [libraryOpen, setLibraryOpen] = useState(false);

  // Current Playing song is playing or not
  const [play, setPlay] = useState(false);

  // Refs
  const audioRef = useRef(null); // Current Playing Audio

  // playSong Function
  function playSong(song){
    setCurrentSong(song); // For Player

    // For Library
    setSongs(songs.map(libsong => {
        if(song.id === libsong.id){
            libsong.active = true;
        }

        else{
            libsong.active = false;
        }

        return libsong;
    }))

    // For Playing if it was playing before
    if(play){
        const audio = audioRef.current.play();
        audio.then(() => {
            audioRef.current.play();
        }).catch((err) => {
          audioRef.current.play()
        })
    }
  }


  return (
    <div>
        <div className={`App ${libraryOpen ? 'library-open' : ''}`}>
          <Nav libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen}/>
          <Song currentSong={currentSong} />
          <Player playSong={playSong} songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong} play={play} setPlay={setPlay} audioRef={audioRef} />
        </div>
      <Library playSong={playSong} libraryOpen={libraryOpen} songs={songs}/>
    </div>
  );
}

export default App;
