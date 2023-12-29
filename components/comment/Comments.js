import useTheme from "../../style/useTheme"
import Comment from "./Comment"
import ActionSheet, { FlatList, SheetManager } from 'react-native-actions-sheet'
import {RESOURCE_URL} from "../../network/Network";

export default function Comments({ 
    comments, 
    commentRepliedTo, 
    onViewResponsesTo
}) {


    const { styles, colors } = useTheme()

    return (
        <FlatList
            style={[styles.commentSection, {paddingLeft: (commentRepliedTo ? 10 : 0) }]}
            nestedScrollEnabled
            data={comments}
            renderItem={({ item }) => {
                return <Comment
                    username={item.username}
                    profilePicture={RESOURCE_URL+item['profile_picture']}
                    time={item.time}
                    comment={item.content}
                    numberOfResponses={item.numberOfResponses}
                    onViewResponses={() => onViewResponsesTo(item)}
                    key={item.commentId}
                />
            }}
            keyExtractor={item => item.commentId}
        />
    )
}