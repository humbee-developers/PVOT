import { motion } from "framer-motion";
import "./amazing2023.css";
import amazing2023Image from "../../images/2023-outer.png";
import ball from "../../images/3d_ball.svg";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Amazing2023 = () => {
  const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  function checkWidthSize() {
    setCheckWidth(window.innerWidth);
  }
  let ballX = 570;
  if (checkWidth < 1200 && checkWidth > 991) {
    ballX = 312;
    console.log("<1199");
  } else if (checkWidth < 991 && checkWidth > 767) {
    ballX = 630;
    console.log("<991");
  } else if (checkWidth < 767 > 476) {
    ballX = 500;
    console.log("<767");
  } else if (checkWidth < 476) {
    ballX = 255;
  } else {
    ballX = 570;
    console.log(">1199");
  }
  window.addEventListener("resize", checkWidthSize);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".amazing",
        start: "top center-=400px",
        end: "bottom+=200px center-=200px",
        scrub: true,
        pin: true,
        onUpdate: (scrollTrigger) => {
          const scrollProgress = scrollTrigger.progress;
          const scrollSpeed = 1 + scrollProgress * 2; // Adjust this factor as needed

          // Update the animation's time
          tl.time(scrollSpeed * scrollProgress);
        },
      },
    });

    tl.to(".scrolling-icon", {
      duration: 1,
      x: ballX,
      ease: "none",
    });
  }, [checkWidth]);

  useEffect(() => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".amazing",
        start: "top center-=350px",
        end: "bottom+=30px center-=20px",
        scrub: true,
      },
    });

    t2.to(".lastText", {
      duration: 1,
      y: 150,
      ease: "none",
      opacity: 0,
    });
  }, [checkWidth]);

  useEffect(() => {
    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".amazing",
        start: "top center-=350px",
        end: "bottom+=30px center-=20px",
        opacity: "0",
        scrub: true,
      },
    });

    t3.to(".lastText1", {
      duration: 2,
      delay: 2,
      y: 195,
      ease: "none",
      opacity: 1,
    });
  }, [checkWidth]);

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
                  <img src={amazing2023Image} className="ball-outer" alt="" />

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
                <span className="lastText" style={{ marginLeft: "-5px" }}>
                  2
                </span>
                <span className="lastText1">3</span>
              </div>
            </div>

            <div className="amazing_bgHeading">
              <motion.h2
                className="service-text"
                initial={{ y: 250, opacity: 0 }}
                animate={{ y: 20, opacity: 1 }}
                transition={{
                  duration: 0.5,
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
