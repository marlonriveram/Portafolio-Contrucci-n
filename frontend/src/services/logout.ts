import axios from "axios"
import { LogoutResponse } from "../types/api"

export const logout = async():Promise<LogoutResponse>  =>{
    try {
        const res = await axios.post<LogoutResponse>("http://localhost:3000/api/auth/logout",{},{withCredentials:true})
        return res.data
    } catch (error) {
        throw error
    }
}