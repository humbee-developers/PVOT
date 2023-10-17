import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import linkImage from "../../../images/serviceCardLink.svg";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ServicesCardItem = ({ image, heading, text, link }) => {
  const [resize, setResize] = useState(window.innerWidth);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
  const handleMobileWidth = () => {
    setResize(window.innerWidth);
  };
  window.addEventListener("resize", handleMobileWidth);
  console.log("card", resize);

  return (
    <motion.div
      className="servicesCard_item"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      initial={resize < 768 ? {y: 1500} : { y: 450 }}
    >
      <div className="servicesCard_item_wrapper">
        <div className="servicesCard_item_image">
          <img src={image} alt="services_image" />
        </div>
        <div className="servicesCard_item_content">
          <div className="servicesCard_item_content_wrapper">
            <h2 className="services_card_item_heading">{heading}</h2>
            <div className="services_card_item_text">{text}</div>
            <Link to={link}>
              <img
                src={linkImage}
                alt="serviceCardLink"
                className="services_card_item_link"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ServicesCardItem;

ServicesCardItem.propTypes = {
  image: PropTypes.any,
  heading: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.any,
};
