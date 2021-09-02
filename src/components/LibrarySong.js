function LibrarySong({playSong, song}){


    return (
            <div onClick={() => playSong(song)} className={`library-song ${song.active ? 'selected' : ''}`}>
                <img src={song.cover} alt={song.name} />
                <div className="librarysong-info">
                    <h3>{song.name}</h3>
                    <p>{song.artist}</p>
                </div>
            </div>
        )
}

export default LibrarySong;
