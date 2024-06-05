import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import SingleProductPage from "./SingleProductPage";
import Paginering from "../components/Paginering";
import { Routes, Route } from "react-router-dom";

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const [totalProducts, setTotalProducts] = useState(0); // Lägg till en state för totalt antal produkter

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

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Page</h1>
      <Routes>
        <Route
          path="/"
          element={
            <ProductCard
              page={page}
              itemsPerPage={itemsPerPage}
              setTotalProducts={setTotalProducts}
            />
          }
        />
        <Route
          path="/SingleProductPage/:productId"
          element={<SingleProductPage addToCart={addToCart} />}
        />
      </Routes>
      <div className="flex justify-center mt-4">
        <Paginering
          page={page}
          count={Math.ceil(totalProducts / itemsPerPage)} // Antalet sidor baserat på totalt antal produkter
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ProductPage;
