import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useAuthStore } from "@/context/authContext/hooks/useAuthStore";
import { useAuthContext } from "@/context/authContext/useAuthContext";

import React from 'react'

export const CancelBookAlert = ({ id }) => {

    const { state, removeFromBook } = useAuthContext();
    const { onRemoveFromBook } = useAuthStore()

    const handleRemove = () => {
        removeFromBook(id)
        //TODO onRemoveFromBook(state.uid, id)
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger className="text-red-500 hover:cursor-pointer">Cancelar reserva</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás seguro de que quieres cancelar la reserva?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        className="bg-green-500 text-white w-12"
                        onClick={() => handleRemove()}
                    >
                        Sí
                    </AlertDialogCancel>
                    <AlertDialogAction className="w-12">No</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
