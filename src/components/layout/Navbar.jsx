import { useState } from "react";
import logo from "/img/logo/logo-letters.svg";
import icon from "/img/logo/logo-favicon.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../custom-ui/PrimaryButton";
import ShareButton from "../custom-ui/WebShare";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAuthStore } from "@/context/authContext/hooks/useAuthStore";
import { UserSessionMenu } from "./UserSessionMenu";
import { FaAlignJustify } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { DateRangePicker } from "@/components/home/DateRangePicker";

export const Navbar = () => {
  const { role, name } = useAuthStore();
  const size = useWindowSize();
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const firstLetter = name.substring(0, 1).toUpperCase();

  return (
    <nav
      className="bg-navbar
      flex items-center justify-between sticky w-full z-10 top-0 p-4 shadow-lg"
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src={size.width > 600 ? logo : icon}
            alt="Logo"
            className="h-10 h w-auto object-contain mr-2"
          />
        </Link>
      </div>
      <div>
      
        <DateRangePicker />
      </div>
      {/* Input de búsqueda */}
      <div className="hidden md:flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 px-8 border rounded-full focus:outline-none focus:border-blue-500 transition-all duration-300 ease-in-out hover:border-gray-400 bg-gray-100"
            style={{ width: "450px" }} // Puedes ajustar el ancho según tus necesidades
          />
          <div className="absolute inset-y-0 left-[390px] flex items-center pl-2">
            <MdSearch className="w-5 h-5 text-gray-600" />
            {/* <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6M9 2a7 7 0 110 14 7 7 0 010-14z"></path>
            </svg> */}
          </div>
        </div>
      </div>

      
      
      {role === "USER" || role === "ADMIN" ? (
        <UserSessionMenu name={name} firstLetter={firstLetter} />
      ) : (
        <div className="hidden md:flex items-center gap-5">
          {" "}
          {/* Oculta en dispositivos pequeños */}
          
          <Link to={"/auth/register"}>
            <PrimaryButton>Crear cuenta</PrimaryButton>
          </Link>
          <Link to={"/auth/login"}>
            <PrimaryButton>Iniciar sesión</PrimaryButton>
          </Link>
          
        </div>
        
      )}
      

      {/* Menú hamburguesa para dispositivos pequeños */}
      <div className="md:hidden">
        <FaAlignJustify />
        {/* Agrega aquí tu código para el menú hamburguesa */}
      </div>
    </nav>
  );
};
