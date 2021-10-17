import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import {useRef, useState} from 'react';

const Player = ({playSong, currentSong, play, setPlay, audioRef, songs, setCurrentSong}) => {

    // States
    const [currentTime, setCurrentTime] = useState('00:00');
    const [endTime, setEndTime] = useState('00:00');

    // Song Info
    let index = songs.indexOf(currentSong);

    // Refs
    const rangeRef = useRef(null);

    // Event Handlers

    // Handles Play and Pause on click
    const playPauseHandler = () => {
        if(play === true){
            audioRef.current.pause();
            setPlay(false);
        }

        else{
            audioRef.current.play();
            setPlay(true);
        }
    }

    // Updates current time
    const timeUpdate = () => {
        setCurrentTime(fancyTimeFormat(audioRef.current.currentTime));
        rangeRef.current.value = audioRef.current.currentTime;
    }

    // Runs when audio has been loaded
     const audioLoadedHandler = () => {
        timeUpdate();

        setEndTime(fancyTimeFormat(audioRef.current.duration)); // Sets end time

        // Set Range
        rangeRef.current.max = audioRef.current.duration;
     }

     // Change Time / Seek Time
     const changeTimeHandler = () => {
        audioRef.current.currentTime = rangeRef.current.value;
     }

     // Skip Songs
     function skipSongHandler(dir){

        const newIndex = (((index + 1) + 1*dir)%(songs.length+1)) - 1;

        if(newIndex >= 0){
            playSong(songs[newIndex]);
        }
     }


    return (
            <div className="player">

                <div className="time-display">
                    <p>{currentTime}</p>
                    <input style={{background: `linear-gradient(90deg, ${currentSong.color[0]}, ${currentSong.color[1]})`}} onChange={changeTimeHandler} ref={rangeRef} type="range" min="0" step="any"/>
                    <p>{endTime}</p>
                </div>

                <div className="controls">
                    <FontAwesomeIcon className="player_icon" onClick={() => skipSongHandler(-1)} icon={faAngleLeft} size="2x"/>
                    <FontAwesomeIcon onClick={playPauseHandler} icon={play ? faPause : faPlay} size="2x"/>
                    <FontAwesomeIcon onClick={() => skipSongHandler(1)} icon={faAngleRight} size="2x"/>
                </div>

                <audio onEnded={() => skipSongHandler(1)} onTimeUpdate={timeUpdate} onLoadedMetadata={audioLoadedHandler} ref={audioRef} src={currentSong.audio}></audio>

            </div>
        )
}


// 121 sec --> 2:01
function fancyTimeFormat(duration)
{
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

export default Player;
