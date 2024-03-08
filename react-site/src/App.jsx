import {useState} from 'react'
import Navbar from "./components/Navbar"
import Site from "./components/Site"
import './App.css'

export default function App() {
    const [darkMode, setDarkMode] = useState(true)
    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Site darkMode={darkMode}/>
        </div>
    )
}