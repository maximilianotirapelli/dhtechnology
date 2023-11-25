import { HiOutlineShare } from "react-icons/hi";

const ShareButton = () => {
  const isWebShareSupported = navigator.share !== undefined;

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Título compartido",
        text: "Descripción compartida",
        url: "https://tupagina.com",
      });
      console.log("Contenido compartido con éxito");
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };

  const handleFacebookShare = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      "https://tupagina.com"
    )}`;
    window.open(facebookShareUrl, "_blank");
  };

  const handleWhatsappShare = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      "https://tupagina.com"
    )}`;
    window.open(whatsappShareUrl, "_blank");
  };

  return (
    <div className="flex">
      {isWebShareSupported && (
        <button
          className="flex items-center text-l bg-transparent text-black cursor-pointer"
          onClick={handleShare}
        >
          <HiOutlineShare className="mr-2 text-xl" />
        </button>
      )}

      <button
        className="flex items-center text-xl cursor-pointer ml-2"
        onClick={handleFacebookShare}
      >
        <img
          src="/img/facebook-icon.webp"
          alt="WhatsApp Icon"
          className="w-6 h-6 mr-1"
        />
      </button>

      <button
        className="flex items-center text-xl cursor-pointer ml-2"
        onClick={handleWhatsappShare}
      >
        <img
          src="/img/whatsapp-icon.webp"
          alt="WhatsApp Icon"
          className="w-8 h-8 mr-1"
        />
      </button>
    </div>
  );
};

export default ShareButton;
