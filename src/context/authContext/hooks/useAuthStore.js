import { useToast } from '@/components/ui/use-toast';
import { useAuthContext } from '../useAuthContext';

const URL = 'http://localhost:8080/api/v1';

export const useAuthStore = () => {
  const { loginUser, logoutUser, checkingAuthentication, state } =
    useAuthContext();
  const { status, name, lastname, role, uid } = state;

  const { toast } = useToast();

  //* Login
  const loginWithEmailAndPassword = async ({ email, password }) => {
    checkingAuthentication();

    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    };

    try {
      const resp = await fetch(URL + '/auth/authenticate', requestBody);
      const data = await resp.json();

      //*Establecer el token que viene del back en el localStorage
      localStorage.setItem('token', JSON.stringify(data.token));
      loginUser(data);
    } catch (error) {
      console.log(error);
      logoutUser();
      toast({
        description: 'Error en la autenticación',
        variant: 'destructive',
      });
    }
  };
  //************************************

  //* Registro
  const registeringUser = async ({ name, lastname, email, password }) => {
    checkingAuthentication();

    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        rol: 'USER',
      }),
    };

    try {
      const resp = await fetch(URL + '/auth/register', requestBody);
      const data = await resp.json();
      console.log(data);
      //*Establecer el token que viene del back en el localStorage
      localStorage.setItem('token', JSON.stringify(data.token));
      loginUser(data);
      console.log('Se ha registrado el usuario');
      toast({ title: "¡GENIAL!", description: 'Te has registrado con éxito', variant: 'success' });
    } catch (error) {
      console.log(error);
      logoutUser();
      toast({ description: 'Error en el registro', variant: 'destructive' });
    }
  };
  //*****************************

  //* Revisar token para mantener sesión o cerrarla
  const checkAuthToken = async () => {
    checkingAuthentication();

    const token = JSON.parse(localStorage.getItem('token'));
    if (!token) return logoutUser();

    const requestBody = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    try {
      const resp = await fetch(URL + '/auth/refresh-token', requestBody);
      const data = await resp.json();
      localStorage.setItem('token', JSON.stringify(data.token));
      loginUser(data);
    } catch (error) {
      console.log(error);
      logoutUser();
    }
  };
  //********************************

  //* Cerrar sesión
  const logoutSession = async () => {
    console.log('Cerrando sesión');
    localStorage.clear();
    logoutUser();
  };

  //* Editar características de usuario, dar permiso de ADMIN
  const editUserPermission = async (email, rol) => {
    const requestBody = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const resp = await fetch(URL + `/users/update/${email}/${rol}`, requestBody);
      
      if (resp.ok) {
        toast({
          description: 'Se han dado permisos de admin al usuario',
          variant: 'success',
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: 'No se ha podido realizar la acción',
        variant: 'destructive',
      });
    }
  };

  //* Editar características de usuario, dar permiso de ADMIN
  const editUserInfoByUser = async (data) => {
    const requestBody = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    try {
      const resp = await fetch(URL + '/users/edit/' + data.id, requestBody);
      const data = await resp.json();

      if (data.ok) {
        toast({
          description: 'Se han modificado los datos',
          variant: 'success',
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        description: 'No se ha podido realizar la acción',
        variant: 'destructive',
      });
    }
  };

  //* Add to favorites
  const onAddToFavs = async (pid, uid) => {
    checkingAuthentication();

    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const resp = await fetch(URL + `/users/add-favorites/${uid}/${pid}`, requestBody);
      const data = await resp.json();
      console.log(data);

      toast({ description: 'Se ha guardado en favoritos', variant: 'success' });
    } catch (error) {
      console.log(error);
      toast({ description: 'Algo salió mal', variant: 'destructive' });
    }
  };
  //************************************

  //* Remove from favorites
  const onRemoveFromfavs = async (pid, uid) => {
    checkingAuthentication();

    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const resp = await fetch(URL + `/users/delete-favorites/${uid}/${pid}`, requestBody);
      const data = await resp.json();
      console.log(data);
      toast({
        description: 'Producto eliminado de favoritos',
        variant: 'success',
      });
    } catch (error) {
      console.log(error);
      toast({ description: 'Algo salió mal', variant: 'destructive' });
    }
  };
  //************************************

  //* Add to book
  const onAddToBook = async (pid, uid) => {
    checkingAuthentication();

    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const resp = await fetch(URL + `/users/add-reserve/${uid}/${pid}`, requestBody);
      const data = await resp.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  //************************************

  //* Remove from book
  const onRemoveFromBook = async (pid, uid) => {
    checkingAuthentication();

    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      await fetch(URL + `/users/delete-reserve/$${uid}/${pid}`, requestBody);


    } catch (error) {
      console.log(error);
    }
  };
  //************************************

  return {
    //* state
    status,
    name,
    lastname,
    state,
    role,

    //* Methods
    registeringUser,
    loginWithEmailAndPassword,
    logoutSession,
    checkAuthToken,
    editUserPermission,
    editUserInfoByUser,
    onAddToFavs,
    onRemoveFromfavs,
    onAddToBook,
    onRemoveFromBook,
  };
};
