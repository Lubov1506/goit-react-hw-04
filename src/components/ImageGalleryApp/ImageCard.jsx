const ImageCard = ({ item, openModal, handleImgCardClick }) => {
  return (
    <li onClick={() => handleImgCardClick(item)}>
      <img
        src={item.urls.small}
        alt={item.alt_description}
        onClick={openModal}
      />
    </li>
  );
};

export default ImageCard;
