import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import { useState, useEffect } from "react";
// import axios from "axios";

import "./Category.scss";

const Category = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    // axios.get(`http://localhost:3000/posts?category=${id}`)
    // .then(res=>{
    //   setData(res.data)
    // })
    fetch(`https://rest-api-three-liard.vercel.app/posts?category=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">{data ? data[0].category : ""}</div>
        <Products innerPage={true} product={data} />
      </div>
    </div>
  );
};

export default Category;
