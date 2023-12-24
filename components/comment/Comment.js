import { Text, View } from "react-native"
import PostProfilePicture from "../post/PostsProfilePicture"
import TextButton from "../input/buttons/TextButton"
import useTheme from "../../style/useTheme"

export default function Comment({
    profilePicture,
    time,
    username,
    comment,
    numberOfResponses = 0,
    onViewResponses = () => { },
    onLeaveReply = () => { }
}) {

    const { styles, colors } = useTheme()

    const textStyle = {
        color: colors.onPrimary,
        fontSize: 16
    }

    const commentInteractionText = { 
        color: colors.onPrimary, 
        opacity: 0.5, 
        textDecorationLine: 'underline', 
        textAlign: 'left',
        fontSize: 12 
    }

    return (
        <View style={{ paddingVertical: 6, justifyContent: 'flex-start' }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <PostProfilePicture profilePicture={profilePicture} size={24} />
                <View style={{ flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: colors.onPrimary }}>{username}</Text>
                    <Text style={{ opacity: 0.5, fontSize: 12 }}>{`${time} ago`}</Text>
                </View>
            </View>
            <Text style={textStyle}>{comment}</Text>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                {numberOfResponses !== 0 && <TextButton textStyle={commentInteractionText} onClick={onViewResponses} text={`${numberOfResponses} Response${numberOfResponses===1 ? '' : 's'}`} />}
                <TextButton textStyle={commentInteractionText} onClick={onViewResponses} text="Reply" />
            </View>
        </View>
    )
}