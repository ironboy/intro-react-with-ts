export interface Category {
  id: string;
  name: string;
  description: string;
}

/*
  Composition: 
  Product has a Category
*/
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  bestBefore?: Date;
}

/* 
  In the backend products are stored with categoryId
  rather than category so make BackendProduct interface too
  Read more about utility types, Omit and others here:
  https://www.typescriptlang.org/docs/handbook/utility-types.html
*/
export interface BackendProduct extends Omit<Product, 'category'> {
  categoryId: string;
}