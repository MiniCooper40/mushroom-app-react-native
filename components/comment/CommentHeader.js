import PostProfilePicture from "../post/PostsProfilePicture";
import {Text, View} from "react-native";
import useTheme from "../../style/useTheme";
import {getTimeAgo} from "../../style/DateFormat";

export default function CommentHeader({username, profilePicture, time}) {

    const {styles, colors} = useTheme()

    return (
        <View style={[styles.horizontalFlex, styles.mediumGap]}>
            <PostProfilePicture profilePicture={profilePicture} size={24} />
            <View style={[styles.center, styles.smallGap, styles.horizontalFlex, {justifyContent: 'flex-start'}]}>
                <Text style={{ color: colors.onPrimary }}>{username}</Text>
                <Text style={{ opacity: 0.5, fontSize: 12 }}>{getTimeAgo(time)}</Text>
            </View>
        </View>
    )
}