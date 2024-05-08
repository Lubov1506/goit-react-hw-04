import { nanoid } from "nanoid";
import ImageCard from "./ImageCard";
import s from './ImageGalleryApp.module.css'

const ImageGallery = ({ images, openModal, handleImgCardClick, closeModal}) => {
  return <div>
    <ul className={s.list}>
      {images.map((item, idx) => {
        return <ImageCard key={nanoid()} item={item} openModal={openModal} handleImgCardClick={ handleImgCardClick} closeModal={closeModal} idx={idx} />
      })}
    </ul>;
    
  </div>
};

export default ImageGallery;
