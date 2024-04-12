import Portfolio from "@/components/PortfolioCard/Portfolio";
import { fetchOrganics } from "@/utils/api/requrs";

export default async function PortfolioPage() {
  const data = await fetchOrganics();
  return <Portfolio organic={data.data} />;
}
