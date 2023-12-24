import { Text } from "react-native";
import useTheme from "../../style/useTheme";

export default function PostCaption({caption}) {

    const {styles} = useTheme()

    return (
        <Text style={styles.postCaption}>
            {caption}
        </Text>
    )
}