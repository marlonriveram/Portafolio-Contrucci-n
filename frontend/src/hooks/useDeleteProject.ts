import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeletedProject, deleteProjectById } from "../services/deleteProject"


export const useDeleteProject = () => {

    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ _id, folderName }: DeletedProject) => deleteProjectById({ _id, folderName }),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['projects']}); 
        }
    })
}