import React, { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SingleProductPage from "./SingleProductPage";
import Paginering from "../components/Paginering";
import CategoryFilter from "../components/CategoryFilter";
import { getProducts } from "../api/dataFetching";

const ProductPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const itemsPerPage = 8;
  const [totalProducts, setTotalProducts] = useState(0);

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  useEffect(() => {
    if (products) {
      setTotalProducts(products.length); // Update totalProducts with the number of products
    }
  }, [products]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (category === "all") return products;
    return products.filter((product) => product.category === category);
  }, [products, category]);

  // Update total products to reflect the filtered products
  useEffect(() => {
    setTotalProducts(filteredProducts.length);
  }, [filteredProducts]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, page, itemsPerPage]);

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

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when page changes
  };

  const pageCount = Math.ceil(totalProducts / itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <CategoryFilter
        setCategory={setCategory}
        activeCategory={category}
        products={products}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProductCard
              paginatedProducts={paginatedProducts}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={<SingleProductPage addToCart={addToCart} />}
        />
      </Routes>
      <div className="flex justify-center mt-4">
        {pageCount > 1 && (
          <Paginering
            page={page}
            count={pageCount}
            handleChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPage;
