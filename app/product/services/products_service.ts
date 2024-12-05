import axios from "axios";
import { Product } from "../stores/product_store";

const BASE_URL = "https://fakestoreapi.com/products";

type sorting = string | null;

export const fetchAllProducts = async (setProductsList: (products: Product[]) => void, 
                                    setProductsListIsLoading: () => void, 
                                    setProductsListIsNotLoading: () => void, 
                                    sort: sorting = null) => {
    try {
        setProductsListIsLoading()
        const response = await axios.get<Product[]>(`${BASE_URL}`);
        setProductsList(response.data);
    } catch (error) {
        console.error(`Error fetching product data: ${error}`);
    } finally {
        setProductsListIsNotLoading()
    }
}
