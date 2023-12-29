import PostFeedContainer from "../containers/PostFeedContainer";
import Post from "./Post";
import {RESOURCE_URL} from "../../network/Network";
import {SheetManager} from "react-native-actions-sheet";
import {getTimeAgo} from "../../style/DateFormat";

export default function PostFeed({posts}) {

    // function onComment(id) {
    //     SheetManager.show('comments-sheet', {
    //         payload: { postId: id, sheetId: 'comments-sheet' }
    //     })
    // }
    function generatePosts() {

        //console.log('posts in generatePosts', posts)

        return posts.map(post => {
            let media = post.media.map(media => {
                return {
                    ...media,
                    source: RESOURCE_URL+media.source
                }
            })
            return <Post 
                key={post['post_id']}
                username={post.username}
                time={getTimeAgo(post.timestamp)}
                media={media}
                interactions={{
                    comments: post.comments,
                    likes: post.likes,
                    userLikes: post['user_likes']
                }}
                caption={post.caption}
                profilePicture={RESOURCE_URL+post['profile_picture']}
                id={post["post_id"]}
                onComment={() => {
                    SheetManager.show('comments-sheet', {
                        payload: { postId: post['post_id'], sheetId: 'comments-sheet' }
                    })
                }}
            />
        })
    }

    return (
        <PostFeedContainer>
            {generatePosts()}
        </PostFeedContainer>
    )
}