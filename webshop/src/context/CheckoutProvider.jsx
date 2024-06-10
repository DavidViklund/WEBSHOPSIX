import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context for the checkout
const CheckoutContext = createContext();

export const useCheckout = () => {
  return useContext(CheckoutContext);
};

const CheckoutProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from local storage, or start with an empty array
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [flash, setFlash] = useState(false); // State for flash effect

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setFlash(true); // Trigger flash effect when adding to cart
    setTimeout(() => setFlash(false), 500); // Reset flash effect after 500ms
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
    setFlash(true); // Trigger flash effect when updating quantity
    setTimeout(() => setFlash(false), 500); // Reset flash effect after 500ms
  };

  return (
    <CheckoutContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, flash }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
