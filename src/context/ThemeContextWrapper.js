import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export default function ThemeContextWrapper(props) {
    const [theme, setTheme] = useState(themes.light);

    function changeTheme(theme) {
        setTheme(theme);
        // console.log("updated: ", theme);
        sessionStorage.setItem("theme", theme);
    }

    const navbar = document.getElementById("navB");
    
    useEffect(() => {
        switch (theme) {
            case themes.light:
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                if (navbar !== null) {
                    navbar.classList.remove('navbar-dark');
                    navbar.classList.add('navbar-light');
                }
                break;
            case themes.dark:
            default:
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
                if (navbar !== null) {
                    navbar.classList.add('navbar-dark');
                    navbar.classList.remove('navbar-light');
                }
                break;
        }
    }, [theme, navbar]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}