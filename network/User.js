import {useEffect, useState} from "react";
import {API_URL, get, RESOURCE_URL} from "./Network";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {useSession} from "../auth/Auth";

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
                    .then(resp => resp.status)
                    .then(resp => console.log({ resp }))
                    .catch(err => console.log(`err on server req ${err}`))

            }).then(() => credentials)
        })
        .catch(err => {
            console.log('error while signing in:', err)
        })
}

function useOtherAccount(accountId) {

    const [account, setAccount] = useState()

    useEffect(() => {
        get(`users/${accountId}`)
            .then(resp => resp.json())
            .then(account => {
                setAccount({
                    ...account,
                    profilePicture: RESOURCE_URL + account.profilePicture
                })
            })
            .catch(err => console.log('error while retrieving account: ', err))

    }, [accountId])

    return account
}

function useAccount(auth) {

    const [account, setAccount] = useState()

    useEffect(() => {
        if (auth) currentUser()
            .then(user => user.json())
            .then(user => {
                setAccount({
                    ...user,
                    profilePicture: RESOURCE_URL + user['profilePicture']
                })
            })
            .catch(err => console.log('error getting user in useAccount', err))

    }, [auth])

    return {account}
}

export {
    getAllUsers,
    createUser,
    currentUser,
    useOtherAccount,
    useAccount
}
