import { useContext } from "react"
import ThemeContext from "./ThemeContext"

const useColor = () => {
    const theme = useContext(ThemeContext)

    return theme.colors
}

export default useColor