import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Page</h1>
      <ProductCard />
    </div>
  );
};

export default ProductPage;
