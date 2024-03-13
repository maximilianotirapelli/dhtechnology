import { HiOutlineShare } from 'react-icons/hi';

const ShareButton = () => {
  const isWebShareSupported = navigator.share !== undefined;

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Título compartido',
        text: 'Descripción compartida',
        url: 'https://tupagina.com',
      });
      console.log('Contenido compartido con éxito');
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  };

  const handleFacebookShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      'https://tupagina.com',
    )}`;
    window.open(facebookShareUrl, '_blank');
  };

  const handleWhatsappShare = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      'https://tupagina.com',
    )}`;
    window.open(whatsappShareUrl, '_blank');
  };

  return (
    <div className="flex">
      {isWebShareSupported && (
        <button
          className="text-l flex cursor-pointer items-center bg-transparent text-black"
          onClick={handleShare}
        >
          <HiOutlineShare className="mr-2 text-xl" />
        </button>
      )}

      <button
        className="ml-2 flex cursor-pointer items-center text-xl"
        onClick={handleFacebookShare}
      >
        <img
          src="/img/facebook-icon.webp"
          alt="WhatsApp Icon"
          className="mr-1 h-6 w-6"
        />
      </button>

      <button
        className="ml-2 flex cursor-pointer items-center text-xl"
        onClick={handleWhatsappShare}
      >
        <img
          src="/img/whatsapp-icon.webp"
          alt="WhatsApp Icon"
          className="mr-1 h-8 w-8"
        />
      </button>
    </div>
  );
};

export default ShareButton;
