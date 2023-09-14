import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./text.css";
import PropTypes from "prop-types";
const Text = ({ line_1, line_2, line_3 }) => {
  const line1 = line_1;
  const line2 = line_2;
  const line3 = line_3;

  const letters1 = Array.from(line1);
  const letters2 = Array.from(line2);
  const letters3 = Array.from(line3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 },
    },
  };

  const childVariants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const [ref, inView] = useInView();

  const paragraphStyle = {
    textAlign: "center",
    lineHeight: "1.5",
    fontSize: "2.4rem",
  };

  return (
    <div
      style={{ backgroundColor: "black", color: "white" }}
      className="animatedText"
    >
      <div ref={ref} style={{ overflow: "hidden", ...paragraphStyle }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {letters1.map((letter, index) => (
            <motion.span variants={childVariants} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {letters2.map((letter, index) => (
            <motion.span variants={childVariants} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {letters3.map((letter, index) => (
            <motion.span variants={childVariants} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Text;

Text.propsTypes = {
  line_1: PropTypes.string,
  line_2: PropTypes.string,
  line_3: PropTypes.string,
};
