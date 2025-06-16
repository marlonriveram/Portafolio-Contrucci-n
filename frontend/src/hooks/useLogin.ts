import { useState } from "react"
import { authUser } from "../services/authApi"
import { User } from "../schemas/userSchema"

export const useLogin = async (data: User) => {

    try {
        const res = await authUser(data)
        console.log(res)

    } catch (error) {

    }
   
}