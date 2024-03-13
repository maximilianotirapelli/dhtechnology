import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useAuthStore } from '@/context/authContext/hooks/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const AdminSessionMenu = ({ firstNameLetter = 'U', firstLastnameLetter = "S" }) => {
    const { logoutSession } = useAuthStore();
    const navigate = useNavigate();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex items-center'>
                <span className='text-xs mr-2 text-green-600 font-bold'>ADMIN</span>
                <div className="rounded-xl border-none bg-slate-800 px-[14px] py-[4px] hover:opacity-90">
                    <span className="text-xl text-white"> {firstNameLetter} </span>
                    <span className="text-xl text-white"> {firstLastnameLetter} </span>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => navigate('admin')}
                >
                    Administración
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => logoutSession()}
                >
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
