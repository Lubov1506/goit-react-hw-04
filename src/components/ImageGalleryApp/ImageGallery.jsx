import ImageCard from "./ImageCard";
import s from "./ImageGalleryApp.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div>
      <ul className={s.list}>
        {images.map((item) => {
          return (
            <ImageCard key={item.id} item={item} onImageClick={onImageClick} />
          );
        })}
      </ul>
      ;
    </div>
  );
};

export default ImageGallery;
