import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faMusic, faSun } from '@fortawesome/free-solid-svg-icons'
import {useState,useEffect} from "react"
import Toggle from "react-toggle";
import "react-toggle/style.css"
import setTheme from "../theme"

function Nav({libraryOpen, setLibraryOpen}){

	const libraryHandler = () => {
        setLibraryOpen(!libraryOpen);
    }

	const [darkMode,setdarkMode] = useState(false)

	const change_dark = (e) => {
		if(darkMode == true){
			setTheme("theme-light")
		}
		else{
			setTheme("theme-dark")
		}
		setdarkMode(!darkMode)
	}

	useEffect(() => {
		if(localStorage.getItem("theme"))
		{
			if(localStorage.getItem("theme") == "theme-dark")
				setdarkMode(true)
			else
				setdarkMode(false)
		}
	},[])

    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={libraryHandler}>
                Library <FontAwesomeIcon icon={faMusic}/>
            </button>
			<Toggle
      			className="dark-mode-toggle"
      			checked={darkMode}
      			onChange={change_dark}
				icons={{ checked: "🌙", unchecked: "🔆" }}
      			aria-label="Dark mode toggle"
    			/>
        </nav>
        )
}

export default Nav;
