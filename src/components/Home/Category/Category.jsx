import {useNavigate} from 'react-router-dom'

import "./Category.scss";


const Category = ({categories}) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
      {categories?.map((item,index)=>(
        <div className="category"  onClick={()=>navigate(`/category/${item.categoryName}`)} key={index}>
          <img src={item.categoryImg} alt="" />
          <h2>{item.categoryName}</h2>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Category;
