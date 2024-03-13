import { FaTree } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";

export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-800">

      <div className="flex animate-marquee items-center whitespace-nowrap py-2">
        <span className="ml-2 text-lg italic text-rose-400">
          ¡¡GRANDES OFERTAS EN DH!!
        </span>
        <FaGift className="text-xl ml-2 text-red-500" />
        <span className="ml-2 text-lg text-slate-200">
          Durante todo el mes diciembre reservá con un ¡<span className='text-green-500 font-bold'>20% </span>de descuento! No te lo pierdas
        </span>
        <span className="ml-2 text-lg italic text-yellow-400">
          ¡Feliz Navidad!
        </span>
        <FaTree className="text-xl ml-2 text-green-600" />
        <span className="ml-2 text-lg text-slate-200">
          Durante todo el mes diciembre reservá con un ¡<span className='text-green-500 font-bold'>20% </span> de descuento! No te lo pierdas
        </span>
      </div>

      <div className="absolute top-0 flex animate-marquee2 items-center whitespace-nowrap py-2">
        <span className="ml-2 text-lg italic text-rose-400">
          ¡¡GRANDES OFERTAS EN DH!!
        </span>
        <FaGift className="text-xl ml-2 text-red-500" />
        <span className="ml-2 text-lg text-slate-200">
          Durante todo el mes diciembre reservá con un ¡<span className='text-green-500 font-bold'>20% </span> de descuento! No te lo pierdas
        </span>
        <span className="ml-2 text-lg italic text-yellow-400">
          ¡Feliz Navidad!
        </span>
        <FaTree className="text-xl ml-2 text-green-600" />
        <span className="ml-2 text-lg text-slate-200">
          Durante todo el mes diciembre reservá con un ¡<span className='text-green-500 font-bold'>20% </span> de descuento! No te lo pierdas
        </span>
      </div>
    </div>
  );
};
