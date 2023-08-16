import { useEffect, useState } from "react";
import Navbar from "./components/Header/Navbar";
import Select from "./components/ui/Select";
import Banner from "./components/Banner";
import "./styles/style.css";
import GiftCard from "./components/GiftCard";
import { giphyAxios } from "./config/AxiosGiphy";
import useFetch from "./hooks/useFetch";


const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;

export const Gimoji = () => {
  const [categories, setCategories] = useState([]);
  const [gift, setGift] = useState([]);
  const [serch, setSerch] = useState("monos");

  const {data,isLoading} = useFetch(`${urlApi}gifs/categories?api_key=${apiKey}`);


  useEffect(() => {
    getCategories();
    init();
  }, [data]);

  useEffect(() => {
    init();
  }, [serch]);

  // const getCategories = async () => {
  //   const categData = await giphyAxios.get(`gifs/categories?api_key=${apiKey}`);
  //   const { data } = categData;
  //   setCategories(data.data);
  // };
  
  const init = async () => {
    const {data} = await  giphyAxios.get(
      `${urlApi}gifs/search?api_key=${apiKey}&q=${serch}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
    const { data:serchData } = data
    setGift(serchData);
  };

  const getCategories = async () => {
   setCategories(data);
  };

  // const init = async () => {
  //   const resp = await fetch(
  //     `${urlApi}gifs/search?api_key=${apiKey}&q=${serch}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
  //   );
  //   const { data } = await resp.json();
  //   setGift(data);
  // };

  const onchangebycategory = (e) => {
    setSerch(e.target.value);
  };
  const onchangeBySerch = (e) => {
    const data = e.target.value;
    if (data.length >= 3) {
      setSerch(e.target.value);
    }
  };

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
