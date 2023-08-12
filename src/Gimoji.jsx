import { useEffect, useState } from "react";
import Navbar from "./Header/Navbar";
import Select from "./components/ui/Select";
import Banner from "./components/Banner";
import "./styles/style.css";
import GiftCard from "./components/GiftCard";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;
const urlApi = import.meta.env.VITE_URL_API;

export const Gimoji = () => {
  const [categories, setCategories] = useState([]);
  const [gift, setGift] = useState([]);
  const [serch, setSerch] = useState("animales");

  useEffect(() => {
    getCategories();
    init();
  }, []);

  useEffect(() => {
    init();
  }, [serch]);

  const getCategories = async () => {
    const resp = await fetch(`${urlApi}/v1/gifs/categories?api_key=${apiKey}`);
    const { data } = await resp.json();
    setCategories(data);
  };

  const init = async () => {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=xSXoVJnW1zvmU2hBqUWURZpYVzukXYfJ&q=${serch}&limit=24&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const { data } = await resp.json();
    setGift(data);
  };
  const onchangebycategory = (e) => {
    console.log(e.target.value);
    setSerch(e.target.value);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Select
        categoriesdata={categories}
        onchangebycategory={(e) => onchangebycategory(e)}
      ></Select>
      <div className="album py-5 container">
        <div className="row">
          <GiftCard gift={gift}></GiftCard>
        </div>
      </div>
    </>
  );
};
