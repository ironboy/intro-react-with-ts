import type { Product } from './interfaces/ProductAndCategories';
import useFetch from './utils/useFetch';

export default function ProductList() {

  // which data type to expect
  const [products, loading] = useFetch<Product[]>('/api/products');

  if (loading) { return null; }

  return <>
    {products!.map(({ id, name, description, price }) =>
      <article key={id}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Pris: {price}</p>
      </article>
    )}
  </>;
}