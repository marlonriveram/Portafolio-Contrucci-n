import { Button, Menu, Portal } from "@chakra-ui/react"
import { useNavigate } from "react-router"

export const HamburgerMenu = () => {
    const router = useNavigate()
    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm">
                    Open Menu
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item
                            value="Cerrar Sesión">Cerrar Sesión</Menu.Item>
                        <Menu.Item
                            onClick={() => router("/panel-admin")}
                            value="Admin"
                        >Admin</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}