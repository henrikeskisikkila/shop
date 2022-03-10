import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("ContextProvider: useEffect read items from localStorage");
    const storedCartItems = localStorage.getItem("cartItems");
    console.log("storedCartItems", storedCartItems);
    const initial = storedCartItems !== null ? JSON.parse(storedCartItems) : [];
    setCartItems(initial);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("ContextProvider: useEffect stored to localStorage", cartItems);
  }, [cartItems]);

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  const removeFromCart = (barcode) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.barcode !== parseInt(barcode))
    );
  };

  return (
    <Context.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
