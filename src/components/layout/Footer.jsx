import React from 'react';
import logo from '/img/logo/logo-letters.svg';
import { Link } from 'react-router-dom';
import {
  FaSquareFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6';

export const Footer = () => {
  return (
    <footer className="mt-auto w-full px-2 py-8">
      <div className="flex flex-col items-center justify-center gap-x-12 gap-y-6 py-6 text-center md:flex-row md:justify-between">
        <img
          src={logo}
          alt="Logo DH Technology"
          className="mb-4 w-60 md:mb-0"
        />

        <div className="flex flex-row gap-x-4 md:flex-row md:gap-x-8">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram style={{ fontSize: '24px' }} />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok style={{ fontSize: '24px' }} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube style={{ fontSize: '24px' }} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaSquareFacebook style={{ fontSize: '24px' }} />
          </a>
        </div>

        <ul className="flex flex-col items-center gap-x-8 gap-y-2 font-medium md:flex-row">
          <li className="transition-width duration-100 hover:border-b-2 hover:border-red-600">
            <Link to="/about" style={{ cursor: 'pointer' }}>
              Nosotros
            </Link>
          </li>
          <li className="transition-width duration-100 hover:border-b-2 hover:border-red-600">
            <Link to="/business" style={{ cursor: 'pointer' }}>
              Empresas
            </Link>
          </li>
          <li className="transition-width duration-100 hover:border-b-2 hover:border-red-600">
            <Link to="/policy" style={{ cursor: 'pointer' }}>
              Políticas
            </Link>
          </li>
          <li className="transition-width duration-100 hover:border-b-2 hover:border-red-600">
            <Link to="/contact" style={{ cursor: 'pointer' }}>
              Contactanos
            </Link>
          </li>
        </ul>
      </div>

      <div className="mt-2 flex flex-col justify-between border-t-2 border-red-600 pt-2 md:flex-row">
        <span className="mb-2 md:mb-0">
          © 2023 DH Technology - Derechos Reservados
        </span>
        <span>Fake 123, Buenos Aires, Argentina.</span>
      </div>
    </footer>
  );
};

export default Footer;
