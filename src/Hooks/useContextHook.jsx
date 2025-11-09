import { useContext } from "react"
import AuthContext from "../AuthContext/AuthContext"

export const useContextHook=()=>{
    const {name}=useContext(AuthContext)
    return {name}
}