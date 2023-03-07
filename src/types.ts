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
  price: any;
  deleted: boolean;
  rating: any;
  Marca: string;
  category_id: number;
}

