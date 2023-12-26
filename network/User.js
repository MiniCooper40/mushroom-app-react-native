import { get } from "./Network";


async function getAllUsers() {
    return await get("users").then(result => result.json())
}

export {getAllUsers}