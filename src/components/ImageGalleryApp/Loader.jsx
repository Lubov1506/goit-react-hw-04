import { MutatingDots } from "react-loader-spinner";
import s from "./ImageGalleryApp.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <MutatingDots color="blue" secondaryColor="blue" />
    </div>
  );
};

export default Loader;
