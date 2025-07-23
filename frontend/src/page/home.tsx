import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router"

export const Home = () => {

  const router = useNavigate()
  return (
    <Flex direction="row" gap={8} wrap="wrap" justifyContent={"center"} p="2" mt={4}>
      <Box w={"2/5"} flexGrow={1}  >
        <Heading mb={4}>
          Luis Henry Rivera
        </Heading>

        <Text mb="16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa porro sit eligendi nemo eius, velit laborum error accusamus ex natus nesciunt, quod tenetur placeat dolor maxime officia deleniti voluptas magnam.
        </Text>

        <Flex  gap={4} mt={4}>
          <Button onClick={() => router("/projects")}> Ver Proyectos → </Button>
          <Button> Contactame </Button>
        </Flex>

      </Box>
      <Box w={"2/5"} minW={"350px"} maxW={"400px"}>
        <Image rounded={"md"} src="https://images.unsplash.com/flagged/photo-1572491259205-506c425b45c3" alt="Imagen de construcción" />
      </Box>
    </Flex>
   
  )
}
