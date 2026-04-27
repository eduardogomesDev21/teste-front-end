export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ProductApiResponse {
  success: boolean;
  products: Product[];
}
