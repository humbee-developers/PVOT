import "./blogCardItem.css";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import btnArrow from "../../../images/btn_arrow.svg";

const BlogCardItem = ({ image }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="blogCardItem"
    >
      <div className="blogCardItem_wrapper">
        <div className="blogCardItem_image">
          <img src={image} alt="cardItem1" />
        </div>
        <div className="blogCardItem_content">
          <div className="blogCardItem_heading">
            <h6>Time to Refokus</h6>
          </div>
          <div className="blogCardItem_text">
            It’s time for a new breed of agency that combining design,
            innovation and forward-thinking can help brands create better
            experiences, not just more of the same.
          </div>
          <div className="blogCardItem_date">June 16, 2023</div>
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
export default BlogCardItem;

BlogCardItem.propTypes = {
  image: PropTypes.any,
};
