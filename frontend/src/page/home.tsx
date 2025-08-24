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
          Explora nuestro portafolio de construcción, donde cada proyecto refleja compromiso, innovación y calidad. Desde ideas iniciales hasta obras terminadas, aquí podrás ver cómo convertimos los sueños en realidad. Inspírate con nuestros trabajos y descubre cómo podemos ayudarte a construir tu próximo gran proyecto.
        </Text>

        <Flex gap={4} mt={4}>
          <Button onClick={() => router("/projects")}> Ver Proyectos → </Button>
          <a href="https://wa.me/573001234567?text=Hola%20quiero%20saber%20más%20sobre%20tus%20proyectos" target="_blank">
            <Button> Contactame </Button>
          </a>
          
        </Flex>

      </Box>
      <Box w={"2/5"} minW={"350px"} maxW={"400px"}>
        <Image rounded={"md"} src="https://static.vecteezy.com/system/resources/thumbnails/027/103/993/small/engineer-with-yellow-helmet-ensures-worker-safety-amidst-new-highrise-construction-and-cranes-against-an-evening-sunset-backdrop-free-photo.jpg" />
      </Box>
    </Flex>

  )
}
