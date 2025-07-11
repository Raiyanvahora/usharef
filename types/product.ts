export interface ProductModel {
  name: string;
  image: string;
  price: string;
  originalPrice?: string;
  description?: string;
  features?: string[];
  specifications?: {
    [key: string]: string;
  };
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  models: ProductModel[];
} 