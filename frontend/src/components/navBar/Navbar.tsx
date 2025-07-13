import { Box, Container} from "@chakra-ui/react"
import { router } from "../../routes/router"
import { useNavigate } from "react-router"

export const NavBar = () => {
    const router = useNavigate()
    return (
        <Container display={"flex"} justifyContent="space-between" mt={4} >
       
            <Box onClick={() => router("/")} cursor="pointer"> <p>Henry contrucciones</p></Box>
            <Box onClick={() => router("/login")}> <p>🔍</p></Box>
      
        </Container>
    )

}