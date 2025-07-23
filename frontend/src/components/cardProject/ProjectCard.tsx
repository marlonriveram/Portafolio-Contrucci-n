import { Card, Image, Text } from "@chakra-ui/react"
import { data, useNavigate } from "react-router"

interface CardInfo {
  id: string
  title: string,
  category:string,
  shortDescription: string
  mainImage: string
}

export const ProjectCard = ({
  title,
  category,
  shortDescription,
  mainImage,
  id
}: CardInfo) => {

  const navigate = useNavigate()
  return (
    <Card.Root
      onClick={() => navigate(`/project/detail/${id}`)}
      padding={3} width="300px" overflow="hidden" cursor="pointer">
      <Image
        src={mainImage}
        alt=""
        height={"200px"}
        rounded={"sm"}
      />
      <Text
        padding={5}
        color={"blackAlpha.600"}
      >{category}</Text>
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {shortDescription}
        </Card.Description>
      </Card.Body>

    </Card.Root>
  )
}

