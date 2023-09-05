import "./blogCardItem.css";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import btnArrow from "../../../images/whiteArrow.svg";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BlogCardItem = ({ image }) => {
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
          <Button className="blogCardItem_btn rectangle-button ">
            <span className="blogCardItem_btn_text">See more</span>
            <div className="rectangle-button-icon">
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
