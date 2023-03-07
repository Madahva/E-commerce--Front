interface Product {
  name: string;
  description: string;
  category: string;
  brand: string;
  romMemory?: string;
  ramMemory?: string;
  image: string;
  price: number;
  size?: string;
  processor?: string;
  graphicsCard?: string;
  display?: string;
}

interface Brand {
  src: string;
  alt: string;
}

declare const categories: { title: string; img: string }[];
declare const products: Record<string, Product[]>;
declare const brands: Brand[];

export { categories, products, brands };
