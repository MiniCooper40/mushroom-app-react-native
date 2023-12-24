import useTheme from "../../style/useTheme"
import Comment from "./Comment"
import ActionSheet, { FlatList, SheetManager } from 'react-native-actions-sheet'

export default function Comments({ 
    comments, 
    commentRepliedTo, 
    onViewResponsesTo
}) {


    const { styles, colors } = useTheme()

    return (
        <FlatList
            style={{ borderTopColor: colors.onPrimary + '77', borderTopWidth: 1, borderBottomColor: colors.onPrimary + '77', borderBottomWidth: 1, paddingTop: 10, paddingLeft: (commentRepliedTo ? 10 : 0) }}
            nestedScrollEnabled
            data={comments}
            renderItem={({ item }) => {
                return <Comment
                    username={item.username}
                    profilePicture={item.profilePicture}
                    time={item.time}
                    comment={item.comment}
                    numberOfResponses={item.numberOfResponses}
                    onViewResponses={() => onViewResponsesTo(item)}
                />
            }}
            keyExtractor={item => item.commentId}
        />
    )
}