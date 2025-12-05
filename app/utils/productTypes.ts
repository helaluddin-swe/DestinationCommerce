export interface ProductType {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
}

export interface CartItemType extends ProductType {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  images:string
}

export type CartItems = CartItemType[];
