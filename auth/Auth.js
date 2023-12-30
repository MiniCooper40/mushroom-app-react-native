import {getAuth, signOut} from 'firebase/auth'
import {useContext, useEffect, useState} from 'react'
import SessionContext from "./AuthContext";

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
                if(userCredentials) userCredentials
                    .getIdToken()
                    .then(token => setToken(token))
            })

    }, [auth])

    return { token }
}

function useSession() {
    return useContext(SessionContext)
}

export {
    useToken,
    useAuth,
    useSession,
    firebaseSignOut
}
