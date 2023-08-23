import { useEffect, useState } from "react";
import { giphyAxios } from "../config/AxiosGiphy";
const urlApi = import.meta.env.VITE_URL_API;
const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

const UseAxiosGif = (serch) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [searchData, setSearchData] = useState(``);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 24;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getFetch();
  }, [serch, offset]);

  const getFetch = async () => {
    const resp = await giphyAxios.get(
      `${urlApi}gifs/search?api_key=${apiKey}&q=${serch}&limit=${limit}&offset=${offset}&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const { data } = resp.data;

    setDataFetch((prev) => {
      if (serch != searchData) {
        setSearchData(serch);
        return data;
      } else {
        return [...prev, ...data];
      }
    });
    setIsLoading(false);
  };

  const onLoadMore = () => {
    setOffset((prev) => prev + 1 + limit);
  };
  return {
    data: dataFetch,
    isLoading,
    onLoadMore,
  };
};

export default UseAxiosGif;
