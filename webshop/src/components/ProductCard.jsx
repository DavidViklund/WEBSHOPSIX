import React, { useMemo, useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/dataFetching';
import CategoryFilter from './CategoryFilter';
import Button from './buttons/Button';

const ProductCard = ({ page, itemsPerPage, setTotalProducts }) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const [category, setCategory] = useState('all');

  useEffect(() => {
    if (products) {
      setTotalProducts(products.length); // Uppdatera totalProducts med antalet produkter
    }
  }, [products, setTotalProducts]);

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (category === 'all') return products;
    return products.filter((product) => product.category === category);
  }, [products, category]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, page, itemsPerPage]);

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <CategoryFilter setCategory={setCategory} activeCategory={category} />
      <div className="card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="flex flex-col gap-3 border border-greyscale-border-darker  bg-greyscale-surface-subtle p-4 rounded-xl">
            <div className="flex justify-center items-center h-[400px] bg-white rounded-lg border border-greyscale-border-default">
              <img className="max-h-full object-cover rounded-lg" src={product.image} alt={product.title} />
            </div>
            <div className=" flex flex-col justify-between flex-grow gap-6">
              <div className="flex flex-col gap-2 ">
                <div className=" flex w-auto">
                  <p className=" capitalize font-medium text-sm py-1 px-2 border border-greyscale-border-default rounded-full whitespace-nowrap">
                    {product.category}
                  </p>
                </div>
                <p className="font-bold text-lg">{product.title}</p>
              </div>
              <div className="flex justify-between items-center">
                <Button text="See more" to={`/product/${product.id}`} />
                <p className=" font-semibold">{product.price}$</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
