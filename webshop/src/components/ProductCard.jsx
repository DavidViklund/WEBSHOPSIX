import { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/dataFetching';
import CategoryFilter from './CategoryFilter';

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

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (category === 'all') return products;
    return products.filter((product) => product.category === category);
  }, [products, category]);

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <CategoryFilter setCategory={setCategory} activeCategory={category} />
      <div className="card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img className="w-[300px] h-[300px] object-cover" src={product.image} alt={product.title} />
            <div className="flex justify-between border-t mt-2 pt-2">
              <h1 className="font-bold">{product.title}</h1>
              <p>{product.category}</p>
            </div>
            <p className="border-t mt-2 pt-2">{product.description}</p>
            <div className="flex justify-between border-t mt-2 pt-2">
              <button className="bg-blue-500 text-white rounded p-2">Lägg i varukorgen</button>
              <p>{product.price}$</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
