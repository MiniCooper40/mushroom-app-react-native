import { useMemo } from "react"
import useColor from "./useColor"
import { createStyle } from "./style"

const useTheme = () => {
    const colors = useColor()

    return {
        colors: colors,
        styles: useMemo(() => createStyle(colors), [colors, createStyle])
    }
}

export default useTheme