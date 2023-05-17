import "./Products.scss";
import Product from './Product/Product'

const Products = ({product,innerPage,headingText}) => {
    return (<div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
            {product?.map((item,index)=>(
               item.id>0 ? <Product key={index} img={item.img} price={item.price} title={item.title
                } id={item.id}/> : ""
            ))}
        </div>
    </div>);
};

export default Products;
