import {useNavigate} from 'react-router-dom'

import "./Category.scss";


const Category = ({categories}) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
      {categories?.map((item,index)=>(
        <div className="category"  onClick={()=>navigate(`/category/${item.categoryName}`)} key={index}>
          <h2 style={{color:'white'}}>{item.categoryName}</h2>
          <img src={item.categoryImg} alt="" />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Category;
