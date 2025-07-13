import './ProjectDetail.css'
import { Box, Button, Container, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { Carousel } from '../components/carousel/Carousel'
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router';



export const ProjectDetail = () => {

  const navigate = useNavigate()
  return (
    <Container paddingTop={2.5}>

      <Button
      onClick={() => navigate("/projects")}
        colorPalette={"green"} variant="subtle"
        marginBottom={8}
      >
        <Icon>
          <GoArrowLeft />
        </Icon>
        Volver a Proyectos

      </Button>
      <Flex gap={10} wrap={'wrap'} marginBottom={12}>
        <Carousel />

        <Box
        css={{"boxShadow":"1px 1px 4px black"}}
          borderRadius={"md"}
          borderWidth={"1px"}
          padding={4}
          width={"1/4"}
          minW="340px"
          height="fit-content"
          flex="1"
        >
          <Heading size={"lg"}>Categoria</Heading>
          <Text marginBottom={8}>Comercial</Text>

          <Heading size={"lg"}>Cliente</Heading>
          <Text marginBottom={8}>Julanita de tal</Text>

          <Heading size={"lg"}>Año de finalización</Heading>
          <Text marginBottom={8}> 2005</Text>
        </Box>
      </Flex>

      <Box>
        <Heading size="2xl"> Titulo Proyecto</Heading>
        <Text
          width={"3/5"}
          minW="340px"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae sapiente ipsa eos vero qui tenetur dignissimos ipsum repudiandae. Sunt ex quia at aspernatur, explicabo sit ipsum expedita soluta ratione.
        </Text>
      </Box>
    </Container>
  )
}
