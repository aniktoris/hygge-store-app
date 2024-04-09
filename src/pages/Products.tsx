import { Filters } from "@/components/Filters";
import { ProductsContainer } from "@/components/ProductsContainer";
import { PaginationContainer } from "@/components/PaginationContainer";
import { customFetch } from "@/utils/CustomFetch";
import { type ProductsResponse } from "@/utils/types";
import { type LoaderFunction } from "react-router-dom";

const url = '/products';

export const loaderProducts: LoaderFunction = async(): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return {...response.data};
}

function Products() {
  return (
    <>
    <Filters/>
    <ProductsContainer/>
    <PaginationContainer/>
    </>
  );
}
export default Products;
