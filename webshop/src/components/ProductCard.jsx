import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/dataFetching';

const ProductCard = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="card grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {data.map(({ id, title, price, description, image, category }) => (
        <div key={id}>
          <img className=" w-[300px]" src={image} alt={title} />
          <div className=" flex justify-between border">
            <h1 className=" font-bold">{title}</h1>
            <p>{category}</p>
          </div>
          <p className="border">{description}</p>
          <div className="flex justify-between border">
            <button className="bg-blue-500 text-white rounded">Lägg i varukorgen</button>
            <p>{price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
