export interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: string;
  originalPrice: string;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
}
