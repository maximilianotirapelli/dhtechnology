import PropTypes from 'prop-types';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';

DetailTable.propTypes = {
  product: PropTypes.object,
};

export default function DetailTable({ product }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-32 border-b-[1px] border-white bg-slate-200">
            Nombre
          </TableHead>
          <TableHead className="w-96">Descripción</TableHead>
          <TableHead className="border-b-[1px] border-white bg-slate-200">
            Precio
          </TableHead>
          <TableHead>Categoría</TableHead>
          <TableHead className="border-b-[1px] border-white bg-slate-200">
            Cantidad
          </TableHead>
          <TableHead>Puntuación</TableHead>
        </TableRow>
      </TableHeader>

      <TableHeader>
        <TableRow>
          <TableHead className="w-32 bg-slate-200">{product.name}</TableHead>
          <TableHead className="w-1/3">{product.description}</TableHead>
          <TableHead className="bg-slate-200">{product.price}</TableHead>
          <TableHead>{product.category}</TableHead>
          <TableHead className="bg-slate-200">{product.stock}</TableHead>
          <TableHead>{product.rating}</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  );
}
