export interface Category {
  id: number,
  typecategory: string
}

export interface Product {
  size: any;
  display: any;
  graphicsCard: any;
  processor: any;
  ramMemory: any;
  romMemory: any;
  id: string;
  name: string;
  quantity: number;
  description: string;
  img: string;
  price: any;
  deleted: boolean;
  rating: any;
  brand: string;
  category_id: number;
}

