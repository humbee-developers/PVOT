import "./rectangleCard.css";
import btnArrow from "../src/images/whiteArrow.svg";
// import  FontAwesomeIcon  from "@fortawesome/react-fontawesome";
// import  faArrowRight from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

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
        <Button className="footer-button rectangleCard_btn ">
          <div className="btn_flex hover_btn">
            <span className="footer-button-text btn_text">Contacts us</span>
            <span className="footer-button-text btn_text">Contacts us</span>
          </div>
          <div className="arrow_icon">
            {/* <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#ffffff" }}
              className="btnArrow"
            /> */}
            <img src={btnArrow} alt="btnArrow" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default rectangleCard;