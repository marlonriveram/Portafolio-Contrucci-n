import { Box, Button, Container, Group, useBreakpointValue } from "@chakra-ui/react"
import { useNavigate } from "react-router"
import { useSesion } from "../../hooks/useSesion"
import { HamburgerMenu } from "../hamburguerMenu/HamburgerMenu"
import { useLogout } from "../../hooks/useLogout"
import Swal from "sweetalert2"


export const NavBar = () => {
    const router = useNavigate()
    const { user } = useSesion()
    const ismobile = useBreakpointValue({ base: true, md: false })
    const { mutateAsync,isPending } = useLogout()

    const logout = async () => {
        try {
            const res = await mutateAsync()

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Container display={"flex"} justifyContent="space-between" mt={4} >
            <Box onClick={() => router("/")} cursor="pointer"> <p>Henry contrucciones</p></Box>
            {
                !!user
                    ? (
                        <>
                            {
                                !ismobile &&
                                <Group>
                                    <Button
                                        onClick={() => logout()}
                                        cursor="pointer"> <p>cerrar sesión</p></Button>
                                    <Button
                                        onClick={() => router("/panel-admin")}
                                    >Admin</Button>
                                </Group>
                            }
                            {ismobile && <HamburgerMenu />}
                        </>
                    )
                    : <Button onClick={() => router("/login")} cursor="pointer"> <p>Iniciar sesión </p></Button>
            }
        </Container>
    )

}