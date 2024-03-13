import {
  TableCell,
  TableRow,
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableBody,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useDataContext } from '@/context/dataContext/useDataContext';
import { MdDelete, MdEdit } from 'react-icons/md';
import { DialogCreateProduct } from '../../components/admin/DialogCreateProduct';
import { useDataStore } from '@/context/dataContext/hooks/useDataStore';

export default function ListadoProductos() {
  const { borrarProducto } = useDataContext();
  const { state } = useDataStore();

  const productKeys = [
    'Nombre',
    'Descripción',
    'Categoría',
    'Precio',
    'Cantidad',
  ];

  return (
    <>
      {/* Dialog Form Crear Producto */}
      <div className="flex items-center justify-between p-5 pb-8">
        <span className="text-2xl">Lista de productos</span>
        <DialogCreateProduct />
      </div>

      {/* Tabla de productos */}
      <Table>
        <TableCaption>DH Technology</TableCaption>

        <TableHeader>
          <TableRow>
            {productKeys.map((key, i) => (
              <TableHead key={i}>{key}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {state.products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="p-3">{product.name} </TableCell>
              <TableCell className="p-3">{product.description} </TableCell>
              <TableCell className="p-3">{product.category || "null"} </TableCell>
              <TableCell className="p-3 text-center">
                {product.price}
              </TableCell>
              <TableCell className="p-3 text-center">
                {product.stock}
              </TableCell>
              <TableCell className="p-3 text-center">
                {/* Botón editar */}
                <Button variant="ghost" size="icon" className="hover:text-green-500">
                  <MdEdit className="h-5 w-5" />
                </Button>
              </TableCell>
              <TableCell className="p-3 text-center">
                {/* Botón eliminar */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => borrarProducto(product.id)}
                  className="hover:text-red-500"
                >
                  <MdDelete className="h-5 w-5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
