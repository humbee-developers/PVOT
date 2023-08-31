import { motion } from "framer-motion";
import "./amazing2023.css";
import amazing2023Image from "../../images/amazing_2023_image.svg";
import ball from "../../images/3d_ball.svg";
import { useEffect, useState } from "react";

const Amazing2023 = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxScroll) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="amazing">
      <div className="amazing_wrapper">
        <div className="amazing_heading">
          <h2>For an amazing</h2>
        </div>
        <div className="amazing_year">
          <div className="amazing_year_wrapper">
            <span>2</span>
            <div className="ball_container">
              <img src={amazing2023Image} alt="amazing_2023_image" />

              <div className="scrolling-container">
                <motion.div
                  className="scrolling-icon"
                  style={{ left: `${scrollProgress}%` }}
                >
                  <img
                    src={ball}
                    alt="3d_ball"
                    data-aos="fade-left"
                    className="ball_image"
                  />
                </motion.div>
              </div>
            </div>
            <span>2</span>
            <span>3</span>
          </div>
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
      </div>
    </div>
  );
};
export default Amazing2023;
