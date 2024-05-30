export const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Error fetching products');
  }
  return response.json();
};

export const getCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  if (!response.ok) {
    throw new Error('Error fetching categories');
  }
  return response.json();
};
