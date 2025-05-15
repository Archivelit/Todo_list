import { useState, useEffect } from "react"

import { StorageWrapper } from "../models/LocalStorage"
import { switchTheme } from "../utils/switchTheme"

function ThemeSwitchChekbox() {
    const STORAGE = new StorageWrapper()
    const key = 'theme'

    const [lightTheme ,setLightTheme] = useState(() => {
            const theme = STORAGE.get(key)
            return theme ? JSON.parse(theme) : false
        }
    )

    useEffect(() => switchTheme(lightTheme), [lightTheme])

    function handleChekbox() {
        setLightTheme(!lightTheme)
        STORAGE.set(key, !lightTheme)
    }

    STORAGE.get()
    return(
        <>
            <input type="checkbox" id="theme_switcher" 
            checked={lightTheme} onChange={handleChekbox}
            className="fixed bottom-8 right-8 size-12 sm:size-10 sm:bottom-0 sm:top-10"/>
        </>
    )
}

export default ThemeSwitchChekbox