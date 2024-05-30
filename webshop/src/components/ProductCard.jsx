import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/dataFetching';
import CategoryFilter from './CategoryFilter';
import Button from './Button';
import Paginering from './Paginering'; // Importera Paginering

const ProductCard = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setPage(1);
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (category === 'all') return products;
    return products.filter((product) => product.category === category);
  }, [products, category]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, page, itemsPerPage]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <CategoryFilter setCategory={setCategory} activeCategory={category} />
      <div className="card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="flex flex-col m-4 border border-greyscale-border-darker p-4 rounded-xl">
            <div className="flex items-center">
              <img className="w-full h-full object-cover" src={product.image} alt={product.title} />
            </div>
            <div className="flex justify-between border-t mt-2 pt-2">
              <p className="font-bold">{product.title}</p>
              <p>{product.category}</p>
            </div>
            <div className="flex justify-between border-t mt-2 pt-2">
              <Button text={'see more'} />
              <p>{product.price}$</p>
            </div>
          </div>
        ))}
      </div>
      <Paginering page={page} count={Math.ceil(filteredProducts.length / itemsPerPage)} handleChange={handleChange} />
    </div>
  );
};

export default ProductCard;
