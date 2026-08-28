import type { BackendProduct, Product as ProductInterface, Category } from './interfaces/ProductAndCategories';
import Product from './utils/oop-classes/Product';
import { useState } from 'react';
import useFetch from './utils/useFetch';

export default function ProductList() {

  const [categories, loadingCategories] = useFetch<Category[]>('/api/categories');
  const [backendProducts, loadingProducts] = useFetch<BackendProduct[]>('/api/products');
  const [products, setProducts] = useState<ProductInterface[] | null>(null);

  // while loading don't display anything
  if (loadingCategories || loadingProducts) { return null; }

  // Transform backendproduct array to product array
  // delete categoryId and add category for each product
  // -> could be refactored to a small utility function in a separate file
  if (!products) {
    const transformedProducts = backendProducts!.map(
      ({ categoryId, bestBefore, ...rest }): ProductInterface => new Product({
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
    {products!.map(({ id, name, description, category, bestBefore,
      priceIncVatFormatted, priceExVatFormatted }) =>
      <article key={id}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Pris: {priceIncVatFormatted} inkl. moms (exkl. moms: {priceExVatFormatted})</p>
        <p>Category: {category.name}</p>
        {bestBefore &&
          <p>Bäst före: {bestBefore.toLocaleDateString('sv-SE')}</p>}
      </article>
    )}
  </>;
}