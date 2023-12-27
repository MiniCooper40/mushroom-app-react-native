import { get } from "./Network"

function getUserPosts() {
    return get("posts/user")
}

function getPost(id) {
    return get(`posts/${id}`)
}

export {
    getUserPosts,
    getPost
}