import { Center, Container, Flex, Text } from "@chakra-ui/react"
import { useCards } from "../../hooks/useCards"
import { ProjectCard } from "../cardProject/ProjectCard"
import { Loading } from "../loading/spiner"

export const CardGrid = () => {
    const { dataCard, loading, error } = useCards()
    console.log(dataCard)

    if (loading) return <Loading />
    if (error) return <Text>Se produjo un error </Text>
    

    return dataCard && dataCard.length > 0 
        ? (
            <Container>
                <Flex p={3} gap={4} wrap="wrap" justify="center">
                    {dataCard?.map(data => (
                        <ProjectCard
                            key={data._id}
                            title={data.title}
                            category={data.category}
                            shortDescription={data.shortDescription}
                            mainImage={data.mainImage}
                            id={data._id as string}
                        />
                    ))}
                </Flex>
            </Container>
        )
        : (
            <Center py={10}>
                <Text>No hay proyectos disponibles.</Text>
            </Center>
        )

}
