import s from "./ImageGalleryApp.module.css";

const Button = (props) => {
  return <button {...props} className={s.btn}></button>;
};

export default Button;
