
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import "./heroHeading.css";
const HeroHeading = ({ bigHeading, hoverText }) => {
  const outer = useRef(null);
  const inner = useRef(null);
  const manageMouseEnter = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: "-100%" });
      gsap.set(inner.current, { top: "100%" });
    } else {
      gsap.set(outer.current, { top: "100%" });
      gsap.set(inner.current, { top: "-100%" });
    }
    gsap.to(outer.current, { top: "0%", duration: 0.3 });
    gsap.to(inner.current, { top: "0%", duration: 0.3 });
  };

  const manageMouseLeave = (e) => {
    const bounds = e.target.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: "-100%", duration: 0.3 });
      gsap.to(inner.current, { top: "100%", duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: "100%", duration: 0.3 });
      gsap.to(inner.current, { top: "-100%", duration: 0.3 });
    }
  };

  return (
    // <div className="hero_heading">
    //   <h1>{bigHeading}</h1>
    // </div>
    <motion.div
      className={"hero_heading_section"}
      // variants={opacity}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div className="el">
        <div
          className="hero_heading"
          onMouseEnter={(e) => {
            manageMouseEnter(e);
          }}
          onMouseLeave={(e) => {
            manageMouseLeave(e);
          }}
        >
          <h1>{bigHeading}</h1>
        </div>
        <div ref={outer} className={"outer"}>
          <div ref={inner} className={"inner"}>
            <div className="hero_heading_container">
              <div className="imageContainer">
                <p>{hoverText}</p>
              </div>
              <div className="imageContainer">
                <p>{hoverText}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default HeroHeading;

HeroHeading.propTypes = {
  bigHeading: PropTypes.string,
  hoverText: PropTypes.string,
};
