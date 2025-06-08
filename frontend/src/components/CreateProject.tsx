import { Button, Container, Input, Field, Fieldset, Stack, NativeSelect } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { FormInputs } from "../types/FormProject"
import { useSubmitProject } from "../hooks/useSubmitProject"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormValues, projectSchema } from "../schemas/projectSchema"
import { date } from "zod"





export const CreateProject = () => {
    const { submit } = useSubmitProject()

    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(projectSchema)
    })

    const onSubmit = async () => {
        const data = await submit(getValues())

        console.log(data)

    }

    const onError = () => {
        console.log({ errors })
    }
    return (
        <Container
            maxW={"sm"}
            borderWidth={"2px"}
            rounded={"md"}
            borderColor={"blackAlpha.600"}
            padding={"3"}

        >
            <form onSubmit={handleSubmit(onSubmit, onError)} >
                <Fieldset.Root>

                    <Stack>
                        <Fieldset.Legend>Nuevo Proyecto </Fieldset.Legend>
                    </Stack>
                    <Fieldset.Content>
                        <Field.Root invalid={!!errors.title} >
                            <Field.Label>Titulo</Field.Label>
                            <Input type="text" {...register("title")} />
                            <Field.ErrorText>{errors.title?.message}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root invalid={!!errors.shortDescription}>
                            <Field.Label>Descripcion Corta</Field.Label>
                            <Input type="text" {...register("shortDescription")} />
                            <Field.ErrorText>{errors.shortDescription?.message}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root invalid={!!errors.longDescription}>
                            <Field.Label>Descripcion Larga</Field.Label>
                            <Input type="text" {...register("longDescription")} />
                            <Field.ErrorText>{errors.longDescription?.message}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Nombre cliente</Field.Label>
                            <Input type="text" {...register("costumer")} />
                        </Field.Root>

                        <Field.Root invalid={!!errors.category}>
                            <Field.Label>Tipo de Obra</Field.Label>
                            <NativeSelect.Root>
                                <NativeSelect.Field {...register("category")}>
                                    <option value="">Seleccione una Opción</option>
                                    <option value="residencial">Residencial</option>
                                    <option value="comercial">Conmercial</option>
                                </NativeSelect.Field>
                                <NativeSelect.Indicator />
                            </NativeSelect.Root>
                            <Field.ErrorText>{errors.category?.message}</Field.ErrorText>
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Imágenes</Field.Label>
                            <Input type="file" multiple {...register("images")} />
                        </Field.Root>

                        <Field.Root invalid={!!errors.date}>
                            <Field.Label>Fecha Realización</Field.Label>
                            <Input type="date" {...register("date")} />
                            <Field.ErrorText>{errors.date?.message}</Field.ErrorText>
                        </Field.Root>
                    </Fieldset.Content>

                </Fieldset.Root>

                <Button type="submit" marginTop={"10"} color={"green"}> Enviar </Button>

            </form>

        </Container>
    )
}