import React, { useState } from "react";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding items to cart
  const handleAddToCart = (item) => {
    // Does no add duplicate items to cart instead increasing quantity
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // If item already in cart, increase quantity
        return prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Otherwise, add item with initial quantity of 1
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveProduct = (prod) => {
    setCartItems((prevItems) => prevItems.filter((item) => item != prod));
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home addToCart={handleAddToCart} />}
          />
          <Route
            exact
            path="/Cart"
            element={
              <Cart cartItems={cartItems} remove={handleRemoveProduct} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
