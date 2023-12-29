import {Text} from "react-native";
import useTheme from "../../style/useTheme";

export default function CommentText({text}) {

    const {styles} = useTheme()

    //console.log('in comment text w/', text)

    return (
        <Text style={styles.commentTextStyle}>{text}</Text>
    )
}