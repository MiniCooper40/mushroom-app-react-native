import { useEffect, useState } from "react"
import { getPost } from "../../network/Post"

export default function usePost(postId) {
    const [post, setPost] = useState()

    useEffect(() => {
        setPost(undefined)
        getPost(postId)
            .then(post => post.json())
            .then(post => setPost(post))
    }, [postId])

    return post
}