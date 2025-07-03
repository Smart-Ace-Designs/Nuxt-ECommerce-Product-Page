export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  discount: number;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}
