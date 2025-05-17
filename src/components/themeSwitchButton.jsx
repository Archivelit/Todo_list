import { useState, useEffect } from "react";

import { Sun, Moon } from "lucide-react";

import { StorageWrapper } from "../models/LocalStorage";
import { switchTheme } from "../utils/switchTheme";

import '../styles/components/switchThemeCheckbox.css';

function ThemeSwitchChekbox() {
    const STORAGE = new StorageWrapper();
    const key = 'theme';

    const [lightTheme ,setLightTheme] = useState(() => {
            const theme = STORAGE.get(key);
            return theme ? JSON.parse(theme) : false;
        }
    )

    useEffect(() => {
        switchTheme(lightTheme);
        STORAGE.set(key, lightTheme);
    }, [lightTheme]);

    
    return(
        <div
        className="flex cursor-pointer justify-center items-center text-[var(--text)] fixed size-12 sm:size-10 sm:bottom-0 sm:top-10 bottom-8 right-8 z-[1] before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-[var(--primary)] before:shadow-[0_0_14px_0_var(--text)] before:z-0"
        onClick={() => setLightTheme(!lightTheme)}
        >
            <div className={'z-[1]'} id="icon">
                {lightTheme ? <Sun /> : <Moon />}
            </div>
        </div>
    )
}

export default ThemeSwitchChekbox