import { View } from "react-native";
import IconButton from "./IconButton";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import useTheme from "../../../style/useTheme";
import Vertical from "../../containers/Vertical";

export default function PostInteractionButtons({iconSize=28, onLike, onComment, onInsights, interactions = {likes: 0, comments: 0, userLikes: 0}}) {

    const { colors, styles } = useTheme()

    const {likes, comments, userLikes} = interactions

    const iconStyle = {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3
      }

    return (
        <View style={styles.postInteractionButtonContainer}>
            <Vertical style={{justifyContent: 'center', paddingRight: 10}}>
                <IconButton onClick={onLike} title={`${likes}`} Icon={() => <AntDesign style={iconStyle} name="like1" size={iconSize} color={colors.primary} />} />
                <IconButton onClick={onComment} title={`${comments}`} Icon={() => <FontAwesome style={iconStyle} name="comment" size={iconSize} color={colors.primary} />} />
                <IconButton disabled={!onInsights} onClick={onInsights} Icon={() => <AntDesign iconStyle={iconStyle} style={iconStyle} name="eye" size={iconSize} color={onInsights ? colors.primary : colors.primary + `77`} />} />
            </Vertical>
        </View>
    )
}