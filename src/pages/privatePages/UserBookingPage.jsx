import { useAuthContext } from '@/context/authContext/useAuthContext';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { CancelBookAlert } from '@/components/book/CancelBookAlert';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import PrimaryButton from '@/components/custom-ui/PrimaryButton';
import { MdOutlineKeyboardReturn } from 'react-icons/md';

export const UserBookingPage = () => {
  const { state } = useAuthContext();
  const navigate = useNavigate()
  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  console.log(state);

  return (
    <div className="mx-6 my-4 flex min-h-screen gap-x-2">
      <div className="flex min-w-[235px] flex-col justify-between border-r-[1px] border-r-red-200">
        <h2 className="text-2xl">Historial de Reservas</h2>
      </div>
      <div className="my-4 mr-2 flex justify-end fixed right-3 bottom-1 z-10">
        <PrimaryButton onClick={() => navigate(-1)}>
          <MdOutlineKeyboardReturn className="text-xl" />
        </PrimaryButton>
      </div>

      <Table>
        {state.reserves.length === 0 ? (
          <TableCaption className="mt-48 text-2xl">
            No tienes ninguna reserva.
          </TableCaption>
        ) : (
          <TableCaption>Historial de reservas.</TableCaption>
        )}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Producto</TableHead>
            <TableHead>Fecha inicial</TableHead>
            <TableHead>Fecha límite</TableHead>
            <TableHead className="text-left">Precio</TableHead>
            <TableHead className="text-left">Acciones</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {state.reserves.map((item) => (
            <TableRow key={item.product.id}>
              <TableCell className="flex p-3">
                <img
                  src={
                    item.product.images
                      ? item.product.images[0].image
                      : '/img/icons/favicon_32x32.webp'
                  }
                  alt="product-img"
                  className="mr-2 h-6 w-6 rounded-lg border-0"
                />
                <span>{item.product.name}</span>
              </TableCell>
              <TableCell className="p-3">{item.date.from} </TableCell>
              <TableCell className="p-3">{item.date.to} </TableCell>
              <TableCell className="p-3 text-center">
                {item.product.price}
              </TableCell>
              <TableCell className="p-3 text-center">
                {/* Botón eliminar */}
                <CancelBookAlert productId={item.product.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
