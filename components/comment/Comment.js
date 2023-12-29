import { Text, View } from "react-native"
import TextButton from "../input/buttons/TextButton"
import useTheme from "../../style/useTheme"
import CommentHeader from "./CommentHeader";
import CommentText from "../typography/CommentText";

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

    return (
        <View style={{ paddingVertical: 6, justifyContent: 'flex-start' }}>
            <CommentHeader
                username={username}
                profilePicture={profilePicture}
                time={time}
            />
            <CommentText text={comment} />
            <View style={[styles.horizontalFlex, styles.mediumGap]}>
                {numberOfResponses !== 0 && <TextButton textStyle={styles.commentInteractionText} onClick={onViewResponses} text={`${numberOfResponses} Response${numberOfResponses===1 ? '' : 's'}`} />}
                <TextButton textStyle={styles.commentInteractionText} onClick={onViewResponses} text="Reply" />
            </View>
        </View>
    )
}