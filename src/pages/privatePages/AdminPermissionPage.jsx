import { useEffect, useState } from 'react';
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export const AdminPermissionPage = () => {
  const { editUserPermission } = useAuthStore();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newRol, setNewRol] = useState("");

  console.log(newRol);
  const handleSelectOptionValue = (user) => {
    if (user === 'ADMIN') {
      return 'USER';
    } else {
      return 'ADMIN';
    }
  };

  //* Traer todos los usuarios, este fetch puede estar acá porque se maneja con un useState local
  const fetchForUsers = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch('http://localhost:8080/api/v1/users');
      const data = await resp.json();

      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchForUsers();
  }, []);

  return (
    <div className="p-2">
      <h2 className="mt-4 text-3xl">Usuarios registrados</h2>

      <Table className="mt-2">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead>Editar</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell className="text-2xl">Cargando...</TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <select
                    className={`rounded-sm border-none bg-rose-200 px-2 text-sm font-semibold`}
                    name="select"
                    onChange={({ target }) => setNewRol(target.value)}
                  >
                    <option value={user.rol} className="bg-white">
                      {user.rol}
                    </option>
                    <option
                      value={handleSelectOptionValue(user.rol)}
                      className="bg-white"
                    >
                      {handleSelectOptionValue(user.rol)}
                    </option>
                  </select>
                </TableCell>
                <TableCell>
                  <Button
                    className="h-[25px] rounded-sm bg-slate-100 text-green-600 hover:bg-green-600 hover:text-white"
                    onClick={() => editUserPermission(user.email, newRol)}
                  >
                    Dar permiso
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
