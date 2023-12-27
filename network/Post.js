import { get } from "./Network"

function getUserPosts() {
    return get("posts/user")
}

export {
    getUserPosts
}