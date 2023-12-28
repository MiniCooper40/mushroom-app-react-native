import { useEffect, useState } from "react"
import { get } from "./Network"
import useSession from "../auth/useSession"

function getUserPosts(userId) {
    return get(`posts/user/${userId}`)
}

function getPost(id) {
    return get(`posts/${id}`)
}

function getExploreFeed() {
    return get('posts/explore')
}

function useExploreFeed() {
    const [posts, setPosts] = useState()
    const {token} = useSession()

    useEffect(() => {
        if(token) getExploreFeed()
            .then(resp => resp.json())
            .then(resp => setPosts(resp.posts))
    }, [token])

    return posts
}
export {
    getUserPosts,
    getPost,
    useExploreFeed
}