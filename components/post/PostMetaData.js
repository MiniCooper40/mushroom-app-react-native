import { Text, View } from "react-native";
import TextButton from "../input/buttons/TextButton";
import useTheme from "../../style/useTheme";

export default function PostMetaData({
    onViewLocation = () => { },
    time,
    location,
    username
}) {

    const {styles} = useTheme()

    return (
        <View>
            <Text style={{ fontWeight: 'bold' }}>{username}</Text>
            <View style={[styles.horizontalFlex, styles.smallGap]}>
                <Text style={styles.postInfoSubtext}>{`${time} ago`}</Text>
            </View>
        </View>
    )
}