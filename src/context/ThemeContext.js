import { createContext } from "react";

// import { useAuthValue } from "../auth/AuthContext"

export const themes = {
    dark: 'dark-mode',
    light: 'light-mode'
};

export const ThemeContext = createContext({
    theme: themes.dark,
    changeTheme: () => {}
});