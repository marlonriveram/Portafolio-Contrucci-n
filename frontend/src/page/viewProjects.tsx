import { Flex, Heading, Text } from "@chakra-ui/react"
import { CardGrid } from "../components/cardGrid/CardGrid"

export const ViewProjects = () => {
    return (
        <>
            <Flex direction="column" alignItems="center" gap={2}>
                <Heading marginTop={2} >Proyectos</Heading>
                <Text>Explora nuestra selección de proyectos completados en diferentes categorías</Text>

            </Flex>
            <CardGrid />
        </>
    )
}
