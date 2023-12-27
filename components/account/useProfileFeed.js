import { useEffect, useState } from "react"
import { useToken } from "../../auth/Auth"
import useSession from "../../auth/useSession"
import { getUserPosts } from "../../network/Post"

export default function useProfileFeed(userId) {
    const [posts, setPosts] = useState([])
    const {token} = useSession()

    useEffect(() => {
        console.log('userId is ', userId)
        if (token) getUserPosts(userId)
            .then(posts => posts.json())
            .then(body => {
                const {posts} = body
                console.log('got posts', posts)
                setPosts(posts)
            })
            .catch(err => console.log('error getting user posts', err))
    }, [token, userId])

    return {posts}
}