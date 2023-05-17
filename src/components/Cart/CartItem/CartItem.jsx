import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";
import "./CartItem.scss";
const CartItem = () => {
  const { cartItems,  handleRemoveFromCart,handleCartProductQuantity } =
    useContext(Context);
  console.log(cartItems);
  return (
    <div className="cart-products">
      {cartItems.map((item,index) => (
        <div className="cart-product" key={index}>
          <div className="img-container">
            <img src={item.img} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>
              <span>{item.quantity}</span>
              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377; {item.price*item.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
