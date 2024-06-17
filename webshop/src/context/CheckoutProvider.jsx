import React, { createContext, useContext, useState, useEffect } from "react";

// context för vår checkout
const CheckoutContext = createContext();

export const useCheckout = () => {
  return useContext(CheckoutContext);
};

const CheckoutProvider = ({ children }) => {
  // Tillstånd för items och orderSummary
  const [cartItems, setCartItems] = useState(() => {
    // Laddar varukorgsföremål från localStorage eller börjar med en tom array
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [orderSummaryItems, setOrderSummaryItems] = useState([]);

  const [flash, setFlash] = useState(false); // State för flash-effekt

  useEffect(() => {
    // Sparar items till localStorage när de ändras
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Kontrollerar om produkten redan finns i varukorgen
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        // Om produkten finns öka antal
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Om produkten inte finns, lägg till den med antal 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setFlash(true); // Aktiverar flash-effekten vid tillägg i varukorgen
    setTimeout(() => setFlash(false), 500); // Återställer flash-effekten efter en halv sekund
  };

  const removeFromCart = (productId) => {
    // Ta bort en produkt från varukorgen
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const removeAllFromCart = () => {
    // Ta bort alla produkter från varukorgen
    setCartItems([]);
  };

  const updateQuantity = (productId, quantity) => {
    // Uppdatera antal för en produkt i varukorgen
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
    setFlash(true); // Aktivera flash-effekten vid uppdatering av kvantitet
    setTimeout(() => setFlash(false), 500); // Återställ flash-effekten efter en halv sekund
  };

  return (
    <CheckoutContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        updateQuantity,
        flash,
        orderSummaryItems,
        setOrderSummaryItems,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
