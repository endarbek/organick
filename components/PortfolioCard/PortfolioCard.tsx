import Image from "next/image";

interface PortfolioCardProps {
  url: string;
  title: string;
  category: string;
}

const PortfolioCard = ({ url, title, category }: PortfolioCardProps) => {
  return (
    <div>
      <Image src={url} alt="" width={500} height={500} />
      <h3>{title}</h3>
      <div>{category}</div>
    </div>
  );
};

export default PortfolioCard;
