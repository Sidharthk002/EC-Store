import { useContext, useState, useEffect } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
// import axios from "axios";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({});
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);

  useEffect(() => {
    // axios.get(`http://localhost:3000/posts?id=${id}`).then((res) => {
    //   setData(res.data[0]);
    // });
    fetch(`https://rest-api-three-liard.vercel.app/posts?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return;
  // const product = data?.data?.[0]?.attributes;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={data.img} alt="singleProduct" />
          </div>
          <div className="right">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
            <span className="desc">{data.desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data, quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category: <span>{data.category}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts productId={id} categoryId={data.category} />
      </div>
    </div>
  );
};

export default SingleProduct;
