import { Box, Button, Card, Container, Group, Heading, Table, Text } from "@chakra-ui/react"
import { useState } from "react"
import Modal from "react-modal"
import Swal from "sweetalert2"
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useCards } from "../hooks/useCards"
import { useDeleteProject } from "../hooks/useDeleteProject"
import { DeletedProject } from "../services/deleteProject"
import { CreateProject } from "../components/entities/FormCreateProject/CreateProject"
import { useNavigate } from "react-router";

export const PanelAdmin = () => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const { dataCard } = useCards()

    const { mutateAsync} = useDeleteProject()
    const navigate = useNavigate()

    const customStyles = { // estilos modal
        content: {
            minWidth: "330px",

        },
    };

    const deleteProject = async ({ _id, folderName }: DeletedProject) => {
        try {

            Swal.fire({
                title: 'Eliminando proyecto...',
                text: 'Por favor espera',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                },
            })

            const res = await mutateAsync({ _id, folderName })
            Swal.close()
            console.log(res.data)
        } catch (error: any) {
            console.log(error)
        }
    }
    return (
        <>

            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <Button
                    mb={4}
                    onClick={() => setModalIsOpen(false)}
                >Cerrar
                </Button>
                <CreateProject />
            </Modal>

            <Container>
                <Card.Root mt={12}>
                    <Box
                        display="flex"
                        p={4}
                        mb={4}
                        justifyContent="space-between"
                        flexWrap="wrap"
                        gap={4}
                    >
                        <Box>
                            <Heading>Panel de Administración</Heading>
                            <Text>Gestiona los proyectos de tu portafolio</Text>
                        </Box>

                        <Button onClick={() => setModalIsOpen(true)}>
                            + Nuevo Proyecto
                        </Button>
                    </Box>


                    <Box overflowX="auto">
                        <Table.Root size="sm" minW="600px">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeader>Titulo</Table.ColumnHeader>
                                    <Table.ColumnHeader>Categoria</Table.ColumnHeader>
                                    <Table.ColumnHeader>Cliente</Table.ColumnHeader>
                                    <Table.ColumnHeader>Fecha</Table.ColumnHeader>
                                    <Table.ColumnHeader>Acciones</Table.ColumnHeader>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {dataCard?.map(data => {
                                    const fecha = new Date(data.date).toLocaleDateString()
                                    return (
                                        <Table.Row key={data._id}>
                                            <Table.Cell>{data.title}</Table.Cell>
                                            <Table.Cell>{data.category}</Table.Cell>
                                            <Table.Cell>{data.costumer}</Table.Cell>
                                            <Table.Cell>{fecha}</Table.Cell>
                                            <Table.Cell>
                                                <Group>
                                                    <MdDelete onClick={() => deleteProject({ _id: data._id, folderName: data.title })} cursor="pointer" />
                                                    <FaEye onClick={() => navigate(`/project/detail/${data._id}`)} cursor="pointer" />
                                                </Group>
                                            </Table.Cell>

                                        </Table.Row>
                                    )
                                })}
                            </Table.Body>
                        </Table.Root>
                    </Box>
                </Card.Root>

            </Container>
        </>
    )
}


