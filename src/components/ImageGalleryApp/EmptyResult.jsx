import s from "./ImageGalleryApp.module.css";

const EmptyResult = ({ query }) => {
  return (
    <div className={s.msg}>
      <p>Немає результатів за запитом<span> "{query}"</span></p>
    </div>
  );
};

export default EmptyResult;
