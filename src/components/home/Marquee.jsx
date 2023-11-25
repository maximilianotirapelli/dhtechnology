import { MdOutlineRocketLaunch, MdStarRate } from "react-icons/md";

export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-800">
      <div className="py-2 animate-marquee whitespace-nowrap flex items-center">
        <span className="text-lg italic ml-2 text-rose-400">
          - Arthur C. Clarke :
        </span>
        <span className="text-lg ml-2 text-slate-200">
          Cualquier tecnología suficientemente avanzada es equivalente a la magia
        </span>
        <MdStarRate className=" mx-2 text-xl text-yellow-300" />
        <span className="text-lg italic ml-2 text-rose-400">
          - Henry Ford :
        </span>
        <span className="text-lg ml-2 text-slate-200">
          El verdadero progreso es el que pone la tecnología al alcance de todos
        </span>
        <MdOutlineRocketLaunch className="text-orange-500 mx-2 text-xl" />
      </div>

      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap flex items-center">
        <span className="text-lg italic ml-2 text-rose-400">
          - Arthur C. Clarke :
        </span>
        <span className="text-lg ml-2 text-slate-200">
          Cualquier tecnología suficientemente avanzada es equivalente a la magia
        </span>
        <MdStarRate className="text-xl text-yellow-300 mx-2" />
        <span className="text-lg italic ml-2 text-rose-400">
          - Henry Ford :
        </span>
        <span className="text-lg ml-2 text-slate-200">
          El verdadero progreso es el que pone la tecnología al alcance de todos
        </span>
        <MdOutlineRocketLaunch className="text-orange-500 mx-2 text-xl" />
      </div>
    </div>
  );
};
