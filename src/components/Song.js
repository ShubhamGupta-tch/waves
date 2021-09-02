const Song = ({currentSong}) => {
    return (
            <div className="song-component">
                <img src={currentSong.cover} alt={currentSong.name} />
                <h1>{currentSong.name}</h1>
                <p>{currentSong.artist}</p>
            </div>
        )
}

export default Song;
