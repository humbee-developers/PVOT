import { motion } from "framer-motion";
import "./amazing2023.css";
import amazing2023Image from "../../images/amazing_2023_image.svg";
import ball from "../../images/3d_ball.svg";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Amazing2023 = () => {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  function checkWidthSize() {
    setCheckWidth(window.innerWidth);
  }
  window.addEventListener("resize", checkWidthSize);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".amazing",
        start: "top center-=400px",
        end: "bottom+=3000px center-=200px",
        scrub: true,
        pin: true,
      },
    });

    tl.to(".scrolling-icon", {
      duration: 20,
      x:
        (checkWidth < 1200 ? 450 : 550) ||
        (checkWidth < 991 ? 320 : 450) ||
        (checkWidth < 767 ? 250 : 320),
      ease: "none",
   
    });
    //  550, 450, 370, 280, 150
  }, [checkWidth]);
  console.log(checkWidth);
  return (
    <div className="amazing_animation">
      <div className="amazing">
        <div className="amazing_wrapper">
          <div className="amazing_heading">
            <h2>For an amazing</h2>
          </div>
          <div className="amazing_year">
            <div className="amazing_year_wrapper">
              <span>2</span>
              <div className="ball_container">
                <img src={amazing2023Image} alt="amazing_2023_image" />

                <div className="scrolling-container">
                  <div className="scrolling-icon">
                    <img
                      src={ball}
                      alt="3d_ball"
                      data-aos="fade-left"
                      className="ball_image"
                    />
                    <div className="ball_text">Here we go!</div>
                  </div>
                </div>
              </div>
              <span>2</span>
              <span className="lastText">3</span>
            </div>
          </div>

          <div className="amazing_bgHeading">
            <motion.h2
              className="service-text"
              initial={{ y: 1000 }}
              animate={{ y: 20 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              Amazing
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Amazing2023;
