// React
import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// Shadcn components
import { useToast } from '@/components/ui/use-toast';
// Mock categories
import categories from '@/mocks/categories.json';
// Mock products
import products from '@/mocks/products.json';

//* EN ESTE FUNCTIONAL COMPONENT MANEJAMOS EL ESTADO Y EL CONTEXT, PROBABLEMENTE TAMBIÉN
//* LA CONEXIÓN A BASE DE DATOS PARA RECUPERAR LA DATA Y LAS FUNCIONES PRINCIPALES.

//*****************
//***************

//* ESTADO INICIAL

const initialState = {
  isLoading: false,
  products: products,
  categories: categories,
};

//* FUNCIÓN REDUCER PARA MANEJAR LA DATA, DESPUÉS VEMOS COMO INTEGRAMOS TODO.

const reducer = (state, action) => {
  switch (action.type) {
    case 'CARGAR_PRODUCTOS':
      return {
        ...state,
        isLoading: false,
        products: [...action.payload],
      };

    case 'CARGAR_CATEGORIAS':
      return {
        ...state,
        isLoading: false,
        categories: [action.payload],
      };

    case 'AGREGAR_PRODUCTO':
      return {
        ...state,
        isLoading: false,
        products: [...state.products, action.payload],
      };

    case 'BORRAR_PRODUCTO':
      return {
        ...state,
        products: state.products.filter((elem) => elem.id !== action.payload),
      };

    case 'AGREGAR_CATEGORIA':
      return { ...state, categories: [...state.categories, action.payload] };

    case 'BORRAR_CATEGORIA':
      return {
        ...state,
        categories: state.categories.filter(
          (elem) => elem.id !== action.payload,
        ),
      };

    case 'IS_LOADING':
      return { ...state, isLoading: true };

    default:
      return state;
  }
};

//* CONTEXT API
export const DataContext = createContext();

DataContextProvider.propTypes = {
  children: PropTypes.node,
};

export default function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  //* Alertas propias del shadcn
  const { toast } = useToast();

  //* Función para cargar productos desde el back
  const handleFetchProducts = (products) => {
    dispatch({ type: 'CARGAR_PRODUCTOS', payload: products });
  };

  //* Función para cargar categorias desde el back
  const handleFetchCategories = (products) => {
    dispatch({ type: 'CARGAR_CATEGORIAS', payload: products });
  };

  //* Función para agregar productos desde el administrador
  const agregarProducto = (product) => {
    if (!state.products.some((item) => item.id === product.id)) {
      dispatch({ type: 'AGREGAR_PRODUCTO', payload: product });
      toast({ description: 'El producto se ha guardado', variant: 'success' });
    } else {
      toast({ description: 'Este producto ya existe', variant: 'destructive' });
    }
  };

  //* Función para eliminar productos desde el administrador
  const borrarProducto = (id) => {
    if (!state.products.some((item) => item.id === id)) {
      toast({ description: 'Este producto no existe', variant: 'destructive' });
    } else {
      dispatch({ type: 'BORRAR_PRODUCTO', payload: id });
      toast({ description: 'Producto eliminado', variant: 'success' });
    }
  };

  //* Controlar el loading
  const handleLoading = () => {
    dispatch({ type: 'IS_LOADING' });
  };

  //* Función para agregar categorías desde el administrador
  const agregarCategoria = (category) => {
    if (!state.categories.some((item) => item.id === category.id)) {
      dispatch({ type: 'AGREGAR_CATEGORIA', payload: category });
      toast({ description: 'La categoría se ha guardado', variant: 'success' });
    } else {
      toast({
        description: 'Este categoría ya existe',
        variant: 'destructive',
      });
    }
  };

  //* Función para eliminar categorías desde el administrador
  const borrarCategoria = (id) => {
    if (!state.categories.some((item) => item.id === id)) {
      toast({
        description: 'Esta categoría no existe',
        variant: 'destructive',
      });
    } else {
      dispatch({ type: 'BORRAR_CATEGORIA', payload: id });
      toast({ description: 'Categoría eliminada', variant: 'success' });
    }
  };

  return (
    <DataContext.Provider
      value={{
        state,
        categories,
        agregarProducto,
        borrarProducto,
        agregarCategoria,
        borrarCategoria,
        handleLoading,
        handleFetchProducts,
        handleFetchCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
