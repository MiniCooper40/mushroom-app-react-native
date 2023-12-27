import { get } from "./Network"

function getUserPosts(userId) {
    return get(`posts/user/${userId}`)
}

function getPost(id) {
    return get(`posts/${id}`)
}

export {
    getUserPosts,
    getPost
}