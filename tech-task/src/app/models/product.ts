export interface Product {
  id: number;
  title: string;
  image: string;
  url: string;
  price: number;
  currency: string;
  brand: string;
  discountPrice?: number;
}
