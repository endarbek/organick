import { fetchProducts } from "@/utils/api/requrs";
import Product from "./Product";

const Products = async () => {
  const data = await fetchProducts();
  return <Product products={data.data} />;
};

export default Products;
