export interface Category {
  id: number,
  typecategory: string
}

export interface Product {
  id: string;
  name: string;
  quantity: number;
  description: string;
  img: string;
  price: string;
  deleted: boolean;
  rating: string;
  Marca: string;
  category_id: number;
}

