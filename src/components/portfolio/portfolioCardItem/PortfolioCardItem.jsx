import "./portfolioCardItem.css";
import Button from "react-bootstrap/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import btnArrow from "../../../images/btn_arrow.svg";

const PortfolioCardItem = ({ image }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="portfolioCardItem"
    >
      <div className="portfolioCardItem_wrapper">
        <div className="portfolioCardItem_image">
          <img src={image} alt="cardItem1" />
        </div>
        <div className="portfolioCardItem_content">
          <div className="portfolioCardItem_heading">
            <h6>Lorem Impsun</h6>
          </div>
      ``    <div className="portfolioCardItem_text">Lorem Impsum</div>
          <Button className="footer-button  ">
            <div className="btn_flex hover_btn">
              <span className="footer-button-text btn_text">
                See case study
              </span>
              <span className="footer-button-text btn_text">
                See case study
              </span>
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
    </motion.div>
  );
};
export default PortfolioCardItem;

PortfolioCardItem.propTypes = {
  image: PropTypes.any,
};
