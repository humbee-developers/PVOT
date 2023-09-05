import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./careerCardItem.css";

const CareerCardItem = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2.5 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  console.log(scrollYProgress);
  return (
    <motion.div
      className="careerCardItem"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      // initial={{ y: 200 }}
    >
      <div className="careerCardItem_left_right">
        <div className="careerCardItem_left">
          <div className="careerCardItem_heading">
            <h3>Lorem ipsum</h3>
          </div>
          <div className="careerCardItem_left_left_right">
            <div className="careerCardItem_left_left_right_left">
              <div className="careerCardItem_smallText">Experience</div>
              <div className="careerCardItem_smallNum">5+</div>
            </div>
            <div className="careerCardItem_left_left_right_right">
              <div className="careerCardItem_smallText">Positions</div>
              <div className="careerCardItem_smallNum">4</div>
            </div>
          </div>
        </div>
        <div className="careerCardItem_right">
          <div className="card_btn hover_btn">
            <span className="btn_text">View Detail</span>
            <span className="btn_text">View Detail</span>
          </div>
          <div className="card_btn white_btn hover_btn">
            <span className="btn_text">Apply Now</span>
            <span className="btn_text">Apply Now</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default CareerCardItem;
