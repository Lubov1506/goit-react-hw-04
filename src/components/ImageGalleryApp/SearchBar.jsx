import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import s from "./ImageGalleryApp.module.css";
import { FaHandPointLeft } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ handleSetQuery }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (!data.query.trim()) {
      toast.success("Будь ласка, введіть, що хочете знайти", {
        position: "top-right",
        icon: <FaHandPointLeft color="rgb(218, 185, 141)" />,
      });
      return;
    }
    handleSetQuery(data.query);
    reset();
  };
  return (
    <header className={s.search_bar}>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("query")}
          type="text"
          name="query"
          placeholder="введіть для пошуку ..."
        />
        <button type="submit" className={s.btn_search}>
          <FaSearch color="blue" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
