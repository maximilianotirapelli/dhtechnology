import PropTypes from "prop-types";
//
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

TableRowLocal.propTypes = {
  product: PropTypes.object,
  handleClickDeleteProduct: PropTypes.func,
};

export default function TableRowLocal({ product, handleClickDeleteProduct }) {
  return (
    <TableRow>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.description}</TableCell>
      <TableCell className="text-right">
        <Button
          className="text-lg bg-red-600 text-white hover:bg-red-500"
          onClick={() => handleClickDeleteProduct(product.id)}
        >
          Borrar
        </Button>
      </TableCell>
    </TableRow>
  );
}
