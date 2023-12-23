import { View } from "react-native";
import useTheme from "../../style/useTheme";
import Vertical from "./Vertical";

export default function PostContainer({ children = undefined, style = undefined }) {

    const { styles } = useTheme()

    return (
        <View style={styles.postContainer}>
            <Vertical style={{ gap: 8 }}>
                {children}
            </Vertical>
        </View>
    )
}