import { useRef } from "react";
import "./bgTransition.css";
import { motion, useScroll, useTransform } from "framer-motion";

const BgTransition = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  // const y = useTransform(scrollYProgress, [0, 1], ["-80%", "-20%"]);
  // const y1 = useTransform(scrollYProgress, [0, 1], ["-60%", "-40%"]);
  // const y2 = useTransform(scrollYProgress, [1, 0], ["-60%", "-50%"]);
  // const y3 = useTransform(scrollYProgress, [1, 0], ["-80%", "-60%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const y1 = useTransform(scrollYProgress, [1, 0], ["-1%", "-99%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [1, 0], ["-30%", "-70%"]);
  //   const x = useTransform(scrollYProgress, [1, 1], ["100%", "-20%"]);
  return (
   <div>

<div className="bgTransition" ref={ref}>
      <div className="bgTransition_wrapper">
        <motion.div
          className="bgTransition_1"
          style={{ scaleY: scrollYProgress, translateY: y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        ></motion.div>
        <motion.div
          className="bgTransition_1"
          style={{ scaleY: scrollYProgress, translateY: y1 }}
        ></motion.div>
        <motion.div
          className="bgTransition_1"
          style={{ scaleY: scrollYProgress, translateY: y2 }}
        ></motion.div>
        <motion.div
          className="bgTransition_1"
          style={{ scaleY: scrollYProgress, translateY: y3 }}
        ></motion.div>
      </div>
    </div>
   </div>
  );
};

export default BgTransition;
