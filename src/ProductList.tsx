import type { BackendProduct, Product, Category, GroceryProduct } from './interfaces/ProductAndCategories';
import { useState } from 'react';
import useFetch from './utils/useFetch';

/* narrows a Product to a GroceryProduct so we can read bestBefore */
function isGroceryProduct(product: Product): product is GroceryProduct {
  return 'bestBefore' in product;
}

export default function ProductList() {

  const [categories, loadingCategories] = useFetch<Category[]>('/api/categories');
  const [backendProducts, loadingProducts] = useFetch<BackendProduct[]>('/api/products');
  const [products, setProducts] = useState<(Product | GroceryProduct)[] | null>(null);

  // while loading don't display anything
  if (loadingCategories || loadingProducts) { return null; }

  // Transform backendproduct array to product array
  // delete categoryId and add category for each product
  if (!products) {
    const transformedProducts = backendProducts!.map(
      ({ categoryId, bestBefore, ...rest }): Product | GroceryProduct => ({
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
    {products!.map((product) =>
      <article key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Pris: {product.price}</p>
        <p>Category: {product.category.name}</p>
        {isGroceryProduct(product) &&
          <p>Bäst före: {product.bestBefore.toLocaleDateString('sv-SE')}</p>}
      </article>
    )}
  </>;
}