import { motion } from "framer-motion";
import "./innerpageheader.css";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    x: 50,
    y: -20,
    transition: { duration: 1, delay: 0.5 },
  },
};
const textVariants1 = {
  hidden: { opacity: 0, y: 220 },
  visible: {
    opacity: 1,
    x: 90,
    y: 90,
    transition: { duration: 1, delay: 0.5 },
  },
};
const innerPageHeader = (props) => {
  return (
    <div className="inner_page_main">
      <img className="internal_page1_image1" src={props.header} alt="" />
      <div className="common_container">
        <motion.div
          className="inner_page_animation"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {props.inner_ani_text1 !== "" && (
            <motion.div
              className="inner_heading_animation_text1"
              variants={textVariants}
            >
              {props.inner_ani_text1}
            </motion.div>
          )}
          {props.inner_ani_text2 !== "" && (
            <motion.div
              className="inner_heading_animation_text2"
              variants={textVariants1}
            >
              {props.inner_ani_text2}
            </motion.div>
          )}
        </motion.div>
        <div className="internal_page1">
          {props.logo !== null && (
            <div className="internal_page1_inner">
              <img src={props.logo} alt="" className="logo" />
            </div>
          )}
          {props.overViewText !== "" && (
            <div className="internal_page1_inner1">
              <div className="internal_heading">{props.overViewHeading}</div>
              <div className="internal_text ">{props.overViewText}</div>
            </div>
          )}
          {props.servicesText !== "" && (
            <div className="internal_page1_inner2">
              <div className="internal_heading">{props.servicesHeading}</div>
              <div className="internal_text">{props.servicesText}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default innerPageHeader;
