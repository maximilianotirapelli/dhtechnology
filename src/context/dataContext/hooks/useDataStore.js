import { useEffect } from 'react';
import { useDataContext } from '../useDataContext';
import { useToast } from '@/components/ui/use-toast';

const URL = 'http://localhost:8080/api/v1';
//const URL = 'http://18.232.138.16:8080/api/v1';

export const useDataStore = () => {
  const { state, handleFetchProducts, handleLoading, handleFetchCategories } =
    useDataContext();
  const { status } = state;
  const { toast } = useToast();

  //* Función para traer los pruductos del back y colocarlos en el state
  const fetchForProducts = async () => {
    handleLoading();

    try {
      const resp = await fetch(URL + '/productos');
      const data = await resp.json();
      handleFetchProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  //* Función para traer los pruductos del back y colocarlos en el state
  const fetchForCategories = async () => {
    handleLoading();

    try {
      const resp = await fetch(URL + '/categorias');
      const data = await resp.json();

      handleFetchCategories(data);
    } catch (error) {
      console.log(error);
    }
  };


  //* Función para crear productos
  const onCreatingNewProduct = async (product) => {
    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    };

    try {
      const resp = await fetch(
        '/productos/registrar-prod-sin-img',
        requestBody,
      );
      const data = await resp.json();

      if (data.ok) {
        toast({
          description: 'Se ha añadido un nuevo producto',
          variant: 'success',
        });
      }
    } catch (error) {
      console.log(error);
      toast({ description: 'Algo ha salido mal', variant: 'destructive' });
    }
  };

  //* Función para crear productos files
  const onCreatingNewProductFiles = async (filesData) => {
    const requestBody = {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: filesData,
    };

    try {
      await fetch(
        '/productos/registrar-img',
        requestBody,
      )

    } catch (error) {
      console.log(error);
    }
  };



  // useEffect(() => {
  //   fetchForProducts();
  // }, []);
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
    onCreatingNewProduct,
    onCreatingNewProductFiles
  };
};
