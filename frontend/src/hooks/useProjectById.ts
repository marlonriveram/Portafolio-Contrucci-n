import { useQuery } from "@tanstack/react-query"
import { getProjectById } from "../services/getProjectById"

export const useGetProjectById = (id:string) => {
    const {
        data,
        isLoading,
    } = useQuery({
        queryKey: ["projectsById",id],
        queryFn: ({ queryKey }) => getProjectById(queryKey[1]),
    })

    return{ data,isLoading }
}