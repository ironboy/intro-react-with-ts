import type { Product, Category } from './interfaces/ProductAndCategories';
import useFetch from './utils/useFetch';

export default function ProductList() {

  const [categories, loadingCategories] = useFetch<Category[]>('/api/categories');
  const [products, loadingProducts] = useFetch<Product[]>('/api/products');

  // while loading don't display anything
  if (loadingCategories || loadingProducts) { return null; }

  // transform categoryId to category for each product
  if ((products![0] as any).categoryId) {
    const productsWithCategories = products?.map((product) => {
      product.category = categories?.find(
        category => category.id === (product as any).categoryId) as Category;
      delete (product as any).categoryId;
      return product;
    });
    console.log(productsWithCategories);
  }

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