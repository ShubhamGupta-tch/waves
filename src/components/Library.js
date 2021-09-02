import LibrarySong from "./LibrarySong";

function Library({playSong, songs, libraryOpen}){
    return (
            <div className={`library ${libraryOpen ? 'libopen' : ""}`}>
            <h2>Library</h2>
                {songs.map((song) => {
                    return <LibrarySong playSong={playSong} key={song.id} song={song}/>
                })}

            <p className="credits">A Shubham Gupta's Creation</p>
            </div>
        )
}

export default Library;
