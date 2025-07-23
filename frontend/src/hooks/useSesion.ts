import { useQuery } from "@tanstack/react-query"
import { sesion } from "../services/sesion"

export const useSesion = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["sesion"],
        queryFn: sesion,
    })
    return {
        user: data,
        loading: isLoading,
        error: isError
    }
}