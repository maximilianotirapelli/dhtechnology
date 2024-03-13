import PrimaryButton from '@/components/custom-ui/PrimaryButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { MdEditSquare } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const UserEditionPage = () => {
  const { state, editUserInfoByUser } = useAuthStore();

  const navigate = useNavigate();
  const [userData, setUserData] = useState({ id: state.uid });

  return (
    <div className="flex h-screen justify-center">
      <div className="flex w-1/2 flex-col items-center ">
        <div className="flex items-center justify-center gap-x-2">
          <div className="flex min-w-[330px] flex-col gap-y-4 rounded-lg border-2 border-slate-100 p-7 ">
            <h2 className="place-self-start text-2xl">
              Editar datos de usuario
            </h2>

            <div className="relative">
              <Input
                className=""
                type="text"
                placeholder={state.name}
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
              <MdEditSquare className="absolute right-2 top-1 pl-2 text-3xl" />
            </div>

            <div className="relative">
              <Input
                className=""
                type="text"
                placeholder={state.lastname}
                value={userData.lastname}
                onChange={(e) =>
                  setUserData({ ...userData, lastname: e.target.value })
                }
              />
              <MdEditSquare className="absolute right-2 top-1 pl-2 text-3xl" />
            </div>

            <div className="relative">
              <Input
                className=""
                type="email"
                placeholder={state.email}
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              <MdEditSquare className="absolute right-2 top-1 pl-2 text-3xl" />
            </div>

            <Button
              className="bg-indigo-700"
              //onClick={() => editUserInfoByUser(userData)}
            >
              Editar
            </Button>

            <PrimaryButton onClick={() => navigate('/')}>Salir</PrimaryButton>
          </div>

          <div>
            <img
              src="/img/girlEdit.svg"
              alt=""
              className="mt-6 h-[420px] rounded-xl border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
