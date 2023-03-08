export interface Category {
  id: any;
  typecategory: string;
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
  category_id: any;
}

export interface ProductCreate {
  name: string;
  quantity: number;
  description: string;
  img: string;
  price: any;
  deleted: boolean;
  rating: any;
  Marca: string;
  category_id: any;
}

export interface PaymentHistory {
  data: {
    id: number;
    title: string;
    price: number;
    amount: number;
    quantity: number;
    user: string;
    createdAt: string;
  };
  message: string;
  success: boolean;
}
