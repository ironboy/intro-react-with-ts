import type Product from './interfaces/Product';
import { useState, useEffect } from 'react';

export default function ProductList() {

  // Via generics <...> you can tell useState
  // which data type to expect
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from server and update products
  useEffect(() => {
    (async () => {
      setProducts(await (await fetch('/api/products')).json());
    })();
  }, []);

  return <>
    {products.map(({ id, name, description, price }) => <>
      <article key={id}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Pris: {price}</p>
      </article>
    </>)}
  </>;
}