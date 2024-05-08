import Modal from "react-modal";
import s from "./ImageGalleryApp.module.css";
Modal.setAppElement("#root");
import { IoMdClose } from "react-icons/io";
import { FcLike } from "react-icons/fc";

const ImageModal = ({ isOpenModal, choseImg, closeModal }) => {
  return (
    <div>
      <Modal
        isOpen={isOpenModal}
        className={s.modal}
        overlayClassName={s.overlay}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
      >
        <button className={s.close_btn} onClick={closeModal}>
          <IoMdClose size={24} />
        </button>
        <img src={choseImg.urls.regular} alt={choseImg.alt_description} />
        <div className={s.info_block}>
          <div className={s.bottom}>
            <p className={s.author}>{choseImg.user.name}</p>
            <p>
              <FcLike />
              {choseImg.user.total_likes}
            </p>
          </div>
          <p className={s.describe}>{choseImg.alt_description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
