import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { ImgGalleryModal } from '@/components/detalle/ImgGalleryModal';
import { Carousel } from '@/components/detalle/Carousel';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/components/ui/use-toast';
import { addDays, format } from 'date-fns';
import { es } from 'date-fns/locale';

// Para usar el mock:
import products from '@/mocks/products.json';

import PrimaryButton from '@/components/custom-ui/PrimaryButton';
import { AccordionDetail } from '@/components/detalle/AccordionDetail';
import { ImagesDetail } from '@/components/detalle/ImagesDetail';
import { Characteristics } from '@/components/detalle/Characteristics';
import { ProductDetail } from '@/components/detalle/ProductDetail';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { useAuthContext } from '@/context/authContext/useAuthContext';
import { ToastAction } from '@/components/ui/toast';
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import { useDataStore } from '@/context/dataContext/hooks/useDataStore';
import { DialogDetail } from '@/components/detalle/DialogDetail';

export default function Detalle() {
  
  const { state: dataState } = useDataStore();
  const { state, addToBook } = useAuthContext();
  const { onAddToBook } = useAuthStore()

  const [product, setProduct] = useState({});

  const [date, setDate] = useState();

  const disabledRange = {
    from: new Date(),
    to: addDays(new Date(), 7),
  };

  const navigate = useNavigate();

  const { id } = useParams();

  const selectedProductId = parseInt(id);

  //* State para abrir o cerrar el modal
  const [isOpen, setIsOpen] = useState(false);

  const { toast } = useToast();

  // const isSelectedProductInBooking = state.book.some(
  //   (item) => item.product.id === selectedProductId,
  // );
  const isSelectedProductInBooking = state.reserves.some(
    (item) => item.product.id === selectedProductId,
  );

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const formattedDateFrom = date?.from ? format(date.from, 'yyyy-MM-dd') : '';
  const formattedDateTo = date?.to ? format(date.to, 'yyyy-MM-dd') : '';

  const handleBook = () => {
    if (state.status !== 'authenticated') {
      navigate('/auth/login');
      toast({
        title: 'Login',
        description: 'Debes iniciar sesión para realizar una reserva',
        variant: 'alert',
      });
    } else {
      !isSelectedProductInBooking
        ? (
          addToBook({ product, date: { from: formattedDateFrom, to: formattedDateTo } }),
          //TODO onAddToBook(state.uid, { product.id, date: { from: formattedDateFrom, to: formattedDateTo } }),
          toast({
            title: '¡Genial!',
            description: 'Has reservado el producto',
            action: (
              <ToastAction
                altText="Ir al historial"
                onClick={() => navigate('/user/booking')}
              >
                Ir al historial
              </ToastAction>
            ),
            variant: 'success',
          })
        )
        : toast({
          title: 'Alerta',
          description:
            'Si queres cambiar la fecha de reserva elimina el producto del historial',
          action: (
            <ToastAction
              altText="Ir al historial"
              onClick={() => navigate('/user/booking')}
              className="text-yellow-500"
            >
              Ir al historial
            </ToastAction>
          ),
          variant: 'alert',
        });
    }
  };

  useEffect(() => {
    // Scroll al inicio de la página cuando se monta el componente
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const selectedProduct = dataState.products.find(
      (product) => product.id === selectedProductId,
    );

    setProduct(selectedProduct);
  }, [selectedProductId]);


  // Scroll al inicio de la página cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-2 flex flex-col">
      <div className="my-4 mr-2 flex justify-end">
        <PrimaryButton onClick={() => navigate(-1)}>
          <MdOutlineKeyboardReturn className="text-xl" />
        </PrimaryButton>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <ProductDetail product={product} />

        {/* Images  */}

        <ImagesDetail images={product.images} setIsOpen={setIsOpen} />

        {/* Modal and Galery */}
        <ImgGalleryModal isOpen={isOpen} onCloseModal={onCloseModal}>
          <Carousel images={product.images} />
        </ImgGalleryModal>

        {/* Calendar */}
        <div className="flex flex-col gap-6 rounded-md border-none">
          <Calendar
            locale={es}
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
            numberOfMonths={2}
            disabled={disabledRange}
            modifiersStyles={{
              disabled: { textDecoration: "line-through", color: "red" },
            }}
          />

          
          <DialogDetail date={{from: formattedDateFrom, to: formattedDateTo}} handleBook={handleBook}/>
          {/* handleBook={handleBook} */}
        </div>
      </div>

      {/* Characteristics */}
      <Characteristics />

      {/* Accordion */}
      <div className=" mx-4 mt-10">
        <h1 className="flex flex-col border-b-2 text-xl ">FAQ</h1>
        <AccordionDetail />
      </div>

      <div className="relative  w-[100%] py-12 pb-0 saturate-150">
        <img src="/img/detalles-footer.webp" alt="Bottom-detail-img" />
      </div>
    </div>
  );
}
