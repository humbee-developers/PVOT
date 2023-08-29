import { motion, useScroll } from "framer-motion";
import "./amazing2023.css";

const Amazing2023 = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="amazing">
      <div className="amazing_heading">
        <h2>For an amazing</h2>
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <h1>
        <code>useScroll</code> demo
      </h1>
    </div>
  );
};
export default Amazing2023;
