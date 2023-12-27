import { BASE_URL, get, post } from "./Network";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

async function getAllUsers() {
    return await get("users").then(result => result.json())
}

async function currentUser() {
    return get("users/user")
}

async function createUser(username, email, password) {
    return createUserWithEmailAndPassword(getAuth(), email, password)
        .then(credentials => {
            return credentials.user.getIdToken().then(token => {
                console.log('idtoken', token)
                const url = BASE_URL+"users"
                console.log({url})
                fetch(url, {
                    method: 'POST',
                    headers: { 
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username
                    })
                })
                .then(resp => resp.status)
                .then(resp => console.log({resp}))
                 .catch(err => console.log(`err on server req ${err}`))

            }).then(() => credentials)
        })
        .catch(err => {
            console.log('error while signing in:', err)
        })
}

export { 
    getAllUsers, 
    createUser, 
    currentUser 
}