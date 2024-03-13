import PrimaryButton from '@/components/custom-ui/PrimaryButton';
import CardHome from '@/components/home/CardHome';
import { useAuthContext } from '@/context/authContext/useAuthContext';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export const UserFavoritesPage = () => {
  const { state } = useAuthContext();
  const navigate = useNavigate()

  return (
    <div className="m-4 ">
      <div className="my-4 mr-2 flex justify-end fixed right-8 top-[70px]">
        <PrimaryButton onClick={() => navigate(-1)}>
          <MdOutlineKeyboardReturn className="text-xl" />
        </PrimaryButton>
      </div>
      <h2 className="ml-16 text-3xl">Favoritos</h2>
      <div className="mb-6 mt-6 flex flex-wrap justify-center gap-x-32 gap-y-12">
        {state.favorites.length > 0 ? (
          state.favorites.map((fav) => (
            <CardHome
              key={fav.id}
              isFav={state.favorites.some((product) => product.id === fav.id)}
              product={fav}
            />
          ))
        ) : (
          <div className="flex items-center justify-center">
            <img
              src="/img/sinfav-transp.webp"
              alt="robot"
              className="h-full w-full" // Ajusta el tamaño según tus necesidades
            />
          </div>
        )}
      </div>
    </div>
  );
};
