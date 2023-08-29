import { motion, useScroll } from "framer-motion";
import "./amazing2023.css";
import amazing2023Image from "../../images/amazing_2023_image.svg";
import ball from "../../images/3d_ball.svg";

const Amazing2023 = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="amazing">
      <div className="amazing_wrapper">
        <div className="amazing_heading">
          <h2>For an amazing</h2>
        </div>
        <div className="amazing_year">
          <p>
            <span>2</span>
            <div className="ball_container">
              <img src={amazing2023Image} alt="amazing_2023_image" />
              <img src={ball} alt="3d_ball" className="ball_image" />
            </div>
            <span>2</span>
            <span>3</span>
          </p>
        </div>
        <div className="amazing_bgHeading">
          <motion.h2
            className="service-text"
            initial={{ y: 1000 }}
            animate={{ y: 20 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            Amazing
          </motion.h2>
        </div>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </div>
  );
};
export default Amazing2023;
