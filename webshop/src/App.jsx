import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./pages/LandingPage";
import ProductPage from "./pages/ProductPage";
import AboutUsPage from "./pages/AboutUsPage";
import CartPage from "./pages/CartPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import NavBar from "./components/NavBar";
import SingleProductPage from "./pages/SingleProductPage";
import React, { useState } from "react";

// Create a client
const queryClient = new QueryClient();

function App() {
  const [cartItems, setCartItems] = useState([]);

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
  };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar
          cartQty={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/ProductPage"
            element={<ProductPage addToCart={addToCart} />}
          />
          <Route
            path="/SingleProductPage/:productId"
            element={<SingleProductPage addToCart={addToCart} />}
          />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route
            path="/CartPage"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
          <Route
            path="/OrderSummaryPage"
            element={<OrderSummaryPage cartItems={cartItems} />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
