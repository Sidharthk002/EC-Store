import "./Product.scss";
import { useNavigate } from "react-router-dom";


const Product = ({ id, img, title, desc, cat, price }) => {
    const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <div className="thumbnail">
        <img src={img} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">{title}</span>
        <span className="price"> &#8377; {price}</span>
      </div>
    </div>
  );
};

export default Product;