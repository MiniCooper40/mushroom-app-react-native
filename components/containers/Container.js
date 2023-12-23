import { View } from "react-native"
import useTheme from "../../style/useTheme"

const Container = ({children,style}) => {

    const {styles} = useTheme()

    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    )

}

export default Container