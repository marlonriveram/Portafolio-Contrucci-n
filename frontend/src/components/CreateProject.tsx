import { Button,Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { FormInputs } from "../types/FormProject"
import { useSubmitProject } from "../hooks/useSubmitProject"



export const CreateProject = () => {
    const { submit } = useSubmitProject()
    const { register, getValues,handleSubmit } = useForm<FormInputs>()

    const onSubmit = async () =>{
       const data =  await submit(getValues())

        console.log(data)
    }
    return (
        <Container
            marginTop={16}
            padding={"3.5"}
            borderRadius={"2xl"}
            border={"2px"}
            borderColor={"GrayText"}
            >
            <form onSubmit={handleSubmit(onSubmit)} >
                <Heading>
                    Nuevo Proyecto
                </Heading>

                <FormControl marginTop={2}>
                    <FormLabel> Título </FormLabel>
                    <Input type="text" {...register("title")} />
                </FormControl>

                <FormControl marginTop={2}>
                    <FormLabel> Descripción Corta </FormLabel>
                    <Input type="text" {...register("shortDescription")} />
                </FormControl>

                <FormControl marginTop={2}>
                    <FormLabel>Descripción Larga</FormLabel>
                    <Input type="text" {...register("longDescription")} />
                </FormControl>

                <FormControl marginTop={2}>
                    <FormLabel>Imágenes</FormLabel>
                    <Input type="file" multiple {...register("images")} />
                </FormControl>

                <FormControl marginTop={2}>
                    <FormLabel>Fecha de Realización del Trabajo</FormLabel>
                    <Input type="date" {...register("date")} />
                </FormControl>

                <Button type="submit" marginTop={"10"} color={"green"}> Enviar </Button>
            </form>
        </Container>
    )
}