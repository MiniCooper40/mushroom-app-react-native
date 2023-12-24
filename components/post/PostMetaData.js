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
            <View style={{ flexDirection: 'row', gap: 3 }}>
                <Text style={styles.postInfoSubtext}>{`${time} ago,`}</Text>
                <TextButton onClick={onViewLocation} text={location} textStyle={[styles.postInfoSubtext, { textDecorationLine: 'underline', }]} />
            </View>
        </View>
    )
}