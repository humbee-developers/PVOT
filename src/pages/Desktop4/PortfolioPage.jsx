import PortfolioCard from "../../components/portfolio/PortfolioCard";
import HeroHeading from "../Desktop6/HeroHeading/HeroHeading";
import RectangleCard from "../../../Common/RectangleCard";

const PortfolioPage = () => {
  return (
    <div className="portfolio" style={{ backgroundColor: "#000" }}>
      <HeroHeading bigHeading={"Portfolio"} hoverText={"Our Servicessss-"} />
      <PortfolioCard />
      <RectangleCard />
    </div>
  );
};
export default PortfolioPage;
