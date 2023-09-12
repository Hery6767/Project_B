import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import Ads from "../../Ads";
import { CartContext } from "../../../context/CartApp";

function Cart(props) {
  const { listCake } = props;
  const { cart } = useContext(CartContext);
  const [currentCart, setCurrentCart] = useState([]);


  const removeFromCart = (index) => {
    const getCake = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
     getCake.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(getCake))
  }
  
  const checkOutCart = () =>{
    localStorage.setItem("cart","[]") 
  }
  
  const totalPrice = cart?.reduce((prev, current) => {
    const total = prev + current.total;
    return total;
  }, 0);

  useEffect(() => {
    const newCart = cart.map((cake) => {
      const findCake = listCake.find((item) => item.id === cake.cakeID);
      const newCakeInCart = {
        ...cake,
        ...findCake,
        selectedOption: findCake.option[cake.optionIndex],
      };
      const { option, optionIndex, cakeID, ...rest } = newCakeInCart;
      return rest;
    });
    setCurrentCart(newCart);
  }, [cart]);


  
  return (
    <div className="cartShop">
      <div className="hrCart"></div>
      <div className="cartTitle">
        <h1>Cart</h1>
        <Link to="/">
          <p>Continue shopping</p>
        </Link>
      </div>
      {cart.length === 0 ? (
        <h3 className="cartEmpty">Your cart is currently empty.</h3>
      ) : (
        <div className="cartContainer">
          <div className="topCart">
            <div className="topCartItem">
              <h4>Price</h4>
            </div>
            <div className="topCartItem">
              <h4>Quantity</h4>
            </div>
            <div className="topCartItem">
              <h4>Total</h4>
            </div>
          </div>
          {currentCart.map((cake, index) => (
            <div
              className="centerCart"
              key={index}>
              <div className="centerCartItem">
                <div>
                  <button onClick={() => removeFromCart(index)}>
                    <img src="../src/image/bin.png" />
                  </button>
                </div>
                <div className="centerCartItemImg">
                  <img src={cake.image} />
                </div>
                <div className="centerCartItemInf">
                    <h4>{cake.name}</h4>
                    <p>{cake.selectedOption.cakeSize}</p>
                  <div></div>
                </div>
              </div>
              <div className="centerCartItem">
                <h4>${cake.price}</h4>
              </div>
              <div className="centerCartItem">
                <h4>    
                   {cake.quantity}
                </h4>
              </div>
              <div className="centerCartItem">
                <h4>${cake.total}.00 </h4>
              </div>
            </div>
          ))}
          <div className="botCart">
            <div className="botCartItem">
              <h4>Oder Note</h4>
            </div>
            <div className="botCartItem">
              <h4>Subtotal</h4>
            </div>
            <div className="botCartItem">
              <h4>${totalPrice}.00 </h4>
            </div>
          </div>
          <div className="checkOutContainer">
            <div className="checkOutItem">
              <div className="noteOrder">
                <textarea></textarea>
              </div>
            </div>
            <div className="checkOutItem">
              <p>Shipping, taxes, and discounts codes calculated at checkout.</p>
              <button className="upDateCart"> up date cart </button>
              <button className="shipBtn">
                <img
                  className="shipBtnItem"
                  src="./src/image/distance.png"
                />
                <p className="shipBtnItem">Shipping</p>{" "}
              </button>
              <h3>
                If your order contains item from our bakery, they require a 1-2 day
                shipping method and 4-6 hours to thaw.
              </h3>
              <button className="checkOutBtn" onClick={checkOutCart} >Check out</button>
            </div>
          </div>
        </div>
      )}
      <Ads />
    </div>
  );
}

export default Cart;
