// This theme provider was inspired by https://medium.com/@roman.sytnyk/managing-colors-and-light-dark-mode-in-react-native-with-typescript-f2f701ba9ffe

import { useState } from "react"
import ThemeContext from "./ThemeContext"
import { colorPalette } from "./color"

const ThemeProvider = ({children}) => {

    const [colors, setColors] = useState(colorPalette.light)

    return (
        <ThemeContext.Provider value={{colors, setColors}}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider