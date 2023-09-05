import { useRef } from "react";
import sliderImage from "../../../images/slider_image1.png";
import { motion, useScroll, useTransform } from "framer-motion";
import "./servicesCard.css";

const ServicesCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["60%", "-95%"]);
  console.log(scrollYProgress);
  return (
    <div className="servicesCard" ref={ref}>
      <div className="servicesCard_inner">
        <motion.div style={{ x }} className="servicesCard_wrapper">
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
          <img src={sliderImage} alt="slide1" />
        </motion.div>
      </div>
    </div>
  );
};
export default ServicesCard;
