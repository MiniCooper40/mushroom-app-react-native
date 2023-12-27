import { Text, View } from "react-native";
import { router, useLocalSearchParams, Link } from 'expo-router';
import Post from "../../../components/post/Post";
import { SheetManager } from 'react-native-actions-sheet'
import PostFeedContainer from "../../../components/containers/PostFeedContainer";
import { useEffect, useState } from "react";
import { getPost } from "../../../network/Post";

export default function Page() {

    const params = useLocalSearchParams()
    const { post: postId } = params

    function onComment(id) {
        SheetManager.show('comments-sheet', {
            payload: { postId: id, sheetId: 'comments-sheet' }
        })
    }

    const [post, setPost] = useState()

    useEffect(() => {
        getPost(postId)
            .then(post => post.json())
            .then(post => setPost(post))
    }, [])

    console.log({ post })

    function getMedia() {
        return post.media.map(item => {
            let source = item.source
            return {
                id: item.id,
                source: "http://192.168.1.101:8080/"+source
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
                onComment={() => onComment(1)}
                onLike={() => console.log("liked post")}
                onViewProfile={() => console.log('viewing profile')}
            />
        </PostFeedContainer>
    )
}