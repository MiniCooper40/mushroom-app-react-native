import { View } from "react-native";
import IconButton from "./IconButton";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import useTheme from "../../../style/useTheme";
import Vertical from "../../containers/Vertical";
import {postInteractionColors} from "../../../style/color";

export default function PostInteractionButtons({
                                                   iconSize=28,
                                                   onLike,
                                                   onComment,
                                                   onInsights,
                                                   interactions = {likes: 0, comments: 0, userLikes: false}
}) {
    const { styles } = useTheme()

    const {
        likeIconActive,
        likeIconInactive,
        viewInsightsIcon,
        commentIcon
    } = postInteractionColors

    const {likes, comments, userLikes} = interactions

    return (
        <View style={styles.postInteractionButtonContainer}>
            <Vertical style={{justifyContent: 'center', paddingRight: 10}}>
                <IconButton
                    onClick={onLike}
                    title={`${likes}`}
                    Icon={() => <AntDesign
                        style={styles.postInteractionIconStyle}
                        name="like1"
                        size={iconSize}
                        color={userLikes ? likeIconActive : likeIconInactive}
                    />}
                />
                <IconButton
                    onClick={onComment}
                    title={`${comments}`}
                    Icon={() => <FontAwesome
                        style={styles.postInteractionIconStyle}
                        name="comment"
                        size={iconSize}
                        color={commentIcon}
                    />}
                />
                <IconButton
                    disabled={!onInsights}
                    onClick={onInsights}
                    Icon={() => <AntDesign
                        style={styles.postInteractionIconStyle}
                        name="eye"
                        size={iconSize}
                        color={onInsights ? viewInsightsIcon : viewInsightsIcon + `77`}
                    />}
                />
            </Vertical>
        </View>
    )
}