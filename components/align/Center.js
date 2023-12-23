import { View } from "react-native"
import useTheme from "../../style/useTheme"

const Center = ({children, style}) => {

    const {styles} = useTheme()

    return (
        <View style={[styles.center, style]}>
            {children}
        </View>
    )
}

export default Center