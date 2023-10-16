import { motion } from "framer-motion";
import "./innerpageheader.css";


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 20, transition: { duration: 2, delay: 1 } },
};
const textVariants1 = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 20, transition: { duration: 2, delay: 2 } },
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
        animate="visible">
        <motion.div className="inner_heading_animation_text1" variants={textVariants}>{props.inner_ani_text1}</motion.div>
        <motion.div className="inner_heading_animation_text2" variants={textVariants1}>{props.inner_ani_text2}</motion.div>
      </motion.div>
   




        <div className="internal_page1">
          <div className="internal_page1_inner">
            <img src={props.logo} alt="" className="logo" />
          </div>
          <div className="internal_page1_inner1">
            <div className="internal_heading">OVERVIEW</div>
            <div className="internal_text ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              voluptas nisi libero tenetur error quis maiores maxime
              exercitationem voluptatem nesciunt, voluptatibus, et, laboriosam
              perferendis quam dicta accusamus aliquam hic possimus asperiores
              dolorem deserunt optio. Velit.
            </div>
          </div>
          <div className="internal_page1_inner2">
            <div className="internal_heading">SERVICES</div>
            <div className="internal_text">
              {" "}
              Brand Identity, Brand Messaging, Website Design, Illustration,
              Packaging Design
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default innerPageHeader;
