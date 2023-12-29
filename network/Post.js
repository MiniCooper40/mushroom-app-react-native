import {useEffect, useState} from "react"
import {del, get, post} from "./Network"
import {useSession} from "../auth/Auth";

function getUserPosts(userId) {
    return get(`posts/user/${userId}`)
}

function likePost(postId) {
    return post(`posts/likes/${postId}`)
}

function getPost(id) {
    return get(`posts/${id}`)
}

function getExploreFeed() {
    return get('posts/explore')
}

function getCommentsOnPost(postId) {
    return get(`posts/comments/post/${postId}`)
}

function commentOnPost(postId, comment) {
    return post("posts/comments", {
        body: {
            content: comment,
            'post_id': postId,
            'responded_to_id': null
        }
    })
}

function deleteUserComment(commentId) {
    return del(`posts/comments/${commentId}`)
}

function useExploreFeed() {
    const [posts, setPosts] = useState()
    const {token} = useSession()

    useEffect(() => {
        if(token) getExploreFeed()
            .then(resp => resp.json())
            .then(resp => resp.posts)
            .then(formatTimestamps)
            .then(setPosts)
    }, [token])

    return posts
}

function usePost(postId) {
    const [post, setPost] = useState()

    useEffect(() => {
        setPost(undefined)
        getPost(postId)
            .then(post => post.json())
            .then(post => setPost(post))
    }, [postId])

    return post
}

function useInteractions(postId, interactions={comments: 0, likes: 0, userLikes: false}) {

    const [currentInteractions, setCurrentInteractions] = useState(interactions)
    function toggleLiked() {
        setCurrentInteractions(state => {
            if(state.userLikes) return {
                ...state,
                userLikes: false,
                likes: state.likes-1
            }
            else return {
                ...state,
                userLikes: true,
                likes: state.likes+1
            }
        })
    }

    function incrementComments() {
        setCurrentInteractions(state => {
            return {
                ...state,
                comments: state.comments+1
            }
        })
    }

    function decrementComments() {
        setCurrentInteractions(state => {
            return {
                ...state,
                comments: state.comments-1
            }
        })
    }

    function handleLikeAction() {
        toggleLiked()
        likePost(postId)
            .catch(err => {
                console.log("error while liking", err)
                toggleLiked()
            })
    }

    return {
        incrementComments,
        decrementComments,
        handleLikeAction,
        currentInteractions
    }
}

function formatTimestamp(item) {
    return {
        ...item,
        timestamp: new Date(item['timestamp'])
    }
}
function formatTimestamps(items) {
    return items.map(formatTimestamp)
}

function useComments(postId) {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getCommentsOnPost(postId)
            .then(resp => resp.json())
            .then(resp => {
                //console.log('got retrieve comments response', resp)
                setComments(formatTimestamps(
                    resp['comments']
                ))
            })
            .catch(err => console.log('error while getting comments', err))
    }, []);

    function createComment(comment) {
        commentOnPost(postId, comment)
            .then(resp => resp.json())
            .then(resp => {
                //console.log('got create comment response', resp)
                setComments(state => {
                    return [...state, formatTimestamp(resp['comment'])]
                })
            })
            .catch(err => console.log('error creating comment', err))
    }

    function deleteComment(commentId) {
        deleteUserComment(commentId)
            .then(() => {
                setComments(state => {
                    return [...state].filter(comment => comment.id === commentId)
                })
            })
            .catch(err => console.log('error deleting comment', err))
    }

    return {
        comments,
        createComment,
        deleteComment
    }
}

export {
    getUserPosts,
    getPost,
    useExploreFeed,
    usePost,
    likePost,
    useInteractions,
    useComments
}
