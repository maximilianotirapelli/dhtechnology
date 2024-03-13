import { useState } from 'react';
import logo from '/img/logo/logo-letters.svg';
import icon from '/img/logo/logo-favicon.svg';
import { Link } from 'react-router-dom';
import PrimaryButton from '../custom-ui/PrimaryButton';
import ShareButton from '../custom-ui/WebShare';
import { useWindowSize } from '@uidotdev/usehooks';
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import { UserSessionMenu } from './navbar/UserSessionMenu';
import { MdSearch } from 'react-icons/md';
import { DateRangePicker } from '@/components/home/DateRangePicker';

export const Navbar = () => {
  const { role, name } = useAuthStore();
  const size = useWindowSize();
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  const firstLetter = name.substring(0, 1).toUpperCase();

  return (
    <nav className="sticky top-0 z-10 flex w-full items-center justify-between bg-navbar px-10 py-4 shadow-lg">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={size.width > 600 ? logo : icon}
            alt="Logo"
            className="h mr-2 h-10 w-auto object-contain"
          />
        </Link>
      </div>
      <div>
        <DateRangePicker />
      </div>
      {/* Input de búsqueda */}
      <div className="hidden items-center md:flex">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-full border bg-gray-100 p-2 px-8 transition-all duration-300 ease-in-out hover:border-gray-400 focus:border-blue-500 focus:outline-none"
            style={{ width: '450px' }} // Puedes ajustar el ancho según tus necesidades
          />
          <div className="absolute inset-y-0 left-[390px] flex items-center pl-2">
            <MdSearch className="h-5 w-5 text-gray-600" />
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

      {role === 'USER' || role === 'ADMIN' ? (
        <UserSessionMenu name={name} firstLetter={firstLetter} />
      ) : (
        <div className="hidden items-center gap-5 md:flex">
          {' '}
          {/* Oculta en dispositivos pequeños */}
          <Link to={'/auth/register'}>
            <PrimaryButton>Crear cuenta</PrimaryButton>
          </Link>
          <Link to={'/auth/login'}>
            <PrimaryButton>Iniciar sesión</PrimaryButton>
          </Link>
        </div>
      )}

      
    </nav>
  );
};
