import { View } from "react-native"
import useTheme from "../../style/useTheme"

export default function PostInfoContainer({ children }) {

    const {styles} = useTheme()

    return (
        <View style={styles.postInfoContainer}>
            {children}
        </View>
    )
}