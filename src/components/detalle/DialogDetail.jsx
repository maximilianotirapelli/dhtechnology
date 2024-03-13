import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useAuthContext } from '@/context/authContext/useAuthContext'
import { DialogTrigger } from '@radix-ui/themes'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'



export const DialogDetail = ({ handleBook, date = {} }) => {

    const { state } = useAuthContext()
    const { toast } = useToast();

    const onHandleBook = () => {
        if (date.from === "") {
            toast({
                title: 'Alerta',
                description: 'Debes seleccionar una fecha',
                variant: 'alert',
            })
        } else {
            console.log("reserva hecha");
            handleBook()
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-lg">Reservar</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Confirmación de reserva</DialogTitle>
                    <DialogDescription className="text-green-500">
                        ¿Desea confirmar la reserva?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col">
                    <div>
                        <span>Usuario: </span>
                        <span>{state.name}</span>
                    </div>
                    <div>
                        <span>Email: </span>
                        <span>{state.email}</span>
                    </div>
                    <div>
                        <span>Desde: </span>
                        <span className='text-blue-500'>{date.from}</span>
                    </div>
                    <div>
                        <span>Hasta: </span>
                        <span className='text-blue-500'>{date.to}</span>
                    </div>
                </div>
                <DialogFooter className="sm:justify-end mt-4">
                    <DialogClose asChild>
                        <Button className="w-14">
                            No
                        </Button>
                    </DialogClose>

                    <DialogClose>
                        <Button
                            className="bg-green-500 w-14 hover:bg-green-400"
                            onClick={() => onHandleBook()}
                        >
                            Sí
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
