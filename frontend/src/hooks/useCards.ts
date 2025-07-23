import { Projects } from "../types/project"
import { getCards } from "../services/cardsApi"
import { useQuery } from "@tanstack/react-query"

export const useCards = () => {

  const {
    data = [],           // valor por defecto si aún no hay datos
    isLoading,
    isError,
    error,
  } = useQuery<Projects[]>({
    queryKey: ['projects'],
    queryFn: getCards,
  });

  return {
    dataCard: data,
    loading: isLoading,
    error: isError ? (error as Error) : null,
  };
    
}