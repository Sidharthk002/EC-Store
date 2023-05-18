import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../utils/context";
import "./Checkout.scss";

const initState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  }

  const cashOn = {
    cash:false
  }
const Checkout = () => {
  // const {} = useContext(Context);
  const {
    cartItems,
    handleRemoveFromCart,
    handleCartProductQuantity,
    cartSubTotal
  } = useContext(Context);

  const [checkoutInput,setCheckoutInput] = useState(initState)
  const [cashOnD,setCashOnD] = useState(cashOn);
  const [data,setData] = useState([])
  const handleInput = (e)=>{
    setCheckoutInput({...checkoutInput,[e.target.name]:e.target.value});
    setData(checkoutInput)
    setData([...data,checkoutInput])
  }

  const handleChange = (e) => {
    setCashOnD({...cashOnD,[e.target.name]:e.target.checked})
    console.log(cashOnD)
  }
  console.log(cashOnD)

  const submitOrder = (e) =>{
    e.preventDefault();
    console.log(data)
    console.log(cartItems.length)
    if(cashOnD.cash===false){
        alert("Please select payment method!")
    }
    if(cartItems.length === 0){
        alert("Please add some products!")
    }
    if(cashOnD.cash===true && cartItems.length > 0){
      // eslint-disable-next-line no-useless-concat
      alert("Your Order is Placed." + "\n" + "Thank you so much for your order!")
    }
  }
  return (
    <div className="container">
      <div className="checkoutPage">
        <h2>Delivery Information</h2>
        <div className="formPage">
          <form className="form"  onSubmit={submitOrder}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="" name="name" onChange={handleInput} value={checkoutInput.name} required/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="" name="email" onChange={handleInput} value={checkoutInput.email} required />
            <label htmlFor="">Mobile Number</label>
            <input type="number" placeholder="" name="phone" onChange={handleInput} value={checkoutInput.phone} required/>
            <label htmlFor="">Address</label>
            <input type="text" placeholder="" name="address" onChange={handleInput} value={checkoutInput.address} required/>
            <label htmlFor="">City</label>
            <input type="text" placeholder="" name="city" onChange={handleInput} value={checkoutInput.city} required/>
            <label htmlFor="">State</label>
            <input type="text" placeholder="" name="state" onChange={handleInput} value={checkoutInput.state} required/>
            <label htmlFor="">ZIP</label>
            <input type="number" placeholder="" name="zip" onChange={handleInput} value={checkoutInput.zip} required/>
            <label htmlFor=""></label>
            <input type="submit" value="Place Order" id="in"  />
          </form>
        </div>
        <div className="payment">
          <h4>Online Payment is not avaliable right now.</h4>

          <div className="paymentMethod">
            <input type="checkbox" name="" id="" disabled />
            <label>Online Payment</label>

            <input type="checkbox" name="cash" onChange={handleChange}  id="" />
            <label>Cash on Delivery</label>
          </div>
        </div>
      </div>

      <div className="cartProducts">
        <h2>Order Summary</h2>
        <div className="container2">
          {cartItems.map((item, index) => (
            <div className="cartProduct" key={index}>
              <div className="imgContainer">
                <img src={item.img} alt="" />
              </div>
              <div className="prodDetails">
                <span className="name">{item.title}</span>
                <MdClose
                  className="closeBtn"
                  onClick={() => handleRemoveFromCart(item)}
                />
                <div className="quantityButtons">
                  <span onClick={() => handleCartProductQuantity("dec", item)}>
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span onClick={() => handleCartProductQuantity("inc", item)}>
                    +
                  </span>
                </div>
                <div className="texT">
                  <span>{item.quantity}</span>
                  <span>x</span>
                  <span className="highlighT">
                    &#8377; {item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cartFooter">
          <div className="subTotal">
            <span className="texT">Subtotal:</span>
            <span className="texT">&#8377; {cartSubTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
