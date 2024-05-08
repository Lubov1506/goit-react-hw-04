import { useEffect, useState } from "react";

import { fetchSearchData } from "../../service/api";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import LoadMoreBtn from "./LoadMoreBtn";
import EmptyResult from "./EmptyResult";
import ImageModal from "./ImageModal";

const ImageGalleryApp = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmptyData, setIsEmptyData] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [choseImg, setChoseImg] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        setIsEmptyData(false);
        const { results, total_pages } =
          query && (await fetchSearchData({ query, page: page }));

        results.length
          ? setImages((prev) => [...prev, ...results])
          : setIsEmptyData(true);
        setTotalPages(total_pages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };
  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(0);
  };
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const handleImgCardClick = (item) => {
    setChoseImg(item);
  };

  return (
    <div>
      <SearchBar handleSetQuery={handleSetQuery} />
      {isEmptyData && <EmptyResult query={query} />}
      {images.length ? (
        <>
          <ImageGallery
            images={images}
            openModal={openModal}
            handleImgCardClick={handleImgCardClick}
          />
          {page < totalPages && (
            <LoadMoreBtn handleChangePage={handleChangePage} />
          )}
        </>
      ) : null}
      {choseImg && (
        <ImageModal
          isOpenModal={isOpenModal}
          closeModal={closeModal}
          choseImg={choseImg}
        />
      )}

      {loading && <Loader />}
    </div>
  );
};

export default ImageGalleryApp;
