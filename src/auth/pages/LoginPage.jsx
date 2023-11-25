import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthLayout } from "../layout/AuthLayout"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "@/context/authContext/hooks/useAuthStore"

const formSchema = z.object({
    email: z.string().email("Debe ser un email válido"),

    password: z.string({
        required_error: "Se requiere una contraseña",
    }).min(6, {
        message: "Cinco (6) caracteres mínimo"
    }).max(15, {
        message: "Quince (15) caracteres mínimo"
    }).regex(new RegExp(".*[A-Z].*"), {
        message: "Al menos una letra mayúscula"
    }).regex(new RegExp(".*[a-z].*"), {
        message: "Al menos una letra minúscula"
    }).regex(new RegExp(".*\\d.*"), {
        message: "Al menos un número"
    }).trim()
})


export const LoginPage = () => {

    const {loginWithEmailAndPassword} = useAuthStore();
    const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },

    })

    const onSubmit = (values) => {
        loginWithEmailAndPassword({email: values.email, password: values.password})
        form.reset()
        navigate("/")
    }

    return (
        <AuthLayout title="Login">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="usuario@email.com" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input placeholder="******" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="">Login</Button>
                    <Link to={"/auth/register"} className="text-blue-700 text-end">Crear una cuenta</Link>
                </form>
            </Form>
        </AuthLayout>
    )
}
