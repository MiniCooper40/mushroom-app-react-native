import { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import ActionSheet, { FlatList, SheetManager } from 'react-native-actions-sheet'
import useTheme from '../style/useTheme'
import Comment from '../components/comment/Comment'
import IconButton from '../components/input/buttons/IconButton'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import TextField from '../components/input/text/TextField'
import Comments from '../components/comment/Comments'
import SheetHeader from './SheetHeader'
import IconTextField from '../components/input/text/IconTextField'

export default function CommentsSheet(props) {

    const { styles, colors } = useTheme()

    const { payload } = props
    const { postId, sheetId, commentRepliedTo } = payload

    const [comment, setComment] = useState()


    function createDummyComment() {
        return {
            username: 'Username',
            profilePicture: "https://i.pinimg.com/564x/50/5f/ae/505fae07cccb7098f7e82c82f857b13a.jpg",
            time: '1 hour',
            comment: 'This is a comment. Very cool!',
            commentId: Math.random(),
            numberOfResponses: 1
        }
    }

    function handleExit() {
        if(commentRepliedTo) {
            SheetManager.show('comments-sheet', {
                payload: {postId: postId, sheetId: sheetId}
            })
        }
        else SheetManager.hide(sheetId)
    }

    function onViewResponsesTo(comment) {
        SheetManager.show('comments-sheet', {
            payload: {postId: postId, sheetId: sheetId, commentRepliedTo: comment}
        })
    }



    const comments = []
    for (let i = 0; i < 20; i++) comments.push(createDummyComment())

    return (
        <ActionSheet containerStyle={styles.actionSheet} id={sheetId}>
            <SheetHeader
                title={commentRepliedTo ? 'Replies to' : 'Comments'}
                Icon={
                    commentRepliedTo ?
                    () => <Ionicons name="arrow-back" size={28} color={colors.onPrimary} /> :
                    () => <AntDesign name="close" size={28} color={colors.onPrimary} />} 
                onClickIcon={handleExit}
            />
            {commentRepliedTo &&
                <Comment 
                    username={commentRepliedTo.username}
                    profilePicture={commentRepliedTo.profilePicture}
                    time={commentRepliedTo.time}
                    comment={commentRepliedTo.comment}
                    numberOfResponses={commentRepliedTo.numberOfResponses}
                />
            }
            <Comments
                onViewResponsesTo={onViewResponsesTo}
                comments={comments} 
                commentRepliedTo={commentRepliedTo}
            />
            <IconTextField
                text={comment}
                onTextChange={setComment}
                placeholder='Comment...'
                Icon={() => <Feather name="send" size={24} color={colors.onPrimary} />}
            />
        </ActionSheet>
    )
}