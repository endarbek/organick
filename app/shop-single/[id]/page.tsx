import { fetchProduct } from "@/utils/api/requrs";
import ShopSingle from "../page";

export default async function IDPage({ params: { id } }: any) {
  const data = await fetchProduct(id);
  return <ShopSingle product={data.data} />;
}
