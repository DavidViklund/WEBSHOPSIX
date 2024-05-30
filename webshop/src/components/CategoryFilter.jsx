import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../api/dataFetching';

const CategoryFilter = ({ setCategory, activeCategory }) => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories</p>;

  return (
    <div className="flex gap-2 mb-4">
      <button onClick={() => setCategory('all')} className={`rounded ${activeCategory === 'all' ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}>
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category} // Använd kategorinamn som nyckel
          onClick={() => setCategory(category)}
          className={`rounded ${activeCategory === category ? 'bg-blue-700 text-white' : 'bg-blue-500 text-white'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
