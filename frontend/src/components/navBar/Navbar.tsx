import { Box, Button, Container, Group, Spinner, useBreakpointValue } from "@chakra-ui/react"
import { useNavigate } from "react-router"
import Swal from "sweetalert2"
// import { useSesion } from "../../hooks/useSesion"
import { HamburgerMenu } from "../hamburguerMenu/HamburgerMenu"
import { useLogout } from "../../hooks/useLogout"
import { UserSesion } from "../../schemas/sesionSchema"

interface NavBarProps {
    user: UserSesion | null;
}


export const NavBar = ({ user }: NavBarProps) => {
    const router = useNavigate()
    // const { user } = useSesion()
    const ismobile = useBreakpointValue({ base: true, md: false })
    const { mutateAsync } = useLogout()

    const logout = async () => {
        try {
            Swal.fire({
                title: 'Cerrando Sesión...',
                text: 'Por favor espera',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                },
            })
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