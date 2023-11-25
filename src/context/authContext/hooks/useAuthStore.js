import { useToast } from "@/components/ui/use-toast"
import { useAuthContext } from "../useAuthContext"

//TODO: PONER LOS ENDPOINT CORRECTAMENTE
const URL = "http://localhost:8080/api/v1"

export const useAuthStore = () => {

    const { loginUser, logoutUser, checkingAuthentication, state } = useAuthContext()
    const { status, name, role, uid } = state

    const { toast } = useToast();


    //* Login
    const loginWithEmailAndPassword = async ({ email, password }) => {

        checkingAuthentication();

        const requestBody = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password })
        }

        try {

            const resp = await fetch(URL + "/auth/authenticate", requestBody)
            const data = await resp.json()

            //*Establecer el token que viene del back en el localStorage
            localStorage.setItem("token", JSON.stringify(data.token))
            console.log(data);
            loginUser(data)
            console.log("Autenticación exitosa");

        } catch (error) {
            console.log(error);
            logoutUser()
            toast({ description: "Error en la autenticación", variant: "destructive" })
        }

    }
    //************************************

    //* Registro
    const registeringUser = async ({ name, lastname, email, password }) => {

        checkingAuthentication();

        const requestBody = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name,
                lastname: lastname,
                email: email,
                password: password,
                rol: "USER"
            })
        }

        try {

            const resp = await fetch(URL + "/auth/register", requestBody)
            const data = await resp.json()

            //*Establecer el token que viene del back en el localStorage
            localStorage.setItem("token", JSON.stringify(data.token))
            loginUser(data)
            console.log("Se ha registrado el usuario");

        } catch (error) {
            console.log(error);
            logoutUser()
            toast({ description: "Error en el registro", variant: "destructive" })
        }

    }
    //*****************************

    //* Revisar token para mantener sesión o cerrarla
    const checkAuthToken = async () => {

        checkingAuthentication();

        const token = JSON.parse(localStorage.getItem("token"))
        if (!token) return logoutUser()

        const requestBody = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }

        try {
            const resp = await fetch(URL + "/auth/refresh-token", requestBody)
            const data = await resp.json()
            localStorage.setItem("token", JSON.stringify(data.token))
            loginUser(data)

        } catch (error) {
            console.log(error);
            logoutUser()
        }
    }
    //******************************** 

    //* Cerrar sesión
    const logoutSession = async () => {

        console.log("Cerrando sesión");
        localStorage.clear()
        logoutUser()
    }


    //* Editar características de usuario, dar permiso de ADMIN
    const editUserPermission = async (email, rol) => {

        const requestBody = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rol)
        }

        try {
            const resp = await fetch(URL + "/users/update/" + email, requestBody)
            const data = await resp.json()

            if (data.ok) {
                toast({ description: "Se han dado permisos de admin al usuario" });
            }
        } catch (error) {
            console.log(error);
            toast({ description: "No se ha podido realizar la acción", variant: "destructive" })
        }

    }

    //* Editar características de usuario, dar permiso de ADMIN
    const editUserInfoByUser = async (data) => {

        const requestBody = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        try {
            const resp = await fetch(URL + "/users/edit/" + data.id, requestBody)
            const data = await resp.json()

            if (data.ok) {
                toast({ description: "Se han modificado los datos" });
            }
        } catch (error) {
            console.log(error);
            toast({ description: "No se ha podido realizar la acción", variant: "destructive" })
        }

    }

    //* Add to favorites
    const onAddToFavs = async (data) => {

        checkingAuthentication();

        const requestBody = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }

        try {

            const resp = await fetch(URL + `/users/favorites/${uid}`, requestBody)
            const data = await resp.json()

            //*Establecer el token que viene del back en el localStorage
            localStorage.setItem("token", JSON.stringify(data.token))
            console.log(data);

            toast({ description: "The product is in favorites now" })

        } catch (error) {
            console.log(error);
            logoutUser()
            toast({ description: "Something went wrong", variant: "destructive" })
        }

    }
    //************************************

    //* Remove from favorites
    const onRemoveFromfavs = async (id) => {

        checkingAuthentication();

        const requestBody = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(id)
        }

        try {

            const resp = await fetch(URL + `/users/favorites/${uid}`, requestBody)
            const data = await resp.json()

            //*Establecer el token que viene del back en el localStorage
            localStorage.setItem("token", JSON.stringify(data.token))
            console.log(data);

            toast({ description: "The product was removed from favorites" })

        } catch (error) {
            console.log(error);
            logoutUser()
            toast({ description: "Something went wrong", variant: "destructive" })
        }

    }
    //************************************


    return {
        //* state
        status, name, state, role,

        //* Methods
        registeringUser,
        loginWithEmailAndPassword,
        logoutSession,
        checkAuthToken,
        editUserPermission,
        editUserInfoByUser,
        onAddToFavs,
        onRemoveFromfavs
    }
}



