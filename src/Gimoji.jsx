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

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const resp = await fetch(`${urlApi}/v1/gifs/categories?api_key=${apiKey}`);
    const { data } = await resp.json();
    console.log(data);
    setCategories(data);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Select categoriesdata={categories}></Select>
      <div className="album py-5 container">
        <div>
          <GiftCard></GiftCard>
        </div>
      </div>
    </>
  );
};
