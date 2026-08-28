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
}

/*
  Inheritance:
  GroceryProduct extends Product
  (inherits all its properties)
  and then we add one extra property
*/
export interface GroceryProduct extends Product {
  bestBefore: Date;
}

/* 
  In the backend products are stored with categoryId
  rather than category so make BackendProduct interface too
*/
export interface BackendProduct extends Omit<Product, 'category'> {
  categoryId: string;
  /* only present on grocery products, and a string since JSON has no dates */
  bestBefore?: string;
}