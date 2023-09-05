import "./portfolioCardItem.css";
import cardItem1 from "../../../images/portfolioCard_1.png";
import Button from "react-bootstrap/Button";
// import cardItem2 from "../../../images/portfolioCard_2.png";
// import cardItem3 from "../../../images/portfolioCard_3.png";
// import cardItem4 from "../../../images/portfolioCard_4.png";
// import cardItem5 from "../../../images/portfolioCard_5.png";
// import cardItem6 from "../../../images/portfolioCard_6.png";
import btnArrow from "../../../images/whiteArrow.svg";

const PortfolioCardItem = () => {
  return (
    <div className="portfolioCardItem">
      <div className="portfolioCardItem_wrapper">
        <div className="portfolioCardItem_image">
          <img src={cardItem1} alt="cardItem1" />
        </div>
        <div className="portfolioCardItem_content">
          <div className="portfolioCardItem_heading">
            <h6>Lorem Impsun</h6>
          </div>
          <div className="portfolioCardItem_text">Lorem Impsum</div>
          <Button className="portfolioCardItem_btn rectangle-button ">
            <span className="portfolioCardItem_btn_text">See case study</span>
            <div className="rectangle-button-icon">
              <img src={btnArrow} alt="btnArrow" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCardItem;
