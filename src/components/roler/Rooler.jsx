import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import "./rooler.css";

const TextRevealEffect = ({ firstText, lastText }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const controlsLeftToRight = useAnimation();
  const controlsRightToLeft = useAnimation();

  useEffect(() => {
    if (inView) {
      controlsLeftToRight.start({
        x: 1400,
        opacity: [1, 1], // Animate opacity from 0.2 to 1
        transition: {
          x: { type: "spring", stiffness: 6 },
          opacity: { duration: 2 },
        },
      });

      controlsRightToLeft.start({
        x: -1500,
        opacity: [1, 1], // Animate opacity from 0.2 to 1
        transition: {
          x: { type: "spring", stiffness: 6 },
          opacity: { duration: 2 },
        },
      });
    } else {
      controlsLeftToRight.start({
        x: -1200,
        opacity: [1, 1], // Animate opacity from 0.2 to 1
        transition: {
          x: { type: "spring", stiffness: 6 },
          opacity: { duration: 1 },
        },
      });

      controlsRightToLeft.start({
        x: 1200,
        opacity: [1, 1], // Animate opacity from 0.2 to 1
        transition: {
          x: { type: "spring", stiffness: 6 },
          opacity: { duration: 0.5 },
        },
      });
    }
  }, [inView, controlsLeftToRight, controlsRightToLeft]);

  return (
    <div style={{ height: "130vh", backgroundColor: "black", color: "white" }}>
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="roller-text"
          initial={{ x: -1400, opacity: 0.2 }}
          animate={controlsLeftToRight}
          style={{}}
        >
          {firstText}
        </motion.div>

        <motion.div
          className="roller-text xyz"
          initial={{ x: 1400, opacity: 0.2 }}
          animate={controlsRightToLeft}
          style={{}}
        >
          {lastText}
        </motion.div>
      </div>
    </div>
  );
};

export default TextRevealEffect;

TextRevealEffect.propTypes = {
  firstText: PropTypes.string,
  lastText: PropTypes.string,
};
