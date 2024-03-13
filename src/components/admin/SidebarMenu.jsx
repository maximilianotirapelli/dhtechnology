import { useState } from 'react';
import {
  MdHome,
  MdInterests,
  MdMenu,
  MdSettings,
  MdShoppingBag,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '/img/logo/logo-letters.svg';

export default function SidebarMenu() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-72' : 'w-18'
        } flex h-full flex-col p-3 pt-6 shadow`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between p-2">
            {open && <img src={logo} alt="Logo" className="h-9" />}

            <button onClick={() => setOpen(!open)}>
              <MdMenu className="h-7 w-7 text-primary" />
            </button>
          </div>

          <div className="flex-1">
            <ul className="space-y-2 pb-4 pt-2 text-sm">
              {/* HOME */}
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <MdHome className="h-6 w-6 text-primary" />
                  {open && <span className="text-primary">Inicio</span>}
                </Link>
              </li>
              {/* LISTADO DE PRODUCTOS */}
              <li className="rounded-sm">
                <Link
                  to="/admin"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <MdShoppingBag className="h-6 w-6 text-primary" />
                  {open && <span className="text-primary">Productos</span>}
                </Link>
              </li>
              {/* LISTADO DE CATEGORÍAS */}
              <li className="rounded-sm">
                <Link
                  to="/admin/listado-categorias"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <MdInterests className="h-6 w-6 text-primary" />
                  {open && <span className="text-primary">Categorías</span>}
                </Link>
              </li>

              {/* CONFIGURACIÓN */}
              <li className="rounded-sm">
                <Link
                  to="/admin/permission"
                  className="flex items-center space-x-3 rounded-md p-2"
                >
                  <MdSettings className="h-6 w-6 text-primary" />
                  {open && (
                    <span className="text-primary">Permisos de usuarios</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
