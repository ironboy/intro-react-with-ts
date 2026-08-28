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