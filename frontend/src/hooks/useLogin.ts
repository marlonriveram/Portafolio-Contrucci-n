import { authUser } from "../services/login"
import { User } from "../schemas/userSchema"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useLogin = () => {
    
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data: User) => authUser(data),
        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey:["sesion"]})
        }
    });

}