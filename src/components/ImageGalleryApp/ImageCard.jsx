const ImageCard = ({ item, onImageClick }) => {
  return (
    <li>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => onImageClick(item)}
      />
    </li>
  );
};

export default ImageCard;
