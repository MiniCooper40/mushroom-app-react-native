import { View } from "react-native";
import useTheme from "../../style/useTheme";
import Vertical from "./Vertical";

export default function PostContainer({ children = undefined, style = undefined }) {

    const { styles } = useTheme()

    return (
        <View style={styles.postContainer}>
            <Vertical style={styles.mediumGap}>
                {children}
            </Vertical>
        </View>
    )
}