import {useEffect, useState} from "react";
import {API_URL, get, post, RESOURCE_URL} from "./Network";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {useSession} from "../auth/Auth";
import {router} from "expo-router";

async function getAllUsers() {
    return await get("users").then(result => result.json())
}

async function currentUser() {
    return get("users/user")
}

async function createUser(username, email, password) {

    console.log('creating user with', username, email, password)

    return createUserWithEmailAndPassword(getAuth(), email, password)
        .then(credentials => {
            return credentials.user.getIdToken().then(token => {
                // console.log('idtoken', token)
                const url = API_URL + "users"
                console.log({ url })
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
                    .then(() => {
                        const auth = getAuth()
                        console.log('auth after user created in firebase and backend', auth)
                    })
                    .catch(err => console.log(`err on server req ${err}`))

            })
        })
        .catch(err => {
            console.log('error while signing in:', err)
        })
}

function followUser(userId) {
    return post(`users/follow/${userId}`)
}

function useOtherAccount(accountId) {

    const [account, setAccount] = useState()
    const {isFollowing, toggleIsFollowing, setIsFollowing} = useFollow(accountId)

    useEffect(() => {
        get(`users/${accountId}`)
            .then(resp => resp.json())
            .then(account => {
                console.log('got other account: ', account)
                setIsFollowing(account['user_follows'])
                setAccount({
                    ...account,
                    profilePicture: RESOURCE_URL + account.profilePicture
                })
            })
            .catch(err => console.log('error while retrieving account: ', err))

    }, [accountId])

    return {account, isFollowing, toggleIsFollowing}
}

function useAccount(auth) {

    const [account, setAccount] = useState()

    useEffect(() => {
        if (auth) currentUser()
            .then(user => user.json())
            .then(user => {
                console.log('in useAccount, got user', user)
                setAccount({
                    ...user,
                    profilePicture: RESOURCE_URL + user['profilePicture']
                })
            })
            .catch(err => console.log('error getting user in useAccount', err))

    }, [auth])

    return {account}
}

function useFollow(userId, isInitiallyFollowing) {

    const [isFollowing, setIsFollowing] = useState(isInitiallyFollowing)

    function toggleIsFollowing() {
        setIsFollowing(prev => !prev)
        followUser(userId)
            .catch(err => {
                setIsFollowing(prev => !prev)
                console.log('error while following:', err)
            })
    }

    return {isFollowing, toggleIsFollowing, setIsFollowing}
}

export {
    getAllUsers,
    createUser,
    currentUser,
    useOtherAccount,
    useAccount
}
