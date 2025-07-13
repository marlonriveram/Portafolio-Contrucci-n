import { useEffect, useState } from "react"
import { Projects } from "../types/project"
import { getCards } from "../services/cardsApi"

export const useCards = () => {

    const [dataCard, setDataCard] = useState<Projects[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const data = await getCards()
                setDataCard(data)
            } catch (error:any) {
                console.error(error.message)
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    return { dataCard, loading,error }
}