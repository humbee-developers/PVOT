import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./rooler.css";
const TextRevealEffect = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.5, // Adjust the threshold as needed
  });

  const controlsLeftToRight = useAnimation();
  const controlsRightToLeft = useAnimation();

  useEffect(() => {
    if (inView) {
      controlsLeftToRight.start({
        x: 1200, // Start from the left
        opacity: 1,
        transition: {
          x: { type: "spring", stiffness: 4 },
          opacity: { duration: 2 },
        },
      });

      controlsRightToLeft.start({
        x: -1400, // Start from the right
        opacity: 1,
        transition: {
          x: { type: "spring", stiffness: 4 },
          opacity: { duration: 2 },
        },
      });
    } else {
      controlsLeftToRight.start({
        x: -1100, // Animate back to the left when out of view
        opacity: 1,
        transition: {
          x: { type: "spring", stiffness: 4 },
          opacity: { duration: 2 },
        },
      });

      controlsRightToLeft.start({
        x: 1100, // Animate back to the right when out of view
        opacity: 1,
        transition: {
          x: { type: "spring", stiffness: 4 },
          opacity: { duration: 2 },
        },
      });
    }
  }, [inView, controlsLeftToRight, controlsRightToLeft]);

  return (
    <div style={{ height: "100vh", backgroundColor: "black", color: "white" }}>
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column", // Set the flex direction to column
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="roller-text"
          initial={{ x: -1400, opacity: 1 }} // Start position from left
          animate={controlsLeftToRight}
          style={{}}
        >
          Pushing
        </motion.div>

        {/* Duplicate the motion.div with the same animation properties */}
        <motion.div
          className="roller-text xyz"
          initial={{ x: 1400, opacity: 1 }} // Start position from right
          animate={controlsRightToLeft}
          style={{}}
        >
          boundaries
        </motion.div>
      </div>
    </div>
  );
};

export default TextRevealEffect;
