import { Button, Card, Container, Group, Table } from "@chakra-ui/react"
import { useCards } from "../hooks/useCards"
import { useDeleteProject } from "../hooks/useDeleteProject"
import { DeletedProject } from "../services/deleteProject"
export const PanelAdmin = () => {

    const { dataCard, loading} = useCards()
    
    const { mutateAsync } = useDeleteProject()
    // const items = [
    //     { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    //     { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    //     { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    //     { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    //     { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
    // ]

    const deleteProject = async ({_id,folderName}:DeletedProject) =>{
        try {
            const res = await mutateAsync({_id,folderName})
            console.log(res.data)
        } catch (error:any) {
            console.log(error)
        }
    }
    return (

        <Container>
            <Card.Root mt={12}>
                <Table.Root size="sm">
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
                        {dataCard?.map(data =>{
                            // se convierte la data.date a un objeto Date de js
                            // para luego si usar el metodo de convertirlo a string
                            const fecha = new Date(data.date).toLocaleDateString()
                            return(
                            <Table.Row key={data._id}>
                                <Table.Cell>{data.title}</Table.Cell>
                                <Table.Cell>{data.category}</Table.Cell>
                                <Table.Cell>{data.costumer}</Table.Cell>
                                <Table.Cell>{fecha}</Table.Cell>
                                <Table.Cell onClick={() => deleteProject({_id:data._id,folderName:data.title})} cursor="pointer"> P</Table.Cell>
                                {/* <Table.Cell > 
                                    <Group display="flex" justifyContent="space-evenly">
                                        <Button>a</Button>
                                        <Button>a</Button>
                                        <Button>a</Button>
                                    </Group>
                                </Table.Cell> */}
                            </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table.Root>
            </Card.Root>
        </Container>

    )
}