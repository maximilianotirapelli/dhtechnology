import { AuthLayout } from '../layout/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';

const formSchema = z.object({
  name: z
    .string({
      required_error: 'Se requiere una nombre de usuario',
    })
    .min(5, {
      message: 'Cinco (5) caracteres mínimo',
    })
    .max(12, {
      message: 'Doce (12) caracteres mínimo',
    })
    .trim()
    .toLowerCase(),

  lastname: z
    .string({
      required_error: 'Se requiere una nombre de usuario',
    })
    .min(5, {
      message: 'Cinco (5) caracteres mínimo',
    })
    .max(12, {
      message: 'Doce (12) caracteres mínimo',
    })
    .trim()
    .toLowerCase(),

  email: z.string().email('Debe ser un email válido'),

  password: z
    .string({
      required_error: 'Se requiere una contraseña',
    })
    .min(6, {
      message: 'Seis (6) caracteres mínimo',
    })
    .max(15, {
      message: 'Quince (15) caracteres mínimo',
    })
    .regex(new RegExp('.*[A-Z].*'), {
      message: 'Al menos una letra mayúscula',
    })
    .regex(new RegExp('.*[a-z].*'), {
      message: 'Al menos una letra minúscula',
    })
    .regex(new RegExp('.*\\d.*'), {
      message: 'Al menos un número',
    })
    .trim(),
});

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { registeringUser } = useAuthStore();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    registeringUser({
      name: values.name,
      lastname: values.lastname,
      email: values.email,
      password: values.password,
    });

    form.reset();
    navigate('/');
  };

  return (
    <AuthLayout title="Registro">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
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
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="" disabled >
            Registrar
          </Button>
          <div className="text-end">
            <span>¿Ya tenés una cuenta?</span>
            <Link to={'/auth/login'} className="ml-2 text-blue-700 underline">
              Iniciar sesión
            </Link>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
};
