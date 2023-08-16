import { useEffect, useState } from "react";
import Navbar from "./components/Header/Navbar";
import Select from "./components/ui/Select";
import Banner from "./components/Banner";
import "./styles/style.css";
import GiftCard from "./components/GiftCard";
import useFetch from "./hooks/useFetch";
import { Loading } from "./components/ui/Loading";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;

export const Gimoji = () => {
  const [categories, setCategories] = useState([]);
  const [gift, setGift] = useState([]);
  const [serch, setSerch] = useState("monos");

  const { data: dataCateg } = useFetch(
    `${urlApi}gifs/categories?api_key=${apiKey}`
  );
  const { data: dataSearch, isLoading } = useFetch(
    `${urlApi}gifs/search?api_key=${apiKey}&q=${serch}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  );

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
      <div className="album py-5 container">
        <div className="row">
          <GiftCard gift={gift}></GiftCard>
        </div>
      </div>
    </>
  );
};
