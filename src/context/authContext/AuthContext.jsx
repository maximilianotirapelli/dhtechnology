import { createContext, useReducer } from "react";

//* Si quieren entrar a /user pongan role: "USER" o "ADMIN"
const initialState = {
    status: "not-authenticated", //checking, not-authenticated, authenticated
    uid: null,
    email: null,
    name: "User",
    lastname: null,
    role: "USER",
    terms: true,
    favs: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                status: "authenticated",
                uid: action.payload.uid,
                email: action.payload.email,
                name: action.payload.name,
                lastname: action.payload.lastname,
                role: action.payload.role
            }

        case "LOGOUT":
            return {
                status: "not-authenticated",
                uid: null,
                email: null,
                name: "",
                lastname: null,
                role: null
            }

        case "CHECKING_CREDENTIALS":
            return { ...state, status: "checking" }

        case "ADD_FAV":
            return {
                ...state,
                favs: [...state.favs, action.payload]
            }

        case "REMOVE_FAV":
            return {
                ...state,
                favs: state.favs.filter((fav) => fav.id !== action.payload)
            }

        default:
            return state;
    }
}

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    //* Functions
    const loginUser = (payload) => {
        dispatch({ type: "LOGIN", payload: payload })
    }

    const logoutUser = () => {
        dispatch({ type: "LOGOUT" })
    }

    const checkingAuthentication = () => {
        dispatch({ type: "CHECKING_CREDENTIALS" })
    }

    const addToFavs = (product) => {
        dispatch({ type: "ADD_FAV", payload: product })
    }

    const removeFromFavs = (id) => {
        dispatch({ type: "REMOVE_FAV", payload: id })
    }


    //*******************************************/
    return (
        <AuthContext.Provider value={{
            state,
            loginUser,
            logoutUser,
            checkingAuthentication,
            addToFavs,
            removeFromFavs
        }}>
            {children}
        </AuthContext.Provider>
    )
}