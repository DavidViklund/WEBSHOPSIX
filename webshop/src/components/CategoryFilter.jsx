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
      <button
        onClick={() => setCategory('all')}
        className={` rounded-3xl px-4 py-2 ${
          activeCategory === 'all'
            ? ' bg-primary-surface-default   text-primary-text-label border  border-primary-border-darker'
            : ' bg-greyscale-surface-disabled  text-greyscale-text-disabled border border-greyscale-border-disabled'
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className={`rounded-3xl px-4 py-2 ${
            activeCategory === category
              ? ' bg-primary-surface-default   text-primary-text-label border  border-primary-border-darker'
              : ' bg-greyscale-surface-disabled  text-greyscale-text-disabled border border-greyscale-border-disabled'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
