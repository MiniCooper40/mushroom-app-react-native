import * as SecureStore from 'expo-secure-store'
import { getAuth, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { router, useLocalSearchParams, Link } from 'expo-router';

const getStoredAuth = () => SecureStore.getItemAsync('auth')
const setStoredAuth = (token) => SecureStore.setItemAsync('auth', token)
const deleteAuth = () => SecureStore.deleteItemAsync('auth')

function useAuth() {

    const [auth, setState] = useState(getAuth().currentUser)
   

    function setValue(auth) {
        setState(auth)
    }

    return [auth, setValue]
}

function firebaseSignOut() {
    const auth = getAuth()
    signOut(auth)
}


export { getStoredAuth, setStoredAuth, deleteAuth, useAuth, firebaseSignOut }