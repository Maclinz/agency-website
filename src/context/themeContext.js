import React, { useContext, useState } from "react"
import themes from "./theme"

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export const useTheme = () =>{
    return useContext(ThemeContext)
}

export const useUpdateTheme = () =>{
    return useContext(ThemeUpdateContext)
}

export const ThemeProvider = ({children}) =>{
    const [selectTheme, setSelectTheme] = useState(0)
    const theme = themes[selectTheme]

    return(
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={setSelectTheme}>
                {
                    children
                }
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}