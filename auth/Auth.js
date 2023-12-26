import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react'

const getStoredAuth = () => SecureStore.getItemAsync('auth')
const setStoredAuth = (token) => SecureStore.setItemAsync('auth', token)
const deleteAuth = () => SecureStore.deleteItemAsync('auth')

function useAuth() {

    const [auth, setState] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getStoredAuth()
            .then(auth => {
                setState(auth)
                setStoredAuth(auth)
            })
        setIsLoading(false)
    }, [auth])

    function setValue(auth) {
        setState(auth)
        return setStoredAuth(auth)
    }

    return [auth, setValue]
}

export { getStoredAuth, setStoredAuth, deleteAuth, useAuth }