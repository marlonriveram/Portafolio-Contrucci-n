import { Box, Container,GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <Container mt={8}>
            <Box textAlign={"center"}>
                <Heading mb={2}>Soluciones de Construcción</Heading>
                <Text mb={4}>Ofrecemos servicios completos de construcción, desde la planificación incial hasta la entrega final del proyecto</Text>
            </Box>

            <SimpleGrid minChildWidth={"sm"} autoColumns="auto" gap={3}>
                <GridItem p={4}>
                    <Heading>Construcción Residencial</Heading>
                    <Text>
                        Casas, apartamentos y complejos residenciales construidos con los más altos estándares de calidad.
                    </Text>

                </GridItem>
                <GridItem p={4}>
                    <Heading>Proyectos Comerciales</Heading>
                    <Text>
                        Oficinas, locales comerciales y espacios de trabajo diseñados para maximizar la funcionalidad.
                    </Text>
                </GridItem>
                <GridItem p={4}>
                    <Heading>Renovaciones</Heading>
                    <Text>
                        Transformación de espacios existentes para darles nueva vida y funcionalidad.
                    </Text>
                </GridItem>
            </SimpleGrid>
        </Container>
    )
}