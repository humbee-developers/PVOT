import { useRef } from "react";
import "./bgTransition.css";
import { motion, useScroll, useTransform } from "framer-motion";

const BgTransition = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [1, 1], ["100%", "0%"]);
  //   const x = useTransform(scrollYProgress, [1, 1], ["100%", "-20%"]);
  return (
    <div className="bgTransition" ref={ref}>
      <div className="bgTransition_wrapper">
        <motion.div
          className="bgTransition_1"
          style={{ scaleY: scrollYProgress, y }}
        >
          1
        </motion.div>
        <motion.div
          className="bgTransition_2"
          style={{ scaleY: scrollYProgress, y }}
        >
          2
        </motion.div>
        <motion.div
          className="bgTransition_3"
          style={{ scaleY: scrollYProgress, y }}
        >
          3
        </motion.div>
        <motion.div
          className="bgTransition_4"
          style={{ scaleY: scrollYProgress, y }}
        >
          4
        </motion.div>
      </div>
    </div>
  );
};

export default BgTransition;
