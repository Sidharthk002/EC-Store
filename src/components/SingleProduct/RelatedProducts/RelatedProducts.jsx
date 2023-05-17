import { React, useEffect, useState } from "react";
import Products from "../../Products/Products";
// import axios from "axios";
const RelatedProducts = ({ categoryId, productId }) => {
  const [data, setData] = useState();
  console.log(categoryId);
  console.log(productId * 2);
  // let datas
  useEffect(() => {
    // axios.get(`http://localhost:3000/posts?category=${categoryId}`).then(res=>{
    //     setData(res.data)
    //     //  datas = data?.filter((p)=> p.id !== productId);
    //   })
    fetch(`http://localhost:3000/posts?category=${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        // datas = data.filter((p) => p.id !== productId);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [categoryId]);
  // console.log(datas)

  return (
    <div className="related-products">
      <Products headingText="Related Products" product={data} />
    </div>
  );
};

export default RelatedProducts;
