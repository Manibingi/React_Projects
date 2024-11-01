import React, { useState } from "react";
// import tshirt from "../images/t-shirt.jpg";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, remove }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(
    cartItems.map((item) => item.quantity)
  );

  function handleQuantity(index, count) {
    setQuantity((cartItems) =>
      cartItems.map((value, i) =>
        i === index ? Math.max(1, value + count) : value
      )
    );
  }

  // Total Price Function
  const totalAmount = cartItems.reduce(
    (acc, item, index) => acc + item.price * quantity[index],
    0
  );

  return (
    <>
      <div className="cartContainer">
        <h1 className="myCart">My Cart</h1>
        {cartItems.map((item, index) => (
          <>
            <div className="cartImg" key={item.id}>
              <img src={item.img} width="100px" height="100px" />
              <div className="details">
                <div className="itemName">{item.title}</div>
                <div className="itemPrice">Rs. {item.price}</div>
              </div>
            </div>
            <div className="buttons">
              <button className="remove" onClick={() => remove(item)}>
                Remove Product
              </button>
              <div className="quantity">
                <button
                  className="del"
                  onClick={() => handleQuantity(index, -1)}
                >
                  -
                </button>
                <div className="num">{quantity[index]}</div>
                <button
                  className="add"
                  onClick={() => handleQuantity(index, 1)}
                >
                  +
                </button>
              </div>
            </div>
          </>
        ))}
        <div className="payments">
          <div className="amnt">Total amount: Rs. {totalAmount}</div>
          <button className="paymentBtn">Proceed to Payment</button>
          <button className="back" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
