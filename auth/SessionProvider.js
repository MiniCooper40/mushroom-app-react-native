import { useState } from "react";
import { useAuth, useToken } from "./Auth";
import SessionContext from "./AuthContext";
import useAccount from "./useAccount";

export default function SessionProvider({children}) {

    const [auth, setAuth] =  useAuth()
    const {account} = useAccount(auth)
    const {token} = useToken(auth)

    return (
        <SessionContext.Provider value={{auth, setAuth, account, token}} >
            {children}
        </SessionContext.Provider>
    )
}