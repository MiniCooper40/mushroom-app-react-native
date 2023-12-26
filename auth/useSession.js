import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useSession() {
    return useContext(AuthContext)
}