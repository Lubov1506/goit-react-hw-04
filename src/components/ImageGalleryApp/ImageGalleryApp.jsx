import { useEffect, useState } from "react";

import { fetchSearchData } from "../../service/api";
import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";
import LoadMoreBtn from "./LoadMoreBtn";
import EmptyResult from "./EmptyResult";

const ImageGalleryApp = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmptyData, setIsEmptyData] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        setIsEmptyData(false);
        const { results, total_pages } =
          query && (await fetchSearchData({ query, page: page }));
        console.log(total_pages);
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
    console.log("load more");
    setPage((prev) => prev + 1);
  };
  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(0);
  };
  return (
    <div>
      <SearchBar handleSetQuery={handleSetQuery} />
      {isEmptyData && <EmptyResult query={query}/>}
      {images.length ? <ImageGallery images={images} /> : null}
      {page < totalPages && <LoadMoreBtn handleChangePage={handleChangePage} />}
      {loading && <Loader />}
    </div>
  );
};

export default ImageGalleryApp;
