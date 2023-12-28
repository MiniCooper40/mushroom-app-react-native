import PostFeedContainer from "../containers/PostFeedContainer";
import Post from "./Post";

export default function PostFeed({posts}) {
    const url = 'http://192.168.1.101:8080/'
    function generatePosts() {

        // console.log('posts in generatePosts', posts)

        return posts.map(post => {
            // console.log('media for post', post.media)
            let media = post.media.map(media => {
                return {
                    ...media,
                    source: url+media.source
                }
            })
            return <Post 
                key={post['post_id']}
                username={post.username}
                time={post.timestamp}
                media={media}
                interactions={{
                    comments: post.comments,
                    likes: post.likes,
                    userLikes: false
                }}
                caption={post.caption}
                profilePicture={url+post['profile_picture']}
            />
        })
    }

    return (
        <PostFeedContainer>
            {generatePosts()}
        </PostFeedContainer>
    )
}