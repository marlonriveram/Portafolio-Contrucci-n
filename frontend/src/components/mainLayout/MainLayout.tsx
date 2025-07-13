import { Outlet, useLocation} from "react-router"
import { NavBar } from "../navBar/Navbar"
import { Container } from "@chakra-ui/react"
import { Footer } from "../footer/Footer"

export const MainLayout = () => {
    const {pathname} = useLocation()
    return (
        <>
            <NavBar />
            <Container >
                <Outlet />
            </Container>
            {pathname != "/login" && <Footer />}
           
        </>
    )
}