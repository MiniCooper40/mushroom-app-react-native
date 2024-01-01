import {useEffect, useState} from "react"
import {del, get, post, postFormData, RESOURCE_URL} from "./Network"
import {useSession} from "../auth/Auth";
import { Buffer } from "buffer";
import * as ImagePicker from "expo-image-picker";

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

function createPost(files, caption) {
    const formData = new FormData()

    console.log('got files in createPost')

    files.forEach(file => {
        let localUri = file.uri;
        let filename = localUri.split('/').pop();

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;

        console.log({filename, localUri, type})
        // formData.append('files', file.base64)
        formData.append('files', {
            name: filename,
            uri: localUri,
            type: type
        })
    })

    formData.append("caption", caption)

    // console.log('formData', formData)

    return postFormData("posts", formData)
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
            .then(resp => {
                // console.log('got response ', resp)
                return resp.posts
            })
            .then(posts => {
                // console.log('got posts', posts)
                return formatTimestamps(posts)
            })
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
            .then(formatTimestamp)
            .then(formatResource('profile_picture', 'profilePicture'))
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
    // console.log('formatting timestamps', items)
    return items.map(formatTimestamp)
}

function formatResource(resource, newResourceName=resource) {
    return function(item) {
        const formatted = {...item}
        formatted[newResourceName] = RESOURCE_URL + item[resource]

        delete formatted[resource]

        return formatted
    }
}

function formatResources(resource, newResourceName=resource) {
    return function(items) {
        const formatter = formatResource(resource, newResourceName)
        return items.map(formatter)
    }
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

async function postFromCameraMedia() {
    let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
        base64: true
    })

    console.log({ result })
}

async function postFromLibraryMedia() {
    let results = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 1,
    })


    const files = results.assets

    createPost(
        files,
        "Test post"
    )
        .then(resp => resp.json())
        .then(resp => console.log('got post creation response', resp))
        .catch(err => console.log("error while creating post", err))
}


export {
    getUserPosts,
    getPost,
    useExploreFeed,
    usePost,
    likePost,
    useInteractions,
    useComments,
    createPost,
    postFromLibraryMedia,
    postFromCameraMedia
}
