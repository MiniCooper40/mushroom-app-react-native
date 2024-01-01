import { useEffect, useState } from "react"
import { getUserPosts } from "../../network/Post"
import {useSession} from "../../auth/Auth";

export default function useProfileFeed(userId) {
    const [posts, setPosts] = useState([])
    const {token} = useSession()

    useEffect(() => {
        if (token) getUserPosts(userId)
            .then(posts => posts.json())
            .then(body => {
                const {posts} = body
                setPosts(posts)
            })
            .catch(err => console.log('error getting user posts', err))
    }, [token, userId])

    function addPost(post) {
        // console.log('adding post', post)
        setPosts(state => [post, ...state])
    }

    return {posts, addPost}
}