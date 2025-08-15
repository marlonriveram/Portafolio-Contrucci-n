import {
    Button,
    Card,
    Container,
    Field,
    Fieldset,
    Heading,
    Input,
    Stack
} from "@chakra-ui/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { User, userSchema } from "../schemas/userSchema"
import axios from "axios";
import { useLogin } from "../hooks/useLogin"
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'


export const Login = () => {
     Swal.close()
    const {
        register,
        getValues,
        formState: { errors },
        handleSubmit,
        // reset
    } = useForm<User>({
        resolver: zodResolver(userSchema),
        defaultValues:{
            email:"henry912@hotmail.com",
            password:"henryr912"
        }
    })
    const router = useNavigate()
    const { mutateAsync } = useLogin();

    const onSubmit = async (data: User) => {
        try {
            const res = await mutateAsync(data);
            // Aquí puedes mostrar un mensaje de éxito si lo deseas

            router("/panel-admin")

        } catch (error: any) {
            if (axios.isAxiosError(error)) {

                const message = error.response?.data.message || "Error desconocido"
                Swal.fire({
                    icon: "error",
                    title: message,
                });

            } else {
                console.error("Error Inesperado:")
            }
        }

    };

    const onError = () => {
        console.log({ errors })
    }
    return (

        <Container w="sm" pt={8}>

            <Card.Root p={4}>

                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Fieldset.Root >
                        <Stack>
                            <Fieldset.Legend>Inicio Sesión</Fieldset.Legend>
                        </Stack>

                        <Fieldset.Content pb={4}>
                            <Field.Root pb={4} invalid={!!errors.email}>
                                <Field.Label>Email</Field.Label>
                                <Input type="text" {...register("email")} />
                                <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                            </Field.Root>

                            <Field.Root pb={4} invalid={!!errors.password} >
                                <Field.Label>Password</Field.Label>
                                <Input type="password" {...register("password")} />
                                <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                            </Field.Root>
                        </Fieldset.Content>

                        <Button type="submit" > Login </Button>
                    </Fieldset.Root>

                </form>
            </Card.Root>
        </Container>
    )
}
