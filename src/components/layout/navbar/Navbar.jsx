import logo from "/img/logo/logo-letters.svg";
import icon from "/img/logo/logo-favicon.svg";
import { Link } from "react-router-dom";
import PrimaryButton from "../../custom-ui/PrimaryButton";
import ShareButton from "../../custom-ui/WebShare";
import { useWindowSize } from "@uidotdev/usehooks";
import { useAuthStore } from "@/context/authContext/hooks/useAuthStore";
import { UserSessionMenu } from "../UserSessionMenu";
import { FaAlignJustify } from "react-icons/fa";

import Search from "../../home/Search-3";

export const Navbar = () => {
  const { role, name } = useAuthStore();
  const size = useWindowSize();

  const firstLetter = name.substring(0, 1).toUpperCase();

  return (
    <nav
      className="bg-navbar
      flex items-center justify-between sticky w-full z-10 top-0 p-4 shadow-lg"
    >
      <div className="flex items-center">
        <Link to="/" reloadDocument>
          <img
            src={size.width > 600 ? logo : icon}
            alt="Logo"
            className="h-10 h w-auto object-contain mr-2"
          />
        </Link>
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
