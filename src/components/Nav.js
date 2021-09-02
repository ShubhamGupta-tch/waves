import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Nav({libraryOpen, setLibraryOpen}){
    const libraryHandler = () => {
        setLibraryOpen(!libraryOpen);
    }

    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={libraryHandler}>
                Library <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
        )
}

export default Nav;
