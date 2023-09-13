import "./servicesText.css";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesText = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow multiple triggers
    threshold: 0.5, // Adjust the threshold as needed
  });

  const controlsLeftToRight = useAnimation();
  const controlsRightToLeft = useAnimation();

  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  useEffect(() => {
    if (inView) {
      controlsLeftToRight.start({
        x: 1400, // Start from the left
        opacity: 1,
        transition: {
          x: { type: "spring", stiffness: 3 },
          opacity: { duration: 1 },
        },
      });

      controlsRightToLeft.start({
        x: -1500, // Start from the right
        opacity: 1,
        transition: {
          x: { type: "spring", stiffness: 3 },
          opacity: { duration: 1 },
        },
      });
    } else {
      controlsLeftToRight.start({
        x: -1200, // Animate back to the left when out of view
        opacity: 1,
        transition: {
          x: { type: "spring", stiffness: 3 },
          opacity: { duration: 1 },
        },
      });

      controlsRightToLeft.start({
        x: 1100, // Animate back to the right when out of view
        opacity: 1,
        transition: {
          x: { type: "spring", stiffness: 3 },
          opacity: { duration: 1 },
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
          className="roller-text services_text"
          initial={{ x: -1400, opacity: 1 }} // Start position from left
          animate={controlsLeftToRight}
          // style={{ transition: "all 0.3s ease-in-out" }}
        >
          Website Design
        </motion.div>

        {/* Duplicate the motion.div with the same animation properties */}
        <motion.div
          className="roller-text services_text"
          initial={{ x: 1400, opacity: 1 }} // Start position from right
          animate={controlsRightToLeft}
          // style={{ transition: "all 0.3s ease-in-out" }}
        >
          Social Media Marketing
        </motion.div>
        <motion.div
          className="roller-text services_text"
          initial={{ x: -1400, opacity: 1 }} // Start position from left
          animate={controlsLeftToRight}
          // style={{ transition: "all 0.3s ease-in-out" }}
        >
          Search Engine Optimization
        </motion.div>
        <motion.div
          className="roller-text services_text "
          initial={{ x: 1400, opacity: 1 }} // Start position from right
          animate={controlsRightToLeft}
          // style={{ transition: "all 0.3s ease-in-out" }}
        >
          Advertising & Marketing
        </motion.div>
      </div>
    </div>
  );
};
export default ServicesText;
