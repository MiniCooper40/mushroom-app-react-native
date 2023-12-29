import { View } from "react-native";
import useTheme from "../../style/useTheme";

export default function PostImageContainer({children}) {

    const {styles} = useTheme()

    return (
        <View style={styles.center}>
            {children}
        </View>
    )
}