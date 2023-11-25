import CardHome from "@/components/home/CardHome"
import { useAuthContext } from "@/context/authContext/useAuthContext"

export const UserFavoritesPage = () => {

    const {state} = useAuthContext()

    console.log(state.favs);
    return (
        <div className="m-4">
            <h2 className="text-3xl ml-16">Favoritos</h2>
            <div className="flex justify-center flex-wrap gap-x-32 gap-y-12 mt-6 mb-6">
                {
                    state.favs.map(fav => <CardHome 
                        key={fav.id} 
                        isFav={state.favs.some(product => product.id === fav.id)}
                        product={fav}
                        />)
                }
            </div>
        </div>
    )
}
