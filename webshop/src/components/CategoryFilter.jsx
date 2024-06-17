//Filter för kategorier på produktsida
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/dataFetching";

const CategoryFilter = ({ setCategory, activeCategory, products }) => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories</p>;

  const getCategoryCount = (category) => {
    return (
      products?.filter((product) => product.category === category).length || 0
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <h5>Categories</h5>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setCategory("all")}
          className={`rounded-3xl px-4 py-2 ${
            activeCategory === "all"
              ? "bg-greyscale-surface-subtle text-primary-text-label border border-primary-border-darker lg:hover:bg-primary-surface-darker lg:hover:text-greyscale-text-negative"
              : "bg-greyscale-surface-disabled text-greyscale-text-title border border-greyscale-border-disabled lg:hover:bg-primary-surface-darker lg:hover:text-greyscale-text-negative"
          }`}
        >
          All Products ({products?.length || 0})
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCategory(category)}
            className={`rounded-3xl px-4 py-2 ${
              activeCategory === category
                ? "bg-greyscale-surface-subtle text-primary-text-label border border-primary-border-darker lg:hover:bg-primary-surface-darker lg:hover:text-greyscale-text-negative"
                : "bg-greyscale-surface-disabled text-greyscale-text-title border border-greyscale-border-disabled lg:hover:bg-primary-surface-darker lg:hover:text-greyscale-text-negative"
            }`}
          >
            {category} ({getCategoryCount(category)})
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
