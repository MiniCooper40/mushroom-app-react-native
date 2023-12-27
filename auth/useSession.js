import { useContext } from "react";
import SessionContext from "./AuthContext";

export default function useSession() {
    return useContext(SessionContext)
}