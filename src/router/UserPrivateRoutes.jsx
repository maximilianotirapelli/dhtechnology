import { useAuthContext } from '@/context/authContext/useAuthContext';
import { Navigate } from 'react-router-dom';

export const UserPrivateRoutes = ({ children }) => {
  const { state } = useAuthContext();

  return state.role === 'USER' ? children : <Navigate to={'/'} />;
};
