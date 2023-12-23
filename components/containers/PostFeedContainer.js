import { ScrollView, View } from "react-native";
import useTheme from "../../style/useTheme";

export default function PostFeedContainer({children}) {

    const {styles} = useTheme()

    return (
        <ScrollView style={styles.postFeedContainer}>
            {children}
        </ScrollView>
    )
}