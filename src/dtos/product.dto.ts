export class Product {
  id: number;
  productName: string;
  description: string;
  image: string;
  price: number;
  constructor(product: Product) {
    this.id = product.id;
    this.productName = product.productName;
    this.description = product.description;
    this.image = product.image;
    this.price = product.price;
  }
}

interface ProductOption {
  id: number;
  optionName: string;
  price: number;
}

export class ProductDetail extends Product {
  starCount: number;
  options: ProductOption[];
  constructor(product: ProductDetail) {
    super(product);
    this.starCount = product.starCount;
    this.options = product.options;
  }
}
