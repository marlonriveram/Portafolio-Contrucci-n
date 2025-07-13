import { authUser } from "../services/authApi"
import { User } from "../schemas/userSchema"
import { useMutation } from "@tanstack/react-query"

export const useLogin = () => {
    
    return useMutation({
        mutationFn: (data: User) => authUser(data),
    });

}