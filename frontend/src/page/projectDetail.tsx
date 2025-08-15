import './ProjectDetail.css'
import { Box, Button, Container, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { Carousel } from '../components/carousel/Carousel'
import { useNavigate, useParams } from 'react-router';
import { useGetProjectById } from '../hooks/useProjectById';



export const ProjectDetail = () => {

  const navigate = useNavigate()
  const { id } = useParams<string>()
  const { data: project} = useGetProjectById(id as string)


  return (
    <Container paddingTop={2.5}>

      <Button
        onClick={() => navigate(-1)}
         variant="subtle"
        marginBottom={8}
      >
        <Icon>
          <IoMdArrowRoundBack/>
        </Icon>
        Volver

      </Button>
      <Flex gap={10} wrap={'wrap'} marginBottom={12}>
        <Carousel  images = {project?.images}/>

        <Box
          css={{ "boxShadow": "1px 1px 4px black" }}
          borderRadius={"md"}
          borderWidth={"1px"}
          padding={4}
          width={"1/4"}
          minW="300px"
          height="fit-content"
          flex="1"
        >
          <Heading size={"lg"}>Categoria</Heading>
          <Text marginBottom={8}>{project?.category}</Text>

          <Heading size={"lg"}>Cliente</Heading>
          <Text marginBottom={8}>{project?.costumer}</Text>

          <Heading size={"lg"}>Año de finalización</Heading>
          <Text marginBottom={8}> {
            project?.date ? new Date(project.date).toLocaleDateString() : ''
          }</Text>
        </Box>
      </Flex>

      <Box>
        <Heading size="2xl"> {project?.title}</Heading>
        <Text
          width={"3/5"}
          minW="340px"
        >
          {project?.longDescription}
        </Text>
      </Box>
    </Container>
  )
}
