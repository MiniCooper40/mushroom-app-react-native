import * as SecureStore from 'expo-secure-store'
import { getAuth, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { router, useLocalSearchParams, Link } from 'expo-router';

const getStoredAuth = () => SecureStore.getItemAsync('auth')
const setStoredAuth = (token) => SecureStore.setItemAsync('auth', token)
const deleteAuth = () => SecureStore.deleteItemAsync('auth')

function useAuth() {

    const [auth, setState] = useState(getAuth())


    function setValue(auth) {
        setState(auth)
    }

    return [auth, setValue]
}

function firebaseSignOut() {
    const auth = getAuth()
    signOut(auth)
}


function useToken(auth) {

    const [token, setToken] = useState()

    useEffect(() => {

        getAuth()
            .onIdTokenChanged(userCredentials => {
                userCredentials
                    .getIdToken()
                    .then(token => setToken(token))
            })

    }, [auth])

    return { token }
}


export { useToken, getStoredAuth, setStoredAuth, deleteAuth, useAuth, firebaseSignOut }