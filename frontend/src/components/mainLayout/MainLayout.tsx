import { Outlet, useLocation} from "react-router"
import { NavBar } from "../navBar/Navbar"
import { Container } from "@chakra-ui/react"
import { Footer } from "../footer/Footer"
import { useSesion } from "../../hooks/useSesion"

export const MainLayout = () => {
    const {pathname} = useLocation()
    const { user } = useSesion()
    
    return (
        <>
            <NavBar user={user}/>
            <Container >
                <Outlet />
            </Container>
            {pathname != "/login" && <Footer />}
           
        </>
    )
}