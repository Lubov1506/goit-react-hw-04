import { nanoid } from "nanoid";
import ImageCard from "./ImageCard";
import s from './ImageGalleryApp.module.css'

const ImageGallery = ({ images}) => {
  return <div>
    <ul className={s.list}>
      {images.map(item => {
        return <ImageCard key={ nanoid()} item={item} />
      })}
    </ul>;
    
  </div>
};

export default ImageGallery;
