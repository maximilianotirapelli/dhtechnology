import Home from '../pages/publicPages/Home';
import { Route, Routes } from 'react-router-dom';
import Detalle from '@/pages/publicPages/Detalle';
import ListadoProductos from '@/pages/privatePages/ListadoProductos';
import ListadoCategorias from '@/pages/privatePages/ListadoCategorias';
import { LoginPage } from '@/auth/pages/LoginPage';
import { RegisterPage } from '@/auth/pages/RegisterPage';
import { UserEditionPage } from '@/pages/privatePages/UserEditionPage';
import { UserBookingPage } from '@/pages/privatePages/UserBookingPage';
import AdminPrivateRoutes from './AdminPrivateRoutes';
import { UserPrivateRoutes } from './UserPrivateRoutes';
import { AdminPermissionPage } from '@/pages/privatePages/AdminPermissionPage';
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { UserFavoritesPage } from '@/pages/privatePages/UserFavoritesPage';
import About from '@/components/layout/footer/About';
import Policy from '@/components/layout/footer/Policy';
import Business from '@/components/layout/footer/Business';
import Contact from '@/components/layout/footer/Contact';

export const AppRouter = () => {
  //* Función para mantener sesión iniciada si es que el token no expiró
  const { checkAuthToken, status } = useAuthStore();

  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(80), 1000);
    return () => clearTimeout(timer);
  }, []);

  //* Comentar este effect para poder acceder a ADMIN y USER
  // useEffect(() => {
  //   checkAuthToken()
  // }, [])

  if (status === 'checking') {
    return (
      <div className="mt-[13%] flex h-full flex-col items-center justify-center">
        <h3>Cargando</h3>
        <Progress value={progress} className="mt-4 w-56" />
      </div>
    );
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/*" element={<Home />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/detalle/:id" element={<Detalle />} />

      {/* Footer Links */}

      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/business" element={<Business />} />
      <Route path="/contact" element={<Contact />} />

      {/* Admin private routes: solo se puede entrar si el rol es 2*/}
      <Route
        path="/admin/*"
        element={
          <AdminPrivateRoutes>
            <Routes>
              <Route path="/" element={<ListadoProductos />} />
              <Route
                path="/listado-categorias"
                element={<ListadoCategorias />}
              />
              <Route path="/permission" element={<AdminPermissionPage />} />
            </Routes>
          </AdminPrivateRoutes>
        }
      />

      {/* User private routes: solo se puede entrar si el rol es 1*/}
      <Route
        path="/user/*"
        element={
          <UserPrivateRoutes>
            <Routes>
              <Route path="/edit" element={<UserEditionPage />} />
              <Route path="/favs" element={<UserFavoritesPage />} />
              <Route path="/booking" element={<UserBookingPage />} />
            </Routes>
          </UserPrivateRoutes>
        }
      />
    </Routes>
  );
};
