import "./rectangleCard.css";
import btnArrow from "../src/images/whiteArrow.svg";
const rectangleCard = () => {
  return (
    <div className="first">
      <div className="second">
        <div className="third">
          <div className="get-in-touch">Get in touch</div>
          <div className="box_arrow">
            <img src={btnArrow} alt="btnArrow" />
          </div>
        </div>
        <h2 className="together">Let's get to it, Together</h2>
        <h1 className="common-card-text">Start a Project</h1>
        <button className="rectangle-button">
          <span className="rectangle-button-text">Contact us</span>
          <span className="rectangle-button-icon">
            <img src={btnArrow} alt="btnArrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default rectangleCard;
