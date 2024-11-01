import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
// import Cart from "./Cart";

function Home({ addToCart }) {
  const arr = [
    { id: 1, img: "src/images/t-shirt.jpg", title: "T-Shirt", price: 200 },
    { id: 2, img: "src/images/jeans.jpg", title: "Jeans", price: 700 },
    { id: 3, img: "src/images/bag.jpg", title: "Bag", price: 500 },
  ];
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="header">
          <h1 className="gfg">GeeksforGeeks Shopping Cart</h1>
          <input type="text" placeholder="Search for GFG Products..." />

          <button className="cartBtn" onClick={() => navigate("/Cart")}>
            <u>My Cart</u>
          </button>
        </div>

        <div className="cards">
          {arr.map((item) => (
            <div className="cardContainer" key={item.id}>
              <div className="image">
                <img src={item.img} width="200px" height="300px" />
              </div>
              <div className="cardDetails">
                <div className="item">{item.title}</div>
                <div className="price">Rs. {item.price}</div>
                <button className="addcart" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <Cart /> */}
      </div>
    </>
  );
}

export default Home;
