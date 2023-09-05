import "./portfolioCard.css";
import PortfolioCardItem from "./portfolioCardItem/PortfolioCardItem";

const PortfolioCard = () => {
  return (
    <div className="portfolioCard">
      <div className="portfolioCard_container">
        <div className="portfolioCard_wrapper">
          <PortfolioCardItem />
          <PortfolioCardItem />
          <PortfolioCardItem />
          <PortfolioCardItem />
          <PortfolioCardItem />
          <PortfolioCardItem />
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
