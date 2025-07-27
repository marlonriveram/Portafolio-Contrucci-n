import { Navigate } from "react-router"
import { useSesion } from "../../hooks/useSesion"

import { ReactNode } from "react";
import { Spinner } from "@chakra-ui/react";

export const Protected = ({ children }: { children: ReactNode }) => {

    const { user, loading } = useSesion()

    if (loading) {
        return <Spinner />
    }
    if (!user) {
        return <Navigate to="/login" />
    }
    return (
        children
    )

}