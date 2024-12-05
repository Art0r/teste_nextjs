import { create } from 'zustand'

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
  

export interface ProductState {
    products_list: Product[] | null,
    products_list_loading: boolean,
    products_list_error: string | null,
    setProductsListIsLoading: () => void,
    setProductsListIsNotLoading: () => void,
    setProductsListError: (error: string) => void,
    setProductsList: (products: Product[]) => void,
    
    single_product: Product | null,
    setSingleProduct: (product: Product) => void
}
  
export const useProductStore = create<ProductState>((set) => ({
  products_list: null,
  products_list_loading: false,
  products_list_error: null,
  setProductsListIsLoading: () => set(() => ({ products_list_loading: true})),
  setProductsListIsNotLoading: () => set(() => ({ products_list_loading: false})),
  setProductsListError: (error: string) => set(() => ({ products_list_error: error})),
  setProductsList: (products: Product[]) => set(() => ({ products_list: products })),
 
  single_product: null,
  setSingleProduct: (product: Product) => set(() => ({ single_product: product })),
}));