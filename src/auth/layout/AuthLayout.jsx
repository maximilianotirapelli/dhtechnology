import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "/img/fondo-login.webp";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-navColorDark to-navColor">

      <div className="flex flex-col mx-4">

        <Link to={"/"} className="flex items-center justify-end">
          <span className="text-black">Regresar al inicio</span>
          <MdHome className="text-black text-xl ml-[2px]" />
        </Link>

        <div className="bg-white p-4 border-none rounded-lg md:flex"> {/* Utilizo la clase md:flex para mostrar los elementos en fila en pantallas medianas y más grandes */}
          
          <div className="md:w-1/2"> {/* Establece el ancho de la mitad en pantallas medianas y más grandes */}
            <h3 className="mb-4 text-2xl">{title}</h3>
            {children}
          </div>
          
          <div className="hidden md:block md:w-1/2 items-center justify-end"> {/* Muestra la imagen solo en pantallas medianas y más grandes */}
            <img src={img} alt="fondo" className="w-96 h-auto object-cover rounded-r-lg mr-4 pl-8"/>
          </div>
          
        </div>

      </div>

    </div>
  );
};
