import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuthStore } from "@/context/authContext/hooks/useAuthStore";
import { useNavigate } from "react-router-dom";

export const UserSessionMenu = ({ firstLetter = "U", name = "User" }) => {
  const { logoutSession } = useAuthStore();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="bg-blue-600 hover:bg-blue-500 px-[14px] py-[4px] border-none rounded-md">
          <span className="text-xl text-white"> {firstLetter} </span>
          <span className="text-white"> {name} </span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent>

        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => navigate("user/edit")}>
          Editar
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => navigate("user/favs")}>
          Favoritos
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => logoutSession()}>
          Cerrar sesión
        </DropdownMenuItem>

      </DropdownMenuContent>

    </DropdownMenu>
  );
};
