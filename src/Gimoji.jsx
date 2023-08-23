import { useEffect, useState } from "react";
import Navbar from "./components/Header/Navbar";
import Select from "./components/ui/Select";
import Banner from "./components/Banner";
import "./styles/style.css";
import GiftCard from "./components/GiftCard";
import useFetch from "./hooks/useFetch";
import { Loading } from "./components/ui/Loading";
import UseAxiosGif from "./hooks/UseAxiosGif";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;

export const Gimoji = () => {
  const [categories, setCategories] = useState([]);
  const [gift, setGift] = useState([]);
  const [serch, setSerch] = useState("messi");

  const { data: dataCateg } = useFetch(
    `${urlApi}gifs/categories?api_key=${apiKey}`
  );

  const { data: dataSearch, isLoading, onLoadMore } = UseAxiosGif(serch);

  useEffect(() => {
    getCategories(dataCateg);
    setGift(dataSearch);
  }, [dataCateg, dataSearch]);

  const getCategories = async () => {
    setCategories(dataCateg);
  };

  const onchangebycategory = (e) => {
    setSerch(e.target.value);
  };
  const onchangeBySerch = (e) => {
    const data = e.target.value;
    if (data.length >= 3) {
      setSerch(e.target.value);
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Select
        categoriesdata={categories}
        onchangebycategory={(e) => onchangebycategory(e)}
        onchangeBySerch={(e) => onchangeBySerch(e)}
      ></Select>
      <div className="album py-5 container justify-content-center">
        <div className="row">
          <GiftCard gift={gift}></GiftCard>
        </div>
        <div className="text-center pt-3">
          <button onClick={onLoadMore} type="button" class="btn btn-primary">
            Cargar más
          </button>
        </div>
      </div>
    </>
  );
};
