import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import img from '/img/fondo-login.webp';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <div className="from-navColorDark to-navColor flex min-h-screen flex-col items-center justify-center bg-gradient-to-t">
      <div className="mx-4 flex flex-col">
        <Link to={'/'} className="flex items-center justify-end mb-2">
          <span className="text-black">Regresar al inicio</span>
          <MdHome className="ml-[2px] text-xl text-black" />
        </Link>

        <div className="rounded-lg border-none bg-white p-4 md:flex">
          {' '}
          {/* Utilizo la clase md:flex para mostrar los elementos en fila en pantallas medianas y más grandes */}
          <div className="md:w-1/2">
            {' '}
            {/* Establece el ancho de la mitad en pantallas medianas y más grandes */}
            <h3 className="mb-4 text-2xl">{title}</h3>
            {children}
          </div>
          <div className="hidden items-center justify-end md:block md:w-1/2">
            {' '}
            {/* Muestra la imagen solo en pantallas medianas y más grandes */}
            <img
              src={img}
              alt="fondo"
              className="mr-4 h-auto w-96 rounded-r-lg object-cover pl-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
