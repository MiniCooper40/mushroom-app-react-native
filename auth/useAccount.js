import { useEffect, useState } from "react";
import { currentUser } from "../network/User";

export default function useAccount(auth) {

    const [account, setAccount] = useState()

    useEffect(() => {

        // console.log('in setAccount useeffect auth is', auth)
        if (auth) currentUser()
            .then(user => user.json())
            .then(user => setAccount(user))
            .catch(err => console.log('error getting user in useAccount', err))

    }, [auth])

    return { account }
}