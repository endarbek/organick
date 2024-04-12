import PortfolioItem from "@/components/PortfolioCard/PortfolioItem/PortfolioItem";
import { fetchOrganic } from "@/utils/api/requrs";
interface Params {
  params: { id: string };
}
export default async function PortfolioItemPage({ params: { id } }: Params) {
  const organic = await fetchOrganic(+id);

  return (
    <div>
      <PortfolioItem organic={organic.data} />
    </div>
  );
}
