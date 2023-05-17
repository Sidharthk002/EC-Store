import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

import { Context } from "../../utils/context";
// import axios from "axios";

const Home = () => {
  const { products, setProducts, categories, setCategories } =
    useContext(Context);

  const getProducts = () => {
    // axios.get("http://localhost:3000/posts").then((res) => {
    //   setProducts(res.data);
    // });
    fetch("https://rest-api-three-liard.vercel.app/posts")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const getCategories = () => {
    // axios.get("http://localhost:3000/posts").then((res) => {
    //   setCategories(res.data);
    // });
    fetch("https://rest-api-three-liard.vercel.app/posts")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getProducts();
    getCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" product={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
