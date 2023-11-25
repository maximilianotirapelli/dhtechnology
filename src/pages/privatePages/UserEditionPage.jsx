import PrimaryButton from '@/components/custom-ui/PrimaryButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/context/authContext/hooks/useAuthStore'
import { Label } from '@radix-ui/react-label'
import { useState } from 'react'
import { MdEditSquare } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export const UserEditionPage = () => {

    const { state, editUserInfoByUser } = useAuthStore()

    const navigate = useNavigate()
    const [userData, setUserData] = useState({ id: state.uid })



    return (
        <div className="flex justify-center h-screen">
            <div className="w-1/2 flex flex-col items-center ">

                <div className="flex justify-center items-center gap-x-2">

                    <div className="flex flex-col min-w-[330px] gap-y-4 border-2 border-slate-100 rounded-lg p-7 ">

                        <h2 className="text-2xl place-self-start">Editar datos de usuario</h2>

                        <div className='relative'>
                            <Input
                                className=""
                                type="text"
                                placeholder={state.name}
                                value={userData.name}
                                onChange={(e) =>
                                    setUserData({ ...userData, name: e.target.value })
                                }
                            />
                            <MdEditSquare className='text-3xl pl-2 absolute top-1 right-2' />
                        </div>

                        <div className='relative'>
                            <Input
                                className=""
                                type="text"
                                placeholder={state.lastname}
                                value={userData.lastname}
                                onChange={(e) =>
                                    setUserData({ ...userData, lastname: e.target.value })
                                }
                            />
                            <MdEditSquare className='text-3xl pl-2 absolute top-1 right-2' />
                        </div>

                        <div className='relative'>
                            <Input
                                className=""
                                type="email"
                                placeholder={state.email}
                                value={userData.email}
                                onChange={(e) =>
                                    setUserData({ ...userData, email: e.target.value })
                                }
                            />
                            <MdEditSquare className='text-3xl pl-2 absolute top-1 right-2' />
                        </div>

                        <Button
                            className="bg-indigo-700"
                        //onClick={() => editUserInfoByUser(userData)}
                        >
                            Editar
                        </Button>

                        <PrimaryButton onClick={() => navigate("/")}>
                            Salir
                        </PrimaryButton>
                    </div>

                    <div>
                        <img
                            src="/img/girlEdit.svg"
                            alt=""
                            className="h-[420px] mt-6 border-0 rounded-xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}
