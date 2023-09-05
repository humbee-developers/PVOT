import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./text.css";
const Text = () => {
  const line1 = "With an amazing team in place, in";
  const line2 = "our second year we focused on pushing boundaries ";
  const line3 = "and empowering brands to grow";

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
<div style={{backgroundColor:"black",color:"white"}}>
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
