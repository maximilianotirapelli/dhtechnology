import CardHome from '@/components/home/CardHome';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { useAuthContext } from '@/context/authContext/useAuthContext';

Wrapper.propTypes = {
  products: PropTypes.array,
  prevHandler: PropTypes.func,
  nextHandler: PropTypes.func,
  currentPage: PropTypes.number,
};

export default function Wrapper(props) {

  const {state} = useAuthContext()

  return (
    <div className="mb-16 mt-16 flex flex-col items-center">
      <div
        id="products-section"
        className="mb-12 ml-24 flex flex-col place-self-start border-b-2 pb-4 text-3xl"
      >
        Productos
      </div>

      {props.products.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-32 gap-y-12 md:grid-cols-2 ">
          {props.products.map((product) => (
            <CardHome
              key={product.id}
              isFav={state.favorites.some((fav) => fav.id === product.id)}
              product={product}
            />
          ))}
        </div>
      ) : (
        <>
          <div className="mb-16 mr-60 flex flex-col  gap-4 text-2xl">
            <p>No se encontraron productos.</p>
            <p>Elimine los filtros ingresados y vuelva a intentarlo.</p>
          </div>
        </>
      )}

      {props.products.length > 0 && (
        <div className="mt-8 flex items-center gap-6 self-center">
          {props.currentPage !== 0 ? (
            <Button variant="outline" size="icon" onClick={props.prevHandler}>
              <MdChevronLeft className="text-3xl" />
            </Button>
          ) : (
            <Button
              variant="outline"
              size="icon"
              className="invisible"
              onClick={props.prevHandler}
            ></Button>
          )}

          <span className=" inline-flex h-9 w-9 items-center justify-center rounded-md border border-input font-medium">
            {props.currentPage + 1}
          </span>

          {props.products.length > 9 && (
            <Button variant="outline" size="icon" onClick={props.nextHandler}>
              <MdChevronRight className="text-3xl" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
