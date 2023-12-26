import { useState } from "react";
import AuthContext from "./AuthContext";
import { useAuth } from "./Auth";

export default function AuthProvider({children}) {

    const [auth, setAuth] =  useAuth()

    return (
        <AuthContext.Provider value={{auth, setAuth}} >
            {children}
        </AuthContext.Provider>
    )
}