import type { BackendProduct, Product, Category } from './interfaces/ProductAndCategories';
import { useState } from 'react';
import useFetch from './utils/useFetch';

export default function ProductList() {

  const [categories, loadingCategories] = useFetch<Category[]>('/api/categories');
  const [backendProducts, loadingProducts] = useFetch<BackendProduct[]>('/api/products');
  const [products, setProducts] = useState<Product[] | null>(null);

  // while loading don't display anything
  if (loadingCategories || loadingProducts) { return null; }

  // Transform backendproduct array to product array
  // delete categoryId and add category for each product
  if (!products) {
    const transformedProducts = backendProducts!.map(
      ({ categoryId, bestBefore, ...rest }): Product => ({
        ...rest,
        category: categories!.find(category => category.id === categoryId)!,
        /* only grocery products have bestBefore, and it arrives as a string */
        ...(bestBefore ? { bestBefore: new Date(bestBefore) } : {})
      })
    );
    setProducts(transformedProducts);
    return null;
  }

  return <>
    {products!.map(({ id, name, description, price, category, bestBefore }) =>
      <article key={id}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Pris: {price}</p>
        <p>Category: {category.name}</p>
        {bestBefore &&
          <p>Bäst före: {bestBefore.toLocaleDateString('sv-SE')}</p>}
      </article>
    )}
  </>;
}