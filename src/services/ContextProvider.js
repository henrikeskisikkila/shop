import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const initial = storedCartItems !== null ? JSON.parse(storedCartItems) : [];
    setCartItems(initial);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeFromCart = (barcode) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex(
        (item) => parseInt(item.barcode) === parseInt(barcode)
      );
      prevItems.splice(index, 1);
      return [...prevItems];
    });
  };

  return (
    <Context.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
