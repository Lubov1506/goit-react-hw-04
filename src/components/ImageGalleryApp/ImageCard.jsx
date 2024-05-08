const ImageCard = ({ item, handleImgCardClick }) => {
  return (
    <li onClick={() => handleImgCardClick(item)}>
      <img src={item.urls.small} alt={item.alt_description} />
    </li>
  );
};

export default ImageCard;
