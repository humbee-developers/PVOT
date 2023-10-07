import "./Cocard.css";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
// import styles from "./style.module.css";
import gsap from "gsap";
import hoverImage from "../src/images/i1.webp";
import hoverImage2 from "../src/images/i2.webp";
import hoverImage3 from "../src/images/i3.webp";
import hoverImage4 from "../src/images/i4.webp";



// const servicesPageCardImage = [
//   {
//   image:hoverImage1,
//   },
//   {
//   image:hoverImage2,
//   },
//   {
//   image:hoverImage3,
//   },
//   {
//   image:hoverImage4,
//   },
 
// ];


const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function commonCard({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
      xMoveCursor(pageX);
      yMoveCursor(pageY);
      xMoveCursorLabel(pageX);
      yMoveCursorLabel(pageY);
    });
  }, []);
  return (
    //   <div className="service-card">
    //   <div className="service-detail-card">
    //     <div className="service-detail-card-left">{props.title}</div>
    //     <div className="service-detail-card-right">
    //       <p className="service-detail-card-text">{props.content}</p>
    //       <button className="service-button">
    //         <span className="service-button-text">Become a Client</span>
    //         <span className="service-button-icon"></span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={"modalContainer"}
      >
        <div style={{ top: index * -100 + "%" }} className={'modalSlider'}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className={'modal'}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img src={hoverImage2} width={300} height={0} alt="image" />
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        className={"cursor"}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        className={"cursorLabel"}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
