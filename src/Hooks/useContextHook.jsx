import { useContext } from "react"
import AuthContext from "../AuthContext/AuthContext"

export const useContextHook=()=>{
    const {googleLogin,createEmailPasswordUser}=useContext(AuthContext)
    return {googleLogin,createEmailPasswordUser}
}