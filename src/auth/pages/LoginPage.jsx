import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthLayout } from '../layout/AuthLayout';

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
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import { useAuthContext } from '@/context/authContext/useAuthContext';

const formSchema = z.object({
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

export const LoginPage = () => {
  const { loginWithEmailAndPassword } = useAuthStore();
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    loginUser({
      email: values.email,
      password: values.password,
      uid: 1,
      name: "User",
      lastname: "Ser",
      role: "USER",
      favorites: [],
      reserves: [],
    });
    form.reset();
    navigate('/');
  };

  return (
    <AuthLayout title="Login">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="usuario@email.com" {...field} />
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
                  <Input placeholder="******" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="">
            Login
          </Button>
          <Link to={'/auth/register'} className="text-end text-blue-700">
            Crear una cuenta
          </Link>
        </form>
      </Form>
    </AuthLayout>
  );
};
