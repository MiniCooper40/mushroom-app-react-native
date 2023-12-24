import { View } from "react-native";
import useTheme from "../../style/useTheme";

export default function PostContentContainer({children}) {

    const {styles} = useTheme()

    return (
        <View style={styles.postContentContainer}>
            {children}
        </View>
    )
}