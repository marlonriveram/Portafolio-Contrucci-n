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

// Swal.fire({
//   title: '¿Estás seguro?',
//   text: '¡No podrás revertir esto!',
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonText: 'Sí, eliminar',
// })



export const Login = () => {

    const {
        register,
        getValues,
        formState: { errors },
        handleSubmit,
        // reset
    } = useForm<User>({
        resolver: zodResolver(userSchema)
    })
    const router = useNavigate()
    const { mutateAsync } = useLogin();

    const onSubmit = async (data: User) => {
        try {
            const res = await mutateAsync(data);
            // Aquí puedes mostrar un mensaje de éxito si lo deseas
            console.log(res);

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
                        {/* <Button
                            onClick={async () => {
                                try {
                                    const res = await axios.get("http://localhost:3000/api/auth/me", { withCredentials: true })
                                    console.log(res.data)
                                } catch (error) {

                                    if (axios.isAxiosError(error)) {
                                        console.log(error.response?.data)
                                    }
                                }
                            }}
                        > Prueba </Button> */}
                    </Fieldset.Root>

                </form>
            </Card.Root>
        </Container>
    )
}
