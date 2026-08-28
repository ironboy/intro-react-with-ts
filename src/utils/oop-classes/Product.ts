

import type { Product as ProductInterface, Category }
  from "../../interfaces/ProductAndCategories";

export default class Product implements ProductInterface {

  // ! -> definite assignment assertions (≈ null forgiving)
  // needed if not assigned specifically in the constructor
  id!: string;
  name!: string;
  description!: string;
  price!: number;
  category!: Category;
  bestBefore?: Date;

  // See:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  #formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency", currency: "SEK"
  });

  constructor(settings: ProductInterface) {
    // copy all properties from a settings object
    // that should follow form of the ProductInterface
    // to this instance of the class
    Object.assign(this, settings);
  }

  get priceIncVat() {
    // assume food vat if has bestBefore
    return this.price * (this.bestBefore ? 1.06 : 1.25);
  }

  get priceIncVatFormatted() {
    return this.#formatter.format(this.priceIncVat);
  }

  get priceExVatFormatted() {
    return this.#formatter.format(this.price);
  }

}