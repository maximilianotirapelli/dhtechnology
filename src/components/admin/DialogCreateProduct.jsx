import { useDataContext } from '@/context/dataContext/useDataContext';
import { useDataStore } from '@/context/dataContext/hooks/useDataStore';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { subirImagen } from '@/helpers/subirImagen';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Debe tener más de dos caractéres',
  }),
  description: z.string().min(2, {
    message: 'Debe tener más de dos caractéres',
  }),
  price: z.string().min(2, {
    message: 'Debe tener más de dos caractéres',
  }),
  categories: z.string({
    required_error: 'Seleccione una opción',
  }),
  stock: z.string().min(1, {
    message: 'Debe tener al menos un dígito',
  }),
});

export const DialogCreateProduct = () => {
  const { state, agregarProducto } = useDataContext();
  const { onCreatingNewProduct, onCreatingNewProductFiles } = useDataStore();
  const [files, setFiles] = useState([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      price: '',
      categories: '',
      stock: '',
    },
  });

  //* Función para subir imágenes a Cloudinary y colocarlas en el state local para luego enviarlas al reducer
  const subirImagenInput = async ({ target }) => {
    if (target.files === 0) return;

    const promesasDeImagenesParaSubir = [];
    for (const file of target.files) {
      promesasDeImagenesParaSubir.push(subirImagen(file));
    }
    const imagenesUrls = await Promise.all(promesasDeImagenesParaSubir);

    setFiles(imagenesUrls);
  };



  function onSubmit(values) {
    agregarProducto({
      id: 51,
      name: values.name,
      description: values.description,
      price: values.price,
      category: values.categories,
      stock: values.stock,
      images: [
        { image: files[0] },
        { image: files[1] },
      ],
      date: { "from": "2023-12-17", "to": "2023-12-30" },
      rating: 3.2
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary text-base text-white">Crear</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nuevo producto</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categories"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione una categoría" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {state.categories.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col items-start gap-1.5">
              <Label htmlFor="picture" className='font-semibold'>Picture</Label>
              <Input
                id="picture"
                type="file"
                multiple
                onChange={subirImagenInput}
              />
            </div>
          </form>
        </Form>

        <DialogFooter>
            <Button onClick={form.handleSubmit(onSubmit)}>Crear</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
