import { router, useLocalSearchParams } from 'expo-router';
import Post from "../../../components/post/Post";
import { SheetManager } from 'react-native-actions-sheet'
import PostFeedContainer from "../../../components/containers/PostFeedContainer";
import { usePost } from "../../../network/Post";
import Loading from "../../../components/loading/Loading";
import {RESOURCE_URL} from "../../../network/Network";

export default function Page() {

    const params = useLocalSearchParams()
    const { post: postId } = params

    const post = usePost(postId)

    function onComment(id) {
        SheetManager.show('comments-sheet', {
            payload: { postId: postId, sheetId: 'comments-sheet' }
        })
    }

    function getMedia() {
        return post.media.map(item => {
            let source = item.source
            return {
                id: item.id,
                source: RESOURCE_URL+source
            }
        })
    }

    if (post) return (
        <PostFeedContainer>
            <Post
                username={post.username}
                caption={post.caption}
                interactions={{comments: post.comments, likes: post.likes, userLikes: false}}
                media={getMedia()}
                onComment={onComment}
                onLike={() => console.log("liked post")}
                onViewProfile={(() => router.replace(`account/${post['user_id']}`))}
                profilePicture={RESOURCE_URL+post['profile_picture']}
            />
        </PostFeedContainer>
    )
    else return <Loading />
}