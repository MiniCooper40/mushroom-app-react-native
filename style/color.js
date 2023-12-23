const OFF_WHITE = '#FEFAE0'
const GREEN = '#606C38'
const DARK_GREEN = '#283618'
const LIGHT_BROWN = '#DDA15E'

const lightThemeColors = {
    primary: OFF_WHITE,
    secondary: GREEN,
    onPrimary: DARK_GREEN,
    onSecondary: OFF_WHITE
}

const darkThemeColors = {
    primary: DARK_GREEN,
    secondary: OFF_WHITE,
    onPrimary: OFF_WHITE,
    onSecondary: DARK_GREEN
}

const colorPalette = {
    light: lightThemeColors,
    dark: darkThemeColors
}

const postInteractionColors = {
    commentIcon: OFF_WHITE,
    likeIconInactive: OFF_WHITE,
    likeIconActive: LIGHT_BROWN,
    viewInsightsIcon: OFF_WHITE,
    iconLabel: OFF_WHITE
}

export {colorPalette, postInteractionColors}