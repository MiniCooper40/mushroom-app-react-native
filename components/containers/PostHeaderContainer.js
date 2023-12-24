import { View } from "react-native";
import useTheme from "../../style/useTheme";

export default function PostHeaderContainer({children}) {

    const {styles} = useTheme()

    return (
        <View style={styles.postHeaderContainer}>
            {children}
        </View>
    )
}