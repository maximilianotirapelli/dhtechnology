import { useEffect } from "react"
import { useDataContext } from "../useDataContext"
import { useToast } from "@/components/ui/use-toast"

const URL = "http://localhost:8080/api/v1"

export const useDataStore = () => {

    const { state, handleFetchProducts, handleLoading, handleFetchCategories } = useDataContext()
    const { status } = state
    const { toast } = useToast()



    //* Función para traer los pruductos del back y colocarlos en el state
    const fetchForProducts = async () => {
        handleLoading()

        try {
            const resp = await fetch(URL + "/productos")
            const data = await resp.json()
            handleFetchProducts(data)

        } catch (error) {
            console.log(error);
        }
    }

    //* Función para traer los pruductos del back y colocarlos en el state
    const fetchForCategories = async () => {
        handleLoading()

        try {
            const resp = await fetch(URL + "/categorias")
            const data = await resp.json()

            handleFetchCategories(data)

        } catch (error) {
            console.log(error);
        }
    }

    //* Función para crear productos
    const onCreatingNewProduct = async (filesData) => {

        const requestBody = {
            method: "POST",
            //mode: "no-cors",
            body: filesData
        }

        try {
            const resp = await fetch(URL + "/productos/registrar-producto", requestBody)
            const data = await resp.json()

            if (data.ok) {
                toast({ description: "Se ha añadido un nuevo producto" })
            }

        } catch (error) {
            console.log(error);
            toast({ description: "Algo ha salido mal", variant: "destructive" })
        }
    }

    useEffect(() => {
        fetchForProducts()
    }, [])
    // useEffect(() => {
    //     fetchForCategories()
    // }, [state.categories])

    return {
        //* state
        state,
        status,

        //* Methods
        fetchForProducts,
        fetchForCategories,
        onCreatingNewProduct
    }
}