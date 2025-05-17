export function switchTheme(lightTheme) {
    if (lightTheme) {
        document.documentElement.style.setProperty('--primary', '#FFF');
        document.documentElement.style.setProperty('--text', '#000');
        document.documentElement.style.setProperty('--secondary', '#f4f4f5');  
    }
    else {
        document.documentElement.style.setProperty('--primary', '#000');
        document.documentElement.style.setProperty('--text', '#FFF');
        document.documentElement.style.setProperty('--secondary', '#020617');
    }
}