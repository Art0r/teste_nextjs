'use client'

import { fetchAllProducts } from "./services/products_service";
import { useProductStore } from "./stores/product_store";


const ProductIndex = () => {
  console.log("rendered");
  const {products_list, products_list_loading, setProductsList, setProductsListIsLoading, setProductsListIsNotLoading} = useProductStore();

  fetchAllProducts(setProductsList, setProductsListIsLoading, setProductsListIsNotLoading);

  return (
    <div>
      {products_list_loading ? <p>Loading</p> : products_list?.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  )
}

export default ProductIndex;
