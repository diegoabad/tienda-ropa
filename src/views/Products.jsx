import useFetch from '../hooks/useFetch';
const Products = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch({ url: 'https://fakestoreapi.com/products' });

  return (
    <div>
      <h1>Products</h1>
      {loading && <p>Cargando productos...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading &&
        !error &&
        products.map((product) => {
          return <div key={product.id}>{product.title}</div>;
        })}
    </div>
  );
};

export default Products;
