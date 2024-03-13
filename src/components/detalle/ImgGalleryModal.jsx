import Modal from 'react-modal';

//* Posicionamiento del modal en la pantalla
const customStyles = {
  content: {
    height: '500px',
    maxWidth: '550px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.4)',
  },
};

//* Esto es para sobreponer el modal al resto de la pantalla, se ancla al id root en el html
Modal.setAppElement('#root');

export const ImgGalleryModal = ({ children, isOpen, onCloseModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      closeTimeoutMS={200}
    >
      {children}
    </Modal>
  );
};
