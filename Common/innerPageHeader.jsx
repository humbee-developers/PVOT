import { motion } from "framer-motion";
import "./innerpageheader.css";
import gsap from "gsap";
import splitType from "split-type";
import { useEffect } from "react";

// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: {
//     opacity: 1,
//     x: 50,
//     y: -100,
//     z: 100,

//     transition: { duration: 1, delay: 0.5 },
//   },
// };
// const textVariants1 = {
//   hidden: { opacity: 0, y: 220 },
//   visible: {
//     opacity: 1,
//     x: 50,
//     y: 50,
//     z: 100,
//     transition: { duration: 1, delay: 0.5 },
//   },
// };

const innerPageHeader = (props) => {
  useEffect(() => { 
    const ourText = new splitType(".inner_page_heading", { types: "chars" });
    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
        rotate: "45deg",
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 2,
        rotate: "0deg",
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div className="inner_page_main">
      <div className="internal_page1_image1">
        <img src={props.header} alt="" />
        <div
          className="inner_page_animation"
          // variants={containerVariants}
          // initial="hidden"
          // animate="visible"
        >
          {props.inner_ani_text1 !== "" && (
            <div
              className="inner_heading_animation_text1 inner_page_heading"
              // variants={textVariants}
            >
              {props.inner_ani_text1}
            </div>
          )}
          {props.inner_ani_text2 !== "" && (
            <div
              className="inner_heading_animation_text2 inner_page_heading"
              // variants={textVariants1}
            >
              {props.inner_ani_text2}
            </div>
          )}
        </div>
      </div>
      <div className="common_container">
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
